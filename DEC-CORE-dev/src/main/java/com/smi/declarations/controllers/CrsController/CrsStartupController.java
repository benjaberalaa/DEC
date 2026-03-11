package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsStartupService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_startup.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/crs-startup")
public class CrsStartupController {

    @Autowired
    private CrsStartupService crsStartupService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/crsstartup")
    public ResponseEntity<?> convertExcelToXml(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        File tempXsd = null;
        File tempJson = null;
        try {
            if (excelFile.isEmpty()) {
                return new ResponseEntity<>("Le fichier Excel est vide ou manquant.", HttpStatus.BAD_REQUEST);
            }

            if (xsdFile.isEmpty()) {
                return new ResponseEntity<>("Le fichier XSD est vide ou manquant.", HttpStatus.BAD_REQUEST);
            }

            Document document = crsStartupService.readExcelFile(excelFile);

            String jsonDocument = crsStartupService.convertDocumentToJson(document);
            tempJson = File.createTempFile("document", ".json");
            try (FileOutputStream fos = new FileOutputStream(tempJson)) {
                fos.write(jsonDocument.getBytes());
            }

            tempXsd = File.createTempFile("schema", ".xsd");
            xsdFile.transferTo(tempXsd);

            List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
            String xmlOutput = XsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), validationErrors);

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
            if (tempJson != null && tempJson.exists()) {
                tempJson.delete();
            }
            if (tempXsd != null && tempXsd.exists()) {
                tempXsd.delete();
            }
        }
    }
}
