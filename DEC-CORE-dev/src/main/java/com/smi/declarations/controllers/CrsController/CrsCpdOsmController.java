package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsCpdOsmService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_cpd_osm.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/crs-cpd-osm")
public class CrsCpdOsmController {

    @Autowired
    private CrsCpdOsmService crsCpdOsmService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/convert-excel-to-xml")
    public ResponseEntity<?> convertExcelToXml(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        File tempXsd = null;
        try {
            // Validation des fichiers
            if (excelFile.isEmpty() || xsdFile.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Les fichiers Excel et XSD sont obligatoires");
            }

            // Création d'un fichier XSD temporaire
            tempXsd = File.createTempFile("schema-", ".xsd");
            try (FileOutputStream fos = new FileOutputStream(tempXsd)) {
                fos.write(xsdFile.getBytes());
            }

            // Conversion Excel -> Document
            Document document = crsCpdOsmService.readExcelFile(excelFile);

            // Validation XSD
            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xml = xsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), errors);

            if (!errors.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                        .body(errors.stream()
                                .map(e -> String.format("Ligne %d, Colonne %d: %s",
                                        e.getLine(),
                                        e.getColumn(),
                                        e.getMessage()))
                                .collect(Collectors.toList()));
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_XML)
                    .body(xml);

        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                    .body("Erreur de traitement fichier: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body("Erreur système: " + e.getMessage());
        } finally {
            // Nettoyage du fichier XSD temporaire
            if (tempXsd != null && tempXsd.exists()) {
                tempXsd.delete();
            }
        }
    }
}