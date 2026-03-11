package com.smi.declarations.services.TrService;



import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.smi.declarations.controllers.PeriodeController;
import com.smi.declarations.entities.Periode;
import com.smi.declarations.repositories.PeriodeRepository;


import com.smi.generated.majc_tr_don_0312.Document;
import com.smi.generated.majc_tr_don_0312.ObjectFactory;
import com.smi.generated.majc_tr_don_0312.TMontant;
import jakarta.persistence.EntityNotFoundException;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;



@Service
public class TrDonService {


    @Autowired
    private PeriodeRepository periodeRepository;

    private static final DateTimeFormatter XSD_DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd");


    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        // Utiliser directement l'InputStream du MultipartFile
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        // Créer une instance de Document
        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();
        document.setEnteteDoc(factory.createDocumentEnteteDoc());

        // Initialiser l'enteteDoc avec des valeurs par défaut
        Document.EnteteDoc enteteDoc = document.getEnteteDoc();
        enteteDoc.setCodeIAT(String.format("%02d", 23));  // Exemple "023" pour codeIAT
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        enteteDoc.setDateDec(sdf.format(new Date())); // Format de date du jour
        enteteDoc.setCodeAnnexe("TR-014"); // Valeur par défaut pour codeAnnexe

        // Créer une liste pour les transferts
        Document.Transferts transferts = factory.createDocumentTransferts();

        // Liste de Transfert à ajouter
        List<Document.Transferts.Transfert> transfertList = new ArrayList<>();

        Iterator<Row> rowIterator = sheet.iterator();
        rowIterator.next(); // Skipper la ligne d'en-tête

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();

            // Créer un nouvel objet transfert
            Document.Transferts.Transfert transfert = factory.createDocumentTransfertsTransfert();
            Document.Transferts.Transfert.Entete entete = factory.createDocumentTransfertsTransfertEntete();
            transfert.setEntete(entete);

            // Remplir entete du transfert avec des valeurs par défaut ou extraites du fichier Excel
            entete.setPeriodDec(getCellStringValue(row.getCell(0))); // periodDec
            entete.setNbrEcritures(String.format("%06d", 1)); // NbrEcritures formaté sur 6 chiffres

            // Créer un objet Detail
            Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
            transfert.setDetails(details);

            // Remplir les données de Detail
            Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();
            details.getDetail().add(detail);

            // Mapper periodDec et agence
            detail.setPeriodDec(getCellStringValue(row.getCell(0)));
            // Mapper periodDec et agence avec 3 chiffres
            detail.setPeriodDec(getCellStringValue(row.getCell(0)));

            // Formater l'agence pour qu'elle ait toujours 3 chiffres
            String agence = getCellStringValue(row.getCell(1)); // Lire l'agence
            if (agence != null && !agence.isEmpty()) {
                agence = String.format("%03d", Integer.parseInt(agence)); // Formater pour 3 chiffres
            } else {
                agence = "000"; // Valeur par défaut si l'agence est vide ou nulle
            }
            detail.setAgence(agence);
            // Mapper RefDonneur
            Document.Transferts.Transfert.Details.Detail.RefDonneur refDonneur = factory.createDocumentTransfertsTransfertDetailsDetailRefDonneur();
            refDonneur.setTypeIdentifiantD(""); // "typeIdentifiantD" vide si null
            refDonneur.setCodIdentifiantD(getCellStringValue(row.getCell(2)));
            refDonneur.setDenomD(getCellStringValue(row.getCell(3)));
            refDonneur.setIbanDonOrd(getCellStringValue(row.getCell(4)));
            refDonneur.setPaysFonds(getCellStringValue(row.getCell(5)));
            detail.setRefDonneur(refDonneur);

            // Mapper Benifiicaire
            Document.Transferts.Transfert.Details.Detail.Benifiicaire benifiicaire = factory.createDocumentTransfertsTransfertDetailsDetailBenifiicaire();
            benifiicaire.setTypeBenifAsso(getCellStringValue(row.getCell(6)));
            benifiicaire.setCodIdentifiant(getCellStringValue(row.getCell(7)));
            benifiicaire.setNumVisa(getCellStringValue(row.getCell(8)));
            benifiicaire.setRefJort(getCellStringValue(row.getCell(9)));
            benifiicaire.setAbrev(getCellStringValue(row.getCell(10))); // S'assurer que "nom" ne soit jamais null
            benifiicaire.setDenomComplAsso(getCellStringValue(row.getCell(11)));
            benifiicaire.setRib(getCellStringValue(row.getCell(12)));
            detail.setBenifiicaire(benifiicaire);

            // Mapper OperationTransf
            Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
            // Mapper NatOp
            operationTransf.setNatOp(getCellStringValue(row.getCell(13))); // La nouvelle colonne NatOp


