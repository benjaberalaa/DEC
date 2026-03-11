package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsDevppltndpplService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_devppltndppl.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/crs-devppltndppl")
public class CrsDevppltndpplController {

    @Autowired
    private CrsDevppltndpplService crsDevpplttndpplService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/convert")
    public ResponseEntity<?> convertExcelToXml(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        File tempXsd = null;
        File tempJson = null;
        try {
            // Validation des fichiers
            if (excelFile.isEmpty()) {
                return new ResponseEntity<>("Le fichier Excel est requis", HttpStatus.BAD_REQUEST);
            }
            if (xsdFile.isEmpty()) {
                return new ResponseEntity<>("Le fichier XSD est requis", HttpStatus.BAD_REQUEST);
            }

            // Conversion Excel -> Objet JAXB
            Document document = crsDevpplttndpplService.processExcelFile(excelFile);

            // Conversion en JSON pour validation (optionnel)
          /*  String jsonDocument = crsDevpplttndpplService.convertDocumentToJson(document);
            tempJson = File.createTempFile("document", ".json");
            try (FileOutputStream fos = new FileOutputStream(tempJson)) {
                fos.write(jsonDocument.getBytes());
            }*/

            // Validation XSD
            tempXsd = File.createTempFile("schema", ".xsd");
            xsdFile.transferTo(tempXsd);

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
            return new ResponseEntity<>("Erreur de lecture des fichiers: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur de traitement: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            // Nettoyage des fichiers temporaires
            if (tempJson != null && tempJson.exists()) tempJson.delete();
            if (tempXsd != null && tempXsd.exists()) tempXsd.delete();
        }
    }
}