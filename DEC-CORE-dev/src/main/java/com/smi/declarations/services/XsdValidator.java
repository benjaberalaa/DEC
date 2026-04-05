package com.smi.declarations.services;

import jakarta.xml.bind.*;
import lombok.Getter;
import lombok.Setter;
import org.glassfish.jaxb.runtime.marshaller.NamespacePrefixMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import java.io.File;
import java.io.StringWriter;
import java.util.List;
import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.SAXParseException;

@Service
public class XsdValidator {

    private static final Logger logger = LoggerFactory.getLogger(XsdValidator.class);

    @Setter
    @Getter
    public static class ValidationError {
        private String message;
        private int line;
        private int column;
        private String fieldPath;
        private String invalidValue;
        private String fieldName;
        private String advice;

        public ValidationError(String message, int line, int column) {
            this.message = message;
            this.line = line;
            this.column = column;
        }

        public ValidationError(String message, int line, int column, String fieldPath, String invalidValue, String fieldName, String advice) {
            this.message = message;
            this.line = line;
            this.column = column;
            this.fieldPath = fieldPath;
            this.invalidValue = invalidValue;
            this.fieldName = fieldName;
            this.advice = advice;
        }

        public ValidationError() {
        }
    }

    public static class CustomValidationEventHandler implements ValidationEventHandler {
        private final java.util.Map<String, ValidationError> errorMap = new java.util.LinkedHashMap<>();

        private String getFriendlyMessage(String technicalMessage) {
            if (technicalMessage == null) return "Erreur inconnue";
            
            if (technicalMessage.contains("cvc-complex-type.2.4.a") || technicalMessage.contains("is expected")) {
                String found = technicalMessage.contains("starting with element '") ? 
                               technicalMessage.split("element '")[1].split("'")[0] : "?";
                String expected = technicalMessage.contains("One of '{") ? 
                                  technicalMessage.split("One of '\\{")[1].split("\\}'")[0] : "?";
                return "L'élément '" + found + "' est mal placé ou manquant. L'élément '" + expected + "' est attendu à cette position.";
            }
            
            if (technicalMessage.contains("cvc-pattern-valid")) {
                String val = technicalMessage.contains("Value '") ? 
                             technicalMessage.split("Value '")[1].split("'")[0] : "la valeur";
                return "Le format de la valeur '" + val + "' est incorrect.";
            }

            if (technicalMessage.contains("cvc-type.3.1.3")) {
                String val = technicalMessage.contains("value '") ? 
                             technicalMessage.split("value '")[1].split("'")[0] : "la valeur";
                String elem = technicalMessage.contains("element '") ? 
                              technicalMessage.split("element '")[1].split("'")[0] : "";
                
                if (!elem.isEmpty()) {
                    return "La valeur '" + val + "' du champ '" + elem + "' n'est pas valide.";
                }
                return "La valeur '" + val + "' n'est pas valide.";
            }

            return technicalMessage.replaceAll("cvc-[^:]+: ", "");
        }

        private String extractAdvice(String technicalMessage) {
            if (technicalMessage == null) return null;
            if (technicalMessage.contains("respect to pattern '")) {
                return "Format attendu : " + technicalMessage.split("pattern '")[1].split("'")[0];
            }
            if (technicalMessage.contains("One of '{")) {
                return "Éléments possibles : " + technicalMessage.split("One of '\\{")[1].split("\\}'")[0];
            }
            return null;
        }

        private String extractFieldName(String technicalMessage) {
            if (technicalMessage == null) return null;
            if (technicalMessage.contains("element '")) {
                return technicalMessage.split("element '")[1].split("'")[0];
            }
            return null;
        }

        private String extractValue(String technicalMessage, String originalValue) {
            if (originalValue != null && !originalValue.equals("null")) return originalValue;
            if (technicalMessage == null) return null;
            if (technicalMessage.contains("Value '")) {
                return technicalMessage.split("Value '")[1].split("'")[0];
            }
            if (technicalMessage.contains("value '")) {
                return technicalMessage.split("value '")[1].split("'")[0];
            }
            return originalValue;
        }

        @Override
        public boolean handleEvent(ValidationEvent event) {
            ValidationEventLocator locator = event.getLocator();
            String msg = event.getMessage();
            String fieldName = extractFieldName(msg);
            
            String key = (fieldName != null) ? fieldName : (locator.getLineNumber() + ":" + locator.getColumnNumber());
            
            String friendlyMsg = getFriendlyMessage(msg);
            String advice = extractAdvice(msg);
            
            if (errorMap.containsKey(key)) {
                ValidationError existing = errorMap.get(key);
                // Only append if the message is different and not a subset
                if (!existing.getMessage().contains(friendlyMsg) && !friendlyMsg.contains(existing.getMessage())) {
                    existing.setMessage(existing.getMessage() + " / " + friendlyMsg);
                }
                if (advice != null) {
                    if (existing.getAdvice() == null) {
                        existing.setAdvice(advice);
                    } else if (!existing.getAdvice().contains(advice)) {
                        existing.setAdvice(existing.getAdvice() + " / " + advice);
                    }
                }
            } else {
                String fieldPath = (locator.getObject() != null) ? locator.getObject().toString() : null;
                String invVal = (locator.getNode() != null && locator.getNode().getNodeValue() != null) ? 
                               locator.getNode().getNodeValue() : null;
                
                errorMap.put(key, new ValidationError(
                        friendlyMsg,
                        locator.getLineNumber(),
                        locator.getColumnNumber(),
                        fieldPath,
                        extractValue(msg, invVal),
                        fieldName,
                        advice
                ));
            }
            return true;
        }

