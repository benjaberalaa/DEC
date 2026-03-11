package com.smi.declarations.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smi.declarations.services.XsdValidator;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.xml.bind.JAXBException;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/convert")
public class JsonToXmlController {

    @PostMapping("/json-to-xml")
    public String convertJsonToXml(
            @RequestParam("json") MultipartFile jsonFile,
            @RequestParam("xsd") MultipartFile xsdFile) {

        File tempXsd = null;
        File tempJson = null;

        try {
            // Sauvegarder temporairement les fichiers JSON et XSD
            tempJson = File.createTempFile("input", ".json");
            jsonFile.transferTo(tempJson);

            tempXsd = File.createTempFile("schema", ".xsd");
            xsdFile.transferTo(tempXsd);

            // Charger le XSD et créer des classes Java
            Class<?> documentClass = Class.forName("com.smi.generated.generated.Document");

            // Convertir le JSON en objet Java
            ObjectMapper objectMapper = new ObjectMapper();
            Object document = objectMapper.readValue(tempJson, documentClass);

            List<XsdValidator.ValidationError> validationErrors = new ArrayList<>();
            String xmlOutput = XsdValidator.validateAndConvert(document, tempXsd.getAbsolutePath(), validationErrors);


            // Retourner le XML généré
            return xmlOutput;

        } catch (IOException | ClassNotFoundException | JAXBException e) {
            return "Erreur lors de la lecture ou l'écriture des fichiers : " + e.getMessage();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