            // Mapper MntDev
            TMontant mntDev = factory.createTMontant();
            mntDev.setValue(formatAmount(getCellNumericValue(row.getCell(14)))); // Montant formaté à 3 décimales
            mntDev.setCcy(getCellStringValue(row.getCell(15))); // Devise comme String
            operationTransf.setMntDev(mntDev);

            // Mapper CVMntDin
            TMontant cvmntDin = factory.createTMontant();
            cvmntDin.setValue(formatAmount(getCellNumericValue(row.getCell(16)))); // Montant formaté à 3 décimales
            cvmntDin.setCcy(getCellStringValue(row.getCell(17))); // Devise comme String
            operationTransf.setCVMntDin(cvmntDin);


            operationTransf.setDatOp(formatDate(row.getCell(18))); // Utilisation de la méthode formatDate
            operationTransf.setRefMsgSwift(formatRefMsgSwift(getCellStringValue(row.getCell(19))));


            // Ajouter OperationTransf à Detail
            detail.setOperationTransf(operationTransf);

            // Ajouter le transfert à la liste
            transfertList.add(transfert);
        }

        // Ajouter tous les transferts à la propriété 'transfert' dans transferts
        transferts.getTransfert().addAll(transfertList);

        // Ajouter transferts au document
        document.setTransferts(transferts);

        workbook.close();
        inputStream.close();

        return document;
    }

    // Méthode utilitaire pour récupérer la valeur d'une cellule en tant que String
    private String getCellStringValue(Cell cell) {
        if (cell == null) {
            return ""; // Remplacer par une chaîne vide
        }
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue().trim(); // Retirer les espaces superflus
            case NUMERIC:
                return formatNumericValue(cell.getNumericCellValue()); // Convertir le nombre en String
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue()); // Convertir le booléen en String
            case FORMULA:
                return cell.getCellFormula(); // Retourner la formule si c'est le cas
            default:
                return ""; // Retourner une chaîne vide pour d'autres types de cellule
        }
    }

    // Méthode utilitaire pour récupérer la valeur d'une cellule en tant que nombre
    private double getCellNumericValue(Cell cell) {
        if (cell == null) {
            return 0.0; // Remplacer par 0.0 si la cellule est vide
        }
        switch (cell.getCellType()) {
            case NUMERIC:
                return cell.getNumericCellValue();
            case STRING:
                try {
                    return Double.parseDouble(cell.getStringCellValue());
                } catch (NumberFormatException e) {
                    return 0.0; // Retourner 0.0 si la conversion échoue
                }
            default:
                return 0.0; // Retourner 0.0 pour d'autres types
        }
    }

    // Méthode utilitaire pour formater un montant à trois chiffres après la virgule
    private BigDecimal formatAmount(double value) {
        return new BigDecimal(value).setScale(3, BigDecimal.ROUND_HALF_UP); // Trois décimales
    }

    // Méthode utilitaire pour formater un nombre et éviter les ".0" inutiles
    private String formatNumericValue(double value) {
        if (value == (long) value) {
            return String.valueOf((long) value); // Supprimer la partie décimale si c'est un entier
        }
        return String.valueOf(value); // Conserver la valeur décimale si nécessaire
    }


    private String formatDate(Cell cell) {
        try {
            if (cell != null && cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
                // Si la cellule contient une date sous forme de nombre (type NUMERIC dans Excel)
                SimpleDateFormat outputFormat = new SimpleDateFormat("dd/MM/yyyy");
                return outputFormat.format(cell.getDateCellValue());
            } else if (cell != null && cell.getCellType() == CellType.STRING) {
                // Si la cellule contient une chaîne de caractères, supposée être une date
                SimpleDateFormat inputFormat = new SimpleDateFormat("dd/MM/yyyy");
                SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MM-yyyy");
                return outputFormat.format(inputFormat.parse(cell.getStringCellValue()));
            }
        } catch (Exception e) {
            // En cas d'erreur, retourner une chaîne vide
            return "";
        }
        return "";
    }

    private String formatRefMsgSwift(String refMsgSwift) {
        // Si refMsgSwift est null ou plus court que 20 caractères, on le complète avec des zéros à gauche
        if (refMsgSwift == null) {
            return "00000000000000000000"; // 20 zéros si la valeur est null
        } else {
            // Ajouter des zéros à gauche si nécessaire pour compléter à 20 chiffres
            return String.format("%20s", refMsgSwift).replace(' ', '0');
        }
    }


    public String convertDocumentToJson(Document document) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(document); // Convertit l'objet Document en JSON
    }


    public Document convertJsonToDocument(String json) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, Document.class);
    }



    @Transactional
    public Periode addTransactionToPeriod(Long id, JsonNode transfert) throws Exception {
        Periode periode = periodeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Période introuvable avec l'ID : " + id));

        String existingDetails = periode.getDetails();
        String updatedDetails = (existingDetails == null || existingDetails.isEmpty())
                ? transfert.toString()
                : PeriodeController.mergeJson(existingDetails, transfert.toString());

        periode.setDetails(updatedDetails);
        return periodeRepository.save(periode);
    }

    public Document convertOperationJsonToDocument(String operationJson) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(operationJson);

        // Créer un nouveau document avec une seule opération
        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();

        // 1. D'abord configurer EnteteDoc (OBLIGATOIRE avant Transferts)
        Document.EnteteDoc enteteDoc = factory.createDocumentEnteteDoc();
        enteteDoc.setCodeIAT("23"); // Exemple - à adapter selon vos besoins
        enteteDoc.setDateDec(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
        enteteDoc.setCodeAnnexe("TR-014");
        document.setEnteteDoc(enteteDoc);

        // 2. Ensuite configurer Transferts
        Document.Transferts transferts = factory.createDocumentTransferts();
        Document.Transferts.Transfert transfert = factory.createDocumentTransfertsTransfert();

        // Configurer l'entête du transfert
        Document.Transferts.Transfert.Entete entete = factory.createDocumentTransfertsTransfertEntete();
        entete.setPeriodDec(rootNode.path("periodDec").asText());
        entete.setNbrEcritures("000001");
        transfert.setEntete(entete);

        // Configurer les détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        // Remplir les champs de l'opération
        detail.setPeriodDec(rootNode.path("periodDec").asText());
        detail.setAgence(rootNode.path("agence").asText());

        // Remplir RefDonneur
        Document.Transferts.Transfert.Details.Detail.RefDonneur refDonneur =
                factory.createDocumentTransfertsTransfertDetailsDetailRefDonneur();
        JsonNode refDonneurNode = rootNode.path("refDonneur");
        refDonneur.setTypeIdentifiantD(refDonneurNode.path("typeIdentifiantD").asText());
        refDonneur.setCodIdentifiantD(refDonneurNode.path("codIdentifiantD").asText());
        refDonneur.setDenomD(refDonneurNode.path("denomD").asText());
        refDonneur.setIbanDonOrd(refDonneurNode.path("ibanDonOrd").asText());
        refDonneur.setPaysFonds(refDonneurNode.path("paysFonds").asText());
        detail.setRefDonneur(refDonneur);

        // Remplir Beneficiaire
        Document.Transferts.Transfert.Details.Detail.Benifiicaire benifiicaire =
                factory.createDocumentTransfertsTransfertDetailsDetailBenifiicaire();
        JsonNode benefNode = rootNode.path("benifiicaire");
        benifiicaire.setTypeBenifAsso(benefNode.path("typeBenifAsso").asText());
        benifiicaire.setCodIdentifiant(benefNode.path("codIdentifiant").asText());
        benifiicaire.setNumVisa(benefNode.path("numVisa").asText());
        benifiicaire.setRefJort(benefNode.path("refJort").asText());
        benifiicaire.setAbrev(benefNode.path("abrev").asText());
        benifiicaire.setDenomComplAsso(benefNode.path("denomComplAsso").asText());
        benifiicaire.setRib(benefNode.path("rib").asText());
        detail.setBenifiicaire(benifiicaire);

        // Remplir OperationTransf - IMPORTANT: respecter l'ordre du XSD
        Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf =
                factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        JsonNode opTransfNode = rootNode.path("operationTransf");

        operationTransf.setNatOp(opTransfNode.path("natOp").asText());

        // MntDev doit venir en premier
        TMontant mntDev = factory.createTMontant();
        JsonNode mntDevNode = opTransfNode.path("mntDev");
        mntDev.setValue(new BigDecimal(mntDevNode.path("value").asText()));
        mntDev.setCcy(mntDevNode.path("ccy").asText());
        operationTransf.setMntDev(mntDev);

        // CVMntDin doit venir APRÈS MntDev et AVANT DatOp
        TMontant cvmntDin = factory.createTMontant();
        JsonNode cvmntDinNode = opTransfNode.path("cvmntDin");
        cvmntDin.setValue(new BigDecimal(cvmntDinNode.path("value").asText()));
        cvmntDin.setCcy(cvmntDinNode.path("ccy").asText());
        operationTransf.setCVMntDin(cvmntDin);

        // DatOp doit venir APRÈS CVMntDin
        operationTransf.setDatOp(opTransfNode.path("datOp").asText());

        // RefMsgSwift vient en dernier
        operationTransf.setRefMsgSwift(opTransfNode.path("refMsgSwift").asText());

        detail.setOperationTransf(operationTransf);

        // Ajouter le détail aux détails
        details.getDetail().add(detail);
        transfert.setDetails(details);

        // Ajouter le transfert aux transferts
        transferts.getTransfert().add(transfert);
        document.setTransferts(transferts);

        return document;
    }

}

