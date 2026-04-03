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
import java.util.ArrayList;
import java.util.List;
import com.smi.generated.majc_tr_don_0312.Document;
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

        public ValidationError(String message, int line, int column) {
            this.message = message;
            this.line = line;
            this.column = column;
        }

        public ValidationError(String message, int line, int column, String fieldPath, String invalidValue) {
            this.message = message;
            this.line = line;
            this.column = column;
            this.fieldPath = fieldPath;
            this.invalidValue = invalidValue;
        }

        public ValidationError() {
        }
    }

    public static class CustomValidationEventHandler implements ValidationEventHandler {
        private final List<ValidationError> errors = new ArrayList<>();

        @Override
        public boolean handleEvent(ValidationEvent event) {
            ValidationEventLocator locator = event.getLocator();
            String fieldPath = null;
            String invalidValue = null;

            if (locator.getObject() != null) {
                fieldPath = locator.getObject().toString();
            }
            if (locator.getNode() != null && locator.getNode().getNodeValue() != null) {
                invalidValue = locator.getNode().getNodeValue();
            }

            errors.add(new ValidationError(
                    event.getMessage(),
                    locator.getLineNumber(),
                    locator.getColumnNumber(),
                    fieldPath,
                    invalidValue
            ));
            return true;
        }

        public List<ValidationError> getErrors() {
            return errors;
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