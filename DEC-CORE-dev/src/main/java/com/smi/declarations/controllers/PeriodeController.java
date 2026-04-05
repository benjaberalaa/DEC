package com.smi.declarations.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smi.declarations.entities.Periode;
import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.declarations.services.GenericDeclarationService;
import com.smi.declarations.services.XsdValidator;
import jakarta.persistence.EntityNotFoundException;
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

@RestController
@RequestMapping("/api/periodes")
@CrossOrigin(origins = "http://localhost:4200")
public class PeriodeController {

    @Autowired
    private PeriodeRepository periodeRepository;

    @Autowired
    private GenericDeclarationService genericDeclarationService;
    
    @Autowired
    private XsdValidator xsdValidator;

    @Autowired
    private com.smi.declarations.repositories.AuditLogRepository auditLogRepository;

    private void logAction(String action, String targetType, Long targetId, String details) {
        try {
            com.smi.declarations.entities.AuditLog log = new com.smi.declarations.entities.AuditLog();
            log.setCreatedAt(java.time.LocalDateTime.now());
            
            org.springframework.security.core.Authentication auth = org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
            String userStr = (auth != null && auth.isAuthenticated()) ? auth.getName() : "System";
            
            log.setUsername(userStr);
            log.setAction(action);
            log.setTargetType(targetType);
            log.setTargetId(targetId);
            log.setDetails(details);
            auditLogRepository.save(log);
        } catch (Exception e) {
            System.err.println("Audit logging failed: " + e.getMessage());
        }
    }

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
                        .max(Comparator.comparing(Periode::getId))
                        .orElseThrow();

                if (derniere.getStatus() != Periode.Status.CLOTUREE) {
                    return ResponseEntity.badRequest().body(Map.of("message", "La dernière période n’est pas clôturée", "status", "error"));
                }