        public List<ValidationError> getErrors() {
            return new java.util.ArrayList<>(errorMap.values());
        }
    }

    // Make CustomNamespacePrefixMapper static if validateAndConvert is static
    public static class CustomNamespacePrefixMapper extends NamespacePrefixMapper {
        @Override
        public String getPreferredPrefix(String namespaceUri, String suggestion, boolean requirePrefix) {
            if ("http://www.w3.org/2007/XMLSchema-versioning".equals(namespaceUri)) {
                return "vc";
            }
            // Replace with your actual document namespace if applicable
            if ("http://www.mondomaine.com/schemas/majc_tr_don_0312".equals(namespaceUri)) {
                return ""; // No prefix for default namespace
            }
            return suggestion;
        }
    }

    /**
     * Validates a JAXB object against an XSD schema and converts it to an XML string.
     * Collects all validation errors.
     *
     * @param object The JAXB object to validate and convert.
     * @param xsdPath The path to the XSD schema file.
     * @param validationErrors A list to populate with any validation errors found.
     * @return The generated XML string if validation is successful, otherwise null.
     * @throws Exception if an unexpected error occurs during processing.
     */
    public static String validateAndConvert(Object object, String xsdPath, List<ValidationError> validationErrors) throws Exception {
        try {
            if (object == null) {
                throw new IllegalArgumentException("L'objet à valider ne peut pas être null.");
            }
            if (xsdPath == null || xsdPath.isEmpty()) {
                throw new IllegalArgumentException("Le chemin du schéma XSD ne peut pas être null ou vide.");
            }

            SchemaFactory schemaFactory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            Schema schema = schemaFactory.newSchema(new File(xsdPath));

            JAXBContext context = JAXBContext.newInstance(object.getClass());
            Marshaller marshaller = context.createMarshaller();
            marshaller.setSchema(schema);
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
            marshaller.setProperty(Marshaller.JAXB_ENCODING, "UTF-8");

            try {
                marshaller.setProperty("com.sun.xml.bind.namespacePrefixMapper", new CustomNamespacePrefixMapper());
            } catch (PropertyException e) {
                logger.warn("Could not set com.sun.xml.bind.namespacePrefixMapper property. This is expected if not using Glassfish/EclipseLink JAXB. Error: {}", e.getMessage());
            }

            CustomValidationEventHandler eventHandler = new CustomValidationEventHandler();
            marshaller.setEventHandler(eventHandler);

            StringWriter writer = new StringWriter();
            marshaller.setProperty(Marshaller.JAXB_FRAGMENT, Boolean.TRUE);
            writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
            marshaller.marshal(object, writer);
            String xmlContent = writer.toString();

            String modifiedXmlContent = xmlContent;

            if (!eventHandler.getErrors().isEmpty()) {
                validationErrors.addAll(eventHandler.getErrors());
                logger.error("Validation échouée avec {} erreur(s).", eventHandler.getErrors().size());
                return null; // Retourner null au lieu de lancer une exception
            }

            logger.info("Validation réussie.");
            return modifiedXmlContent;

        } catch (MarshalException e) {
            logger.error("Erreur de marshalling JAXB : {}", e.getMessage(), e);
            throw new Exception("Erreur de marshalling : " + e.getMessage(), e);
        } catch (JAXBException | SAXParseException e) {
            logger.error("Erreur JAXB ou XML : {}", e.getMessage(), e);
            throw new Exception("Erreur de traitement XML : " + e.getMessage(), e);
        } catch (Exception e) {
            logger.error("Erreur inattendue : {}", e.getMessage(), e);
            throw new Exception("Erreur inattendue lors de la validation et conversion : " + e.getMessage(), e);
        }
    }

    /**
     * Validates a JAXB Document object against an XSD schema.
     * This method focuses purely on validation without producing an XML string.
     *
     * @param document The JAXB Document object to validate.
     * @param xsdPath The path to the XSD schema file.
     * @param errors A list to populate with any validation errors found.
     * @throws RuntimeException if an unexpected error occurs during validation.
     */
    public void validate(Object document, String xsdPath, List<ValidationError> errors) {
        try {
            if (document == null) {
                throw new IllegalArgumentException("L'objet à valider ne peut pas être null.");
            }
            if (xsdPath == null || xsdPath.isEmpty()) {
                throw new IllegalArgumentException("Le chemin du schéma XSD ne peut pas être null ou vide.");
            }

            JAXBContext jaxbContext = JAXBContext.newInstance(document.getClass());
            Marshaller marshaller = jaxbContext.createMarshaller();

            SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            Schema schema = sf.newSchema(new File(xsdPath));
            marshaller.setSchema(schema);

            CustomValidationEventHandler eventHandler = new CustomValidationEventHandler();
            marshaller.setEventHandler(eventHandler);

            marshaller.marshal(document, new DefaultHandler());

            errors.addAll(eventHandler.getErrors());

        } catch (Exception e) {
            logger.error("Erreur lors de la validation XSD: {}", e.getMessage(), e);
            throw new RuntimeException("Erreur lors de la validation XSD", e);
        }
    }


}