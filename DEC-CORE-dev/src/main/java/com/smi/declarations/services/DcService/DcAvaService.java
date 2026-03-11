package com.smi.declarations.services.DcService;

import com.smi.generated.dc_ava.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

@Service
public class DcAvaService {

    private static final String CODE_ANNEXE = "DC-AVA";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

    public Document processExcelFile(MultipartFile file) throws IOException {
        try (InputStream is = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            ObjectFactory factory = new ObjectFactory();
            Document document = factory.createDocument();

            buildEnteteDoc(document);

            Document.Decomptes decomptes = factory.createDocumentDecomptes();
            Iterator<Row> rowIterator = sheet.iterator();

            if (rowIterator.hasNext()) rowIterator.next(); // Skip header

            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                decomptes.getDecompte().add(buildDecompteFromRow(factory, row));
            }

            document.setDecomptes(decomptes);
            return document;
        }
    }

    private Document.Decomptes.Decompte buildDecompteFromRow(ObjectFactory factory, Row row) {
        Document.Decomptes.Decompte decompte = factory.createDocumentDecomptesDecompte();

        // Entête
        Document.Decomptes.Decompte.Entete entete = factory.createDocumentDecomptesDecompteEntete();
        entete.setPeriodDec(getStringValue(row.getCell(0)));
        entete.setAgence(getStringValue(row.getCell(1)));
        entete.setNumDosAVA(getStringValue(row.getCell(2)));

        // Titulaire
        Document.Decomptes.Decompte.Entete.Titulaire titulaire = factory.createDocumentDecomptesDecompteEnteteTitulaire();
        titulaire.setTypeIdenTitu(getStringValue(row.getCell(3)));
        titulaire.setCodIdenTitu(getStringValue(row.getCell(4)));
        if (row.getCell(5) != null) titulaire.setDenomTitu(getStringValue(row.getCell(5)));
        if (row.getCell(6) != null) titulaire.setNom(getStringValue(row.getCell(6)));
        if (row.getCell(7) != null) titulaire.setPrenom(getStringValue(row.getCell(7)));
        entete.setTitulaire(titulaire);

        entete.setNumActv(getStringValue(row.getCell(8)));
        entete.setTypAlloc(getStringValue(row.getCell(9)));
        if (row.getCell(10) != null) entete.setIdMarche(getStringValue(row.getCell(10)));
        entete.setDatDom(getStringValue(row.getCell(11)));
        entete.setStatDoss(getStringValue(row.getCell(12)));
        if (row.getCell(13) != null) entete.setDatSusp(getStringValue(row.getCell(13)));
        entete.setDebPeriodFon(getStringValue(row.getCell(14)));
        if (row.getCell(15) != null) entete.setFinPeriodFon(getStringValue(row.getCell(15)));
        if (row.getCell(16) != null) entete.setSousTypAVA(getStringValue(row.getCell(16)));
        if (row.getCell(17) != null) entete.setChiffrAffHrsTx(getStringValue(row.getCell(17)));
        if (row.getCell(18) != null) entete.setAnneCA(getStringValue(row.getCell(18)));
        if (row.getCell(19) != null) entete.setNumaAutBCT(getStringValue(row.getCell(19)));
        if (row.getCell(20) != null) entete.setDatAutBCT(getStringValue(row.getCell(20)));
        entete.setNbrEcritures(getStringValue(row.getCell(21)));

        decompte.setEntete(entete);

        // Détails
        Document.Decomptes.Decompte.Details details = factory.createDocumentDecomptesDecompteDetails();
        Document.Decomptes.Decompte.Details.Detail detail = factory.createDocumentDecomptesDecompteDetailsDetail();

        detail.setPeriodDec(getStringValue(row.getCell(22)));
        detail.setNumDosAVA(getStringValue(row.getCell(23)));
        detail.setTypOp(getStringValue(row.getCell(24)));
        detail.setDesgnOp(getStringValue(row.getCell(25)));
        if (row.getCell(26) != null) detail.setDatConcContrat(getStringValue(row.getCell(26)));
        detail.setIaEncRest(getStringValue(row.getCell(27)));
        detail.setDatOp(getStringValue(row.getCell(28)));
        detail.setMntDinOp(createMontant(row.getCell(29), row.getCell(30)));
        if (row.getCell(31) != null) detail.setDatEncProdExport(getStringValue(row.getCell(31)));
        detail.setCodOrigFond(getStringValue(row.getCell(32)));
        detail.setCodPays(getStringValue(row.getCell(33)));
        detail.setDroitTransCumm(createMontant(row.getCell(34), row.getCell(35)));
        if (row.getCell(36) != null) detail.setMntImport(getStringValue(row.getCell(36)));
        detail.setMntTransCum(createMontant(row.getCell(37), row.getCell(38)));
        if (row.getCell(39) != null) detail.setBaseCalDroitTran(getStringValue(row.getCell(39)));

        // Bénéficiaire
        Document.Decomptes.Decompte.Details.Detail.Benificiaire benificiaire = factory.createDocumentDecomptesDecompteDetailsDetailBenificiaire();
        benificiaire.setTypeIdentifiant(getStringValue(row.getCell(40)));
        benificiaire.setCodIdentifiant(getStringValue(row.getCell(41)));
        benificiaire.setNom(getStringValue(row.getCell(42)));
        benificiaire.setPrenom(getStringValue(row.getCell(43)));
        detail.setBenificiaire(benificiaire);

        details.getDetail().add(detail);
        decompte.setDetails(details);

        return decompte;
    }

    private void buildEnteteDoc(Document doc) {
        Document.EnteteDoc entete = new Document.EnteteDoc();
        entete.setCodeIAT("01");
        entete.setDateDec(DATE_FORMAT.format(new Date()));
        entete.setCodeAnnexe(CODE_ANNEXE);
        doc.setEnteteDoc(entete);
    }

    private TMontant createMontant(Cell valueCell, Cell currencyCell) {
        TMontant montant = new TMontant();
        montant.setValue(new BigDecimal(getStringValue(valueCell)));
        montant.setCcy(getStringValue(currencyCell));
        return montant;
    }

    private String getStringValue(Cell cell) {
        if (cell == null || cell.getCellType() == CellType.BLANK) {
            return "";
        }
        switch (cell.getCellType()) {
            case STRING: return cell.getStringCellValue().trim();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return DATE_FORMAT.format(cell.getDateCellValue());
                }
                return String.valueOf((long) cell.getNumericCellValue());
            default: return "";
        }
    }
}