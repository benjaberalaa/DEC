package com.smi.declarations.controllers.CrsController;

import com.smi.declarations.services.CrsService.CrsCpdVdplService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.crs_cpd_vdpl.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/crs-cpd-vdpl")
public class CrsCpdVdplController {

    @Autowired
    private CrsCpdVdplService crsCpdVdplService;

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
            if (excelFile.isEmpty() || xsdFile.isEmpty()) {
                return new ResponseEntity<>("Fichier(s) manquant(s)", HttpStatus.BAD_REQUEST);
            }

            // Traitement Excel → Objet JAXB
            Document document = crsCpdVdplService.processExcelFile(excelFile);

            // Validation XSD
            tempXsd = File.createTempFile("schema", ".xsd");
            xsdFile.transferTo(tempXsd);

            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xmlOutput = XsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), errors);

            if (!errors.isEmpty()) {
                return ResponseEntity.badRequest()
                        .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                        .body(errors);
            }

            return ResponseEntity.ok()
                    .contentType(org.springframework.http.MediaType.APPLICATION_XML)
                    .body(xmlOutput);

        } catch (Exception e) {
            return new ResponseEntity<>("Erreur de traitement: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            if (tempXsd != null) tempXsd.delete();
            if (tempJson != null) tempJson.delete();
        }
    }
}
