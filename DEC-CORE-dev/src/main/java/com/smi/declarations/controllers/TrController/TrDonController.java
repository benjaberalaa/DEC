package com.smi.declarations.controllers.TrController;

import com.smi.declarations.entities.Periode;
import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.declarations.services.TrService.TrDonService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.majc_tr_don_0312.Document;
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
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/convert")
// Add @CrossOrigin here if this controller needs to be accessible from frontend directly
@CrossOrigin(origins = "http://localhost:4200")
public class TrDonController {

    @Autowired
    private TrDonService excelToJsonService;
    @Autowired
    private XsdValidator xsdValidator;

    // FIX: Add @Autowired for PeriodeRepository
    @Autowired
    private PeriodeRepository periodeRepository; // This was missing @Autowired

    @PostMapping("/excel-to-xml")
    public ResponseEntity<?> convertExcelToXml(@RequestParam("file") MultipartFile excelFile) {
        File tempJson = null;
        File tempXsd = null;
        try {
            if (excelFile.isEmpty()) {
                return new ResponseEntity<>("Le fichier Excel est vide ou manquant.", HttpStatus.BAD_REQUEST);
            }

            Document document = excelToJsonService.readExcelFile(excelFile);

            String jsonDocument = excelToJsonService.convertDocumentToJson(document);
            tempJson = File.createTempFile("document", ".json");
            try (FileOutputStream fos = new FileOutputStream(tempJson)) {
                fos.write(jsonDocument.getBytes());
            }

            String xsdPath = "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd";
            InputStream xsdStream = getClass().getClassLoader().getResourceAsStream(xsdPath);
            if (xsdStream == null) {
                return new ResponseEntity<>("Fichier XSD introuvable : " + xsdPath, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            // Copier le XSD dans un fichier temporaire
            tempXsd = File.createTempFile("schema", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsd)) {
                xsdStream.transferTo(out);
            }

            List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
            String xmlOutput = xsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), validationErrors);

            if (!validationErrors.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                        .body(validationErrors);
            }

            return ResponseEntity.ok()
                    .contentType(org.springframework.http.MediaType.APPLICATION_XML)
                    .body(xmlOutput);

        } catch (IOException e) {
            return new ResponseEntity<>("Erreur lors du traitement des fichiers : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur inattendue : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            if (tempJson != null && tempJson.exists()) tempJson.delete();
            if (tempXsd != null && tempXsd.exists()) tempXsd.delete();
        }
    }

    @GetMapping(value = "/{id}/xml", produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<?> getPeriodeXml(@PathVariable Long id) {
        File tempXsdFile = null; // Declare tempXsdFile here for finally block
        try {
            Periode periode = periodeRepository.findById(id).orElseThrow(() ->
                    new RuntimeException("Période non trouvée.")
            );

            // 1. Charger le XSD depuis les resources
            String xsdPath = "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd";
            InputStream xsdStream = getClass().getClassLoader().getResourceAsStream(xsdPath);
            if (xsdStream == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Fichier XSD introuvable : " + xsdPath);
            }

            // 2. Copier le XSD dans un fichier temporaire
            tempXsdFile = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream out = new FileOutputStream(tempXsdFile)) {
                xsdStream.transferTo(out);
            }
            tempXsdFile.deleteOnExit();

            // 3. Convertir les détails (JSON) en Document (objet JAXB)
            Document document = excelToJsonService.convertJsonToDocument(periode.getDetails());

            // 4. Générer le XML
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xml = xsdValidator.validateAndConvert(document, tempXsdFile.getAbsolutePath(), errors);

            // 5. Retourner le XML
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_XML)
                    .body(xml);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de la lecture ou de la sauvegarde du fichier XSD : " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur inattendue lors de la récupération de l'XML : " + e.getMessage());
        } finally {
            // Ensure temporary file is deleted
            if (tempXsdFile != null && tempXsdFile.exists()) tempXsdFile.delete();
        }
    }
}