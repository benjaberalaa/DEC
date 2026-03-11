package com.smi.declarations.controllers.TrController;

import com.smi.declarations.services.TrService.TrRemEeService;
import com.smi.declarations.services.XsdValidator;
import com.smi.generated.tr_rem_ee.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/tr-rem-ee")
public class TrRemEeController {

    @Autowired
    private TrRemEeService trRemEeService;

    @Autowired
    private XsdValidator xsdValidator;

    @PostMapping("/convert")
    public ResponseEntity<?> convertExcelToXml(
            @RequestParam("file") MultipartFile excelFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        File tempXsd = null;
        try {
            if (excelFile.isEmpty() || xsdFile.isEmpty()) {
                return new ResponseEntity<>("Les fichiers Excel et XSD sont requis", HttpStatus.BAD_REQUEST);
            }

            Document document = trRemEeService.processExcelFile(excelFile);

            tempXsd = File.createTempFile("schema", ".xsd");
            xsdFile.transferTo(tempXsd);

            List<XsdValidator.ValidationError> errors = new ArrayList<>();
            String xmlOutput = xsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), errors);

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
            if (tempXsd != null && tempXsd.exists()) tempXsd.delete();
        }
    }
}