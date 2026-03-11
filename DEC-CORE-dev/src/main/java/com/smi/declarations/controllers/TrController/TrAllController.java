package com.smi.declarations.controllers.TrController;

import com.smi.declarations.services.TrService.TrAllService;

import com.smi.declarations.services.XsdValidator;
import com.smi.generated.tr_all_v2.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/convert")
public class TrAllController {
@Autowired
private TrAllService trAllService;
@Autowired
private XsdValidator xsdValidator;

@PostMapping("/trall")
public ResponseEntity<?> convertExcelToXml(
        @RequestParam("file") MultipartFile excelFile,
        @RequestParam("xsd") MultipartFile xsdFile) {

    File tempXsd = null;
    File tempJson = null;
    try {
        // Vérification des fichiers
        if (excelFile.isEmpty()) {
            return new ResponseEntity<>("Le fichier Excel est vide ou manquant.", HttpStatus.BAD_REQUEST);
        }

        if (xsdFile.isEmpty()) {
            return new ResponseEntity<>("Le fichier XSD est vide ou manquant.", HttpStatus.BAD_REQUEST);
        }

        // 1. Convertir le fichier Excel en un objet Document
        Document document = trAllService.readExcelFile(excelFile);

        // 2. Convertir l'objet Document en JSON (pour sauvegarde temporaire si nécessaire)
        String jsonDocument = trAllService.convertDocumentToJson(document);
        tempJson = File.createTempFile("document", ".json");
        try (FileOutputStream fos = new FileOutputStream(tempJson)) {
            fos.write(jsonDocument.getBytes());
        }

        // 3. Sauvegarder temporairement le fichier XSD
        tempXsd = File.createTempFile("schema", ".xsd");
        xsdFile.transferTo(tempXsd);

        // 4. Valider et convertir l'objet Document en XML
        List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
        String xmlOutput = XsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), validationErrors);

        // Si des erreurs de validation sont détectées, les retourner
        if (!validationErrors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                    .body(validationErrors);
        }

        // Retourner le XML généré
        return ResponseEntity.ok()
                .contentType(org.springframework.http.MediaType.APPLICATION_XML)
                .body(xmlOutput);

    } catch (IOException e) {

        return new ResponseEntity<>("Erreur lors du traitement des fichiers : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (Exception e) {

        return new ResponseEntity<>("Erreur inattendue : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
        // Nettoyage des fichiers temporaires
        if (tempJson != null && tempJson.exists()) {
            tempJson.delete();
        }
        if (tempXsd != null && tempXsd.exists()) {
            tempXsd.delete();
        }
    }
}
}
