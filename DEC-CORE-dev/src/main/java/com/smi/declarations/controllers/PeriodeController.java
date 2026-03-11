package com.smi.declarations.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.smi.declarations.entities.Periode;

import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.declarations.services.TrService.TrDonService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.majc_tr_don_0312.Document;
import jakarta.persistence.EntityNotFoundException;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Marshaller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;

import com.smi.declarations.entities.Periode.Status;
import org.xml.sax.helpers.DefaultHandler;

import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

@RestController
@RequestMapping("/api/periodes")
@CrossOrigin(origins = "http://localhost:4200")
public class PeriodeController {

    @Autowired
    private PeriodeRepository periodeRepository;

    @Autowired
    private TrDonService excelToJsonService;
    @Autowired
    private TrDonService trDonService;
    @Autowired
    private XsdValidator xsdValidator;



    @PostMapping("/create")
    public ResponseEntity<?> createPeriode(@RequestBody Periode periode) {
        try {
            if (periode.getTypePeriode() == null || periode.getPeriodicity() == null) {
                return ResponseEntity.badRequest().body(Map.of("message", "Type et periodicité obligatoires", "status", "error"));
            }

            // Vérifier les périodes existantes pour ce type
            List<Periode> periodesExistantes = periodeRepository.findByTypePeriode(periode.getTypePeriode());

            if (!periodesExistantes.isEmpty()) {
                Periode derniere = periodesExistantes.stream()
                        .max(Comparator.comparing(Periode::getId)) // ou par date de création si dispo
                        .orElseThrow();

                if (derniere.getStatus() != Periode.Status.CLOTUREE) {
                    return ResponseEntity.badRequest().body(Map.of("message", "La dernière période n’est pas clôturée", "status", "error"));
                }

                // Générer le prochain periodDec automatiquement
                String nouveauPeriodDec = generateNextPeriodDec(derniere.getPeriodDec(), periode.getPeriodicity());
                periode.setPeriodDec(nouveauPeriodDec);
                periode.setStartYear(derniere.getStartYear()); // reprendre le startDate de départ
            } else {
                // C'est la toute première période => l'utilisateur doit spécifier startDate
                if (periode.getStartYear() == null) {
                    return ResponseEntity.badRequest().body(Map.of("message", "startDate est requis pour la première période", "status", "error"));
                }

                periode.setPeriodDec("01" + periode.getStartYear()); // première période = janvier
            }

            periode.setStatus(Status.EN_COURS);
            Periode createdPeriode = periodeRepository.save(periode);

            return ResponseEntity.ok(Map.of(
                    "message", "Période créée avec succès !",
                    "status", "success",
                    "periodeId", createdPeriode.getId(),
                    "periodDec", createdPeriode.getPeriodDec()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Erreur : " + e.getMessage(), "status", "error"));
        }
    }

    public String generateNextPeriodDec(String lastPeriodDec, String periodicity) {
        int month = Integer.parseInt(lastPeriodDec.substring(0, 2));
        int year = Integer.parseInt(lastPeriodDec.substring(2));

        switch (periodicity.toUpperCase()) {
            case "MONTHLY":
                month++;
                if (month > 12) {
                    month = 1;
                    year++;
                }
                break;
            case "QUARTERLY":
                month += 3;
                if (month > 12) {
                    month -= 12;
                    year++;
                }
                break;
            case "DAILY":
                // à adapter selon tes règles
                break;
            case "FORTNIGHT":
                // à adapter
                break;
            default:
                throw new IllegalArgumentException("Periodicité non supportée : " + periodicity);
        }

        return String.format("%02d%d", month, year);
    }


    @PostMapping("/add-data/{id}")
    public ResponseEntity<?> addDataToPeriode(@PathVariable Long id, @RequestParam("file") MultipartFile excelFile) throws Exception {
        Periode periode = periodeRepository.findById(id).orElseThrow(() -> new RuntimeException("Période non trouvée"));
        if (periode.getStatus() == Periode.Status.CLOTUREE) {
            return ResponseEntity.badRequest().body("La période est déjà clôturée.");
        }

        Document document = excelToJsonService.readExcelFile(excelFile);
        String jsonData = excelToJsonService.convertDocumentToJson(document);
        periode.setDetails(periode.getDetails() == null ? jsonData : mergeJson(periode.getDetails(), jsonData));
        periodeRepository.save(periode);
        return ResponseEntity.ok("Données ajoutées !");
    }

    @PutMapping("/close/{id}")
    public ResponseEntity<?> closePeriodeAndGenerateXml(@PathVariable Long id) {
        File tempXsdFile = null;
        try {
            // 1. Charger le XSD depuis les resources
            String xsdPath = "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd";
            InputStream xsdStream = getClass().getClassLoader().getResourceAsStream(xsdPath);
            if (xsdStream == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Fichier XSD introuvable : " + xsdPath);
            }

            // 2. Copier le XSD dans un fichier temporaire (si la validation attend un chemin)
            tempXsdFile = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsdFile)) {
                xsdStream.transferTo(out);
            }
            tempXsdFile.deleteOnExit();

            // 3. Récupérer la période
            Periode periode = periodeRepository.findById(id).orElseThrow(() ->
                    new RuntimeException("Période non trouvée.")
            );

            if (periode.getStatus() == Periode.Status.CLOTUREE) {
                return ResponseEntity.badRequest().body("La période est déjà clôturée.");
            }

            // 4. Convertir les détails en Document (objet JAXB)
            Document document = excelToJsonService.convertJsonToDocument(periode.getDetails());

            // 5. Valider et générer le XML
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xml = xsdValidator.validateAndConvert(document, tempXsdFile.getAbsolutePath(), errors);

            if (!errors.isEmpty()) {
                // Retourner la liste d’erreurs (JSON)
                return ResponseEntity.badRequest().body(errors);
            }

            // 6. Clôturer la période
            periode.setStatus(Periode.Status.CLOTUREE);
            periodeRepository.save(periode);

            // 7. Retourner le XML avec le bon content-type
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_XML)
                    .body(xml);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de la lecture ou de la sauvegarde du fichier XSD : " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur inattendue : " + e.getMessage());
        } finally {
            if (tempXsdFile != null && tempXsdFile.exists()) tempXsdFile.delete();
        }
    }



    public static String mergeJson(String existingJson, String newJson) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();

        JsonNode existingNode = objectMapper.readTree(existingJson);
        JsonNode newNode = objectMapper.readTree(newJson);

        if (!existingNode.has("transferts") || !existingNode.get("transferts").isObject()) {
            throw new IllegalArgumentException("Le JSON existant ne contient pas de clé 'transferts' valide.");
        }

        ObjectNode transfertsNode = (ObjectNode) existingNode.get("transferts");
        ArrayNode transfertArray;
        if (transfertsNode.has("transfert") && transfertsNode.get("transfert").isArray()) {
            transfertArray = (ArrayNode) transfertsNode.get("transfert");
        } else {
            transfertArray = objectMapper.createArrayNode();
            transfertsNode.set("transfert", transfertArray);
        }

        if (newNode.has("transferts") && newNode.get("transferts").has("transfert")) {
            JsonNode newTransferts = newNode.get("transferts").get("transfert");
            if (newTransferts.isArray()) {
                for (JsonNode transfer : newTransferts) {
                    transfertArray.add(transfer);
                }
            } else {
                transfertArray.add(newTransferts);
            }
        } else {
            throw new IllegalArgumentException("Le JSON ajouté ne contient pas de clé 'transferts.transfert' valide.");
        }

        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingNode);
    }

    @GetMapping
    public ResponseEntity<List<Periode>> getAllPeriodes() {
        List<Periode> periodes = periodeRepository.findAll();
        return ResponseEntity.ok(periodes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deletePeriode(@PathVariable Long id) {
        Map<String, String> response = new HashMap<>();
        if (!periodeRepository.existsById(id)) {
            response.put("message", "Période non trouvée.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        periodeRepository.deleteById(id);
        response.put("message", "Période supprimée avec succès.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPeriodeById(@PathVariable Long id) {
        return periodeRepository.findById(id)
                .map(periode -> ResponseEntity.ok((Object) periode))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "Période non trouvée")));
    }

    @PostMapping("/{id}/transactions")
    public ResponseEntity<?> addTransactionToPeriod(@PathVariable Long id, @RequestBody JsonNode transfert) {
        try {
            Periode updatedPeriod = trDonService.addTransactionToPeriod(id, transfert);
            return ResponseEntity.ok(updatedPeriod);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Erreur : " + e.getMessage()));
        }
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<?> getPeriodesByType(@PathVariable String type) {
        try {
            Periode.TypePeriod periodeType = Periode.TypePeriod.valueOf(type.toUpperCase());
            List<Periode> periodes = periodeRepository.findByTypePeriode(periodeType);

            if (periodes.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of(
                                "message", "Aucune période trouvée pour le type '" + type + "'",
                                "status", "error"
                        ));
            }

            return ResponseEntity.ok(periodes);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of(
                            "message", "Type de période invalide",
                            "status", "error",
                            "details", "Les types valides sont : " + Arrays.toString(Periode.TypePeriod.values()))
                    );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "message", "Erreur lors de la récupération : " + e.getMessage(),
                            "status", "error"
                    ));
        }
    }

    @PostMapping("/validate-operation")
    public ResponseEntity<?> validateOperation(@RequestBody Map<String, Object> operationData) {
        try {
            // 1. Charger le XSD
            String xsdPath = "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd";
            InputStream xsdStream = getClass().getClassLoader().getResourceAsStream(xsdPath);
            if (xsdStream == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Fichier XSD introuvable : " + xsdPath);
            }

            // 2. Créer un fichier temporaire pour le XSD
            File tempXsdFile = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsdFile)) {
                xsdStream.transferTo(out);
            }
            tempXsdFile.deleteOnExit();

            // 3. Convertir l'opération en objet Document
            ObjectMapper mapper = new ObjectMapper();
            String operationJson = mapper.writeValueAsString(operationData);
            Document document = excelToJsonService.convertOperationJsonToDocument(operationJson);

            // 4. Valider contre le XSD
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            xsdValidator.validate(document, tempXsdFile.getAbsolutePath(), errors);

            if (errors.isEmpty()) {
                return ResponseEntity.ok(Map.of(
                        "isValid", true,
                        "message", "La transaction est valide selon le XSD"
                ));
            } else {
                // Transformer les erreurs en un format plus lisible
                List<String> errorMessages = errors.stream()
                        .map(error -> String.format("%s: %s (valeur actuelle: %s)",
                                error.getFieldPath(),
                                error.getMessage(),
                                error.getInvalidValue()))
                        .collect(Collectors.toList());

                return ResponseEntity.ok(Map.of(
                        "isValid", false,
                        "errors", errorMessages
                ));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "message", "Erreur lors de la validation : " + e.getMessage(),
                            "status", "error"
                    ));
        }
    }


    public void validate(Document document, String xsdPath, List<XsdValidator.ValidationError> errors) {
        try {
            // Créer le contexte JAXB
            JAXBContext jaxbContext = JAXBContext.newInstance(Document.class);
            Marshaller marshaller = jaxbContext.createMarshaller();

            // Créer un validateur
            SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            Schema schema = sf.newSchema(new File(xsdPath));

            // Configurer le marshaller pour valider
            marshaller.setSchema(schema);

            // Collecteur d'erreurs
            marshaller.setEventHandler(event -> {
                XsdValidator.ValidationError error = new XsdValidator.ValidationError();
                error.setMessage(event.getMessage());

                // Essayer d'extraire le chemin et la valeur invalide
                if (event.getLocator() != null) {
                    error.setFieldPath(event.getLocator().getObject().toString());
                    error.setInvalidValue(event.getLocator().getNode().getNodeValue());
                }

                errors.add(error);
                return true; // Continuer la validation malgré les erreurs
            });

            // Lancer la validation
            marshaller.marshal(document, new DefaultHandler());

        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la validation XSD", e);
        }
    }





}
