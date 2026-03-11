package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsAttService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_att.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/crs-att")
public class CrsAttController {

    @Autowired
    private CrsAttService crsAttService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        try {
            // Vérification des fichiers
            if (excelFile.isEmpty() || xsdFile.isEmpty()) {
                return ResponseEntity.badRequest().body("Both files are required");
            }

            // Conversion Excel vers Document JAXB
            Document document = crsAttService.readExcelFile(excelFile);
            if (document == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to parse Excel file.");
            }

            // Sauvegarde temporaire du fichier XSD
            File xsdTempFile = File.createTempFile("schema", ".xsd");
            Files.copy(xsdFile.getInputStream(), xsdTempFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

            // Validation et conversion en XML
            List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
            String xml = XsdValidator.validateAndConvert(document, xsdTempFile.getAbsolutePath(), validationErrors);

            // Suppression du fichier temporaire
            xsdTempFile.delete();

            // Vérification des erreurs de validation
            if (!validationErrors.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationErrors);
            }

            return ResponseEntity.ok()
                    .header("Content-Type", "application/xml")
                    .body(xml);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }
}
