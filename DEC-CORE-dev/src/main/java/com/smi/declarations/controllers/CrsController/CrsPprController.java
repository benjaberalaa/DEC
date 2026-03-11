package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsPprService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_ppr.Document;
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
@RequestMapping("/api/crs-ppr")
public class CrsPprController {

    @Autowired
    private CrsPprService crsPprService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        try {
            if (excelFile.isEmpty() || xsdFile.isEmpty()) {
                return ResponseEntity.badRequest().body("Les deux fichiers sont requis");
            }

            Document document = crsPprService.readExcelFile(excelFile);
            if (document == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erreur de lecture du fichier Excel");
            }

            File xsdTempFile = File.createTempFile("schema-ppr", ".xsd");
            Files.copy(xsdFile.getInputStream(), xsdTempFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

            List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
            String xml = XsdValidator.validateAndConvert(document, xsdTempFile.getAbsolutePath(), validationErrors);

            xsdTempFile.delete();

            if (!validationErrors.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationErrors);
            }

            return ResponseEntity.ok()
                    .header("Content-Type", "application/xml")
                    .body(xml);

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body("Erreur de traitement : " + e.getMessage());
        }
    }
}