                // Générer le prochain periodDec automatiquement
                String nouveauPeriodDec = generateNextPeriodDec(derniere.getPeriodDec(), periode.getPeriodicity());
                periode.setPeriodDec(nouveauPeriodDec);
                periode.setStartYear(derniere.getStartYear());
            } else {
                if (periode.getStartYear() == null) {
                    return ResponseEntity.badRequest().body(Map.of("message", "startDate est requis pour la première période", "status", "error"));
                }
                periode.setPeriodDec("01" + periode.getStartYear());
            }

            periode.setStatus(Status.EN_COURS);
            Periode createdPeriode = periodeRepository.save(periode);

            logAction("CREATE_PERIOD", createdPeriode.getTypePeriode().name(), createdPeriode.getId(), 
                     "Période créée pour " + createdPeriode.getPeriodDec());

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
            case "FORTNIGHT":
                break;
            default:
                throw new IllegalArgumentException("Periodicité non supportée : " + periodicity);
        }

        return String.format("%02d%d", month, year);
    }


    @PostMapping("/add-data/{id}")
    public ResponseEntity<?> addDataToPeriode(@PathVariable("id") Long id, @RequestParam("file") MultipartFile excelFile) throws Exception {
        Periode periode = periodeRepository.findById(id).orElseThrow(() -> new RuntimeException("Période non trouvée"));
        if (periode.getStatus() == Periode.Status.CLOTUREE) {
            return ResponseEntity.badRequest().body("La période est déjà clôturée.");
        }

        String jsonData = genericDeclarationService.readExcelToJsonDynamic(periode.getTypePeriode(), excelFile, periode.getPeriodDec());
        periode.setDetails(genericDeclarationService.mergeJsonDynamic(periode.getDetails(), jsonData, periode.getTypePeriode(), periode.getPeriodDec()));
        periodeRepository.save(periode);
        
        logAction("IMPORT_DATA", periode.getTypePeriode().name(), periode.getId(), 
                 "Importation de données Excel : " + excelFile.getOriginalFilename());

        return ResponseEntity.ok("Données ajoutées !");
    }

    @PutMapping("/close/{id}")
    public ResponseEntity<?> closePeriodeAndGenerateXml(@PathVariable("id") Long id) {
        File tempXsdFile = null;
        try {
            Periode periode = periodeRepository.findById(id).orElseThrow(() ->
                    new RuntimeException("Période non trouvée.")
            );

            // Re-generation is allowed even if closed, but we only save changes if it's the first closure
            boolean wasAlreadyClosed = (periode.getStatus() == Periode.Status.CLOTUREE);

            // 2. Obtenir le bon XSD (Dynamique ou Classpath)
            InputStream xsdStream = genericDeclarationService.getXsdInputStream(periode.getTypePeriode());
            if (xsdStream == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Fichier XSD introuvable pour le type : " + periode.getTypePeriode());
            }

            // 3. Copier le XSD dans un fichier temporaire
            tempXsdFile = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsdFile)) {
                xsdStream.transferTo(out);
            }
            tempXsdFile.deleteOnExit();

            // 4. Convertir les détails en Document dynamiquement
            Class<?> clazz = genericDeclarationService.getDocumentClass(periode.getTypePeriode());
            com.fasterxml.jackson.databind.ObjectMapper lenientMapper = com.fasterxml.jackson.databind.json.JsonMapper.builder()
                    .disable(com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
                    .enable(com.fasterxml.jackson.databind.MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES)
                    .build();
            Object document = lenientMapper.readValue(periode.getDetails(), clazz);

            // 5. Valider et générer le XML
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xml = XsdValidator.validateAndConvert(document, tempXsdFile.getAbsolutePath(), errors);

            if (!errors.isEmpty()) {
                return ResponseEntity.badRequest().body(errors);
            }

            // 6. Clôturer la période si elle ne l'est pas
            if (!wasAlreadyClosed) {
                periode.setStatus(Periode.Status.CLOTUREE);
                periodeRepository.save(periode);
                logAction("CLOSE_PERIOD", periode.getTypePeriode().name(), periode.getId(), "Période clôturée et XML généré");
            } else {
                logAction("REGENERATE_XML", periode.getTypePeriode().name(), periode.getId(), "XML régénéré pour consultation");
            }

            // 7. Retourner le XML
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

    @GetMapping("/{id}/xml")
    public ResponseEntity<?> getXml(@PathVariable("id") Long id) {
        Periode periode = periodeRepository.findById(id).orElse(null);
        if (periode != null) {
            logAction("VIEW_XML", periode.getTypePeriode().name(), id, "Consultation du XML de la période " + periode.getPeriodDec());
        }
        return closePeriodeAndGenerateXml(id); 
    }


    @GetMapping
    public ResponseEntity<List<Periode>> getAllPeriodes() {
        List<Periode> periodes = periodeRepository.findAll();
        return ResponseEntity.ok(periodes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deletePeriode(@PathVariable("id") Long id) {
        Map<String, String> response = new HashMap<>();
        if (!periodeRepository.existsById(id)) {
            response.put("message", "Période non trouvée.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        Periode p = periodeRepository.findById(id).orElse(null);
        logAction("DELETE_PERIOD", p != null ? p.getTypePeriode().name() : "UNKNOWN", id, "Période supprimée");
        periodeRepository.deleteById(id);
        response.put("message", "Période supprimée avec succès.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPeriodeById(@PathVariable("id") Long id) {
        return periodeRepository.findById(id)
                .map(periode -> ResponseEntity.ok((Object) periode))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "Période non trouvée")));
    }

    @PostMapping("/{id}/transactions")
    public ResponseEntity<?> addTransactionToPeriod(@PathVariable("id") Long id, @RequestBody JsonNode transfert) {
        try {
            Periode periode = periodeRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Période introuvable avec l'ID : " + id));

            String updatedDetails = genericDeclarationService.mergeJsonDynamic(
                periode.getDetails(), 
                transfert.toString(), 
                periode.getTypePeriode(), 
                periode.getPeriodDec()
            );

            periode.setDetails(updatedDetails);
            Periode updatedPeriod = periodeRepository.save(periode);
            
            logAction("ADD_MANUAL_DATA", periode.getTypePeriode().name(), id, "Ajout d'une transaction manuelle");
            
            return ResponseEntity.ok(updatedPeriod);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Erreur : " + e.getMessage()));
        }
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<?> getPeriodesByType(@PathVariable("type") String type) {
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

    @PostMapping("/validate-operation/{id}")
    public ResponseEntity<?> validateOperation(@PathVariable("id") Long id, @RequestBody Map<String, Object> operationData) {
        try {
            Periode periode = periodeRepository.findById(id).orElseThrow(() -> new RuntimeException("Période introuvable avec l'Id fourni"));

            // Vérifier que des données existent pour cette période
            if (periode.getDetails() == null || periode.getDetails().isEmpty()) {
                return ResponseEntity.ok(Map.of(
                        "isValid", false,
                        "errors", List.of("Aucune donnée disponible pour cette période")
                ));
            }

            // 1. Charger le XSD dynamiquement
            InputStream xsdStream = genericDeclarationService.getXsdInputStream(periode.getTypePeriode());
            if (xsdStream == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Fichier XSD introuvable pour le type : " + periode.getTypePeriode());
            }

            // 2. Créer un fichier temporaire pour le XSD
            File tempXsdFile = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsdFile)) {
                xsdStream.transferTo(out);
            }
            tempXsdFile.deleteOnExit();

            // 3. Désérialiser le Document complet stocké dans periode.getDetails()
            com.fasterxml.jackson.databind.ObjectMapper mapper = com.fasterxml.jackson.databind.json.JsonMapper.builder()
                    .disable(com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
                    .enable(com.fasterxml.jackson.databind.MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES)
                    .build();
            Class<?> clazz = genericDeclarationService.getDocumentClass(periode.getTypePeriode());
            Object document = mapper.readValue(periode.getDetails(), clazz);

            // 3.5. Isoler la transaction correspondante pur validation locale
            int entryIndex = operationData.containsKey("_entryIndex") && operationData.get("_entryIndex") != null 
                             ? ((Number) operationData.get("_entryIndex")).intValue() : -1;
            int detailIndex = operationData.containsKey("_detailIndex") && operationData.get("_detailIndex") != null 
                              ? ((Number) operationData.get("_detailIndex")).intValue() : -1;
            
            if (entryIndex != -1) {
                genericDeclarationService.isolateTransaction(document, entryIndex, detailIndex);
            }

            // 4. Valider contre le XSD
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            xsdValidator.validate(document, tempXsdFile.getAbsolutePath(), errors);

            if (errors.isEmpty()) {
                return ResponseEntity.ok(Map.of(
                        "isValid", true,
                        "message", "La transaction est valide selon le XSD"
                ));
            } else {
                List<Map<String, Object>> errorDetails = errors.stream()
                        .map(error -> {
                            Map<String, Object> errMap = new HashMap<>();
                            errMap.put("message", error.getMessage());
                            errMap.put("fieldName", error.getFieldName());
                            errMap.put("fieldPath", error.getFieldPath());
                            errMap.put("invalidValue", error.getInvalidValue());
                            errMap.put("advice", error.getAdvice());
                            return errMap;
                        })
                        .collect(Collectors.toList());

                return ResponseEntity.ok(Map.of(
                        "isValid", false,
                        "errors", errorDetails
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

    @PostMapping("/update-operation/{id}")
    public ResponseEntity<?> updateOperation(@PathVariable("id") Long id, @RequestBody Map<String, Object> updateRequest) {
        try {
            Periode periode = periodeRepository.findById(id).orElseThrow(() -> new RuntimeException("Période introuvable"));
            
            int entryIndex = ((Number) updateRequest.get("_entryIndex")).intValue();
            int detailIndex = ((Number) updateRequest.get("_detailIndex")).intValue();
            Object newData = updateRequest.get("newData");
            
            String updatedJson = genericDeclarationService.updateJsonDynamic(
                periode.getDetails(), 
                new ObjectMapper().writeValueAsString(newData), 
                entryIndex, 
                detailIndex
            );
            
            periode.setDetails(updatedJson);
            periodeRepository.save(periode);
            
            return ResponseEntity.ok(Map.of("message", "Opération mise à jour avec succès", "status", "success"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Erreur lors de la mise à jour : " + e.getMessage(), "status", "error"));
        }
    }
}
