package com.smi.declarations.services.CrsService;

import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.generated.crs_cpd_osm.Document;
import com.smi.generated.crs_cpd_osm.ObjectFactory;
import com.smi.generated.crs_cpd_osm.TMontant;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CrsCpdOsmService {

    @Autowired
    private PeriodeRepository periodeRepository;

    private static final Logger logger = LoggerFactory.getLogger(CrsCpdOsmService.class);
    private final DataFormatter dataFormatter = new DataFormatter();
    private final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();

        // Entête Document
        Iterator<Row> rowIterator = sheet.iterator();
        Row headerRow = rowIterator.next(); // Skip header

        if(rowIterator.hasNext()) {
            Row firstDataRow = rowIterator.next();
            document.setEnteteDoc(createEnteteDoc(firstDataRow, factory));
        }

        // Extraits
        Document.Extraits extraits = factory.createDocumentExtraits();
        rowIterator = sheet.iterator();
        rowIterator.next(); // Reset iterator

        while(rowIterator.hasNext()) {
            Row row = rowIterator.next();
            if(row.getRowNum() == 0) continue; // Skip header
            extraits.getExtrait().add(createExtraitFromRow(row, factory));
        }

        document.setExtraits(extraits);
        workbook.close();
        return document;
    }

    private Document.EnteteDoc createEnteteDoc(Row row, ObjectFactory factory) {
        Document.EnteteDoc enteteDoc = factory.createDocumentEnteteDoc();
        enteteDoc.setCodeIAT(getCellStringValue(row.getCell(1)));      // Colonne Agence
        enteteDoc.setDateDec(dateFormat.format(new Date()));
        enteteDoc.setCodeAnnexe("CRS-001");
        enteteDoc.setPeriodDec(getCellStringValue(row.getCell(0)));    // PeriodDec
        return enteteDoc;
    }

    private Document.Extraits.Extrait createExtraitFromRow(Row row, ObjectFactory factory) {
        Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();
        Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();

        // Entête
        entete.setAgence(getCellStringValue(row.getCell(1)));          // Agence
        entete.setTitulaire(createTitulaire(row, factory));
        entete.setRefCompte(createRefCompte(row, factory));
        entete.setNbrEcritures(getCellStringValue(row.getCell(20)));   // NbrEcritures

        // Détails
        if(shouldCreateDetails(row)) {
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            details.getDetail().add(createDetail(row, factory));
            extrait.setDetails(details);
        }

        return extrait;
    }

    private Document.Extraits.Extrait.Entete.Titulaire createTitulaire(Row row, ObjectFactory factory) {
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeTitul(convertCellToBigInteger(row.getCell(2)));
        titulaire.setTypeIdentifiant(getCellStringValue(row.getCell(3)));
        titulaire.setCodeIdentifiant(getCellStringValue(row.getCell(4)));
        titulaire.setNom(getCellStringValue(row.getCell(5)));
        titulaire.setPrenom(getCellStringValue(row.getCell(6)));
        titulaire.setRaisSociale(getCellStringValue(row.getCell(7)));
        return titulaire;
    }

    private Document.Extraits.Extrait.Entete.RefCompte createRefCompte(Row row, ObjectFactory factory) {
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getCellStringValue(row.getCell(8)));
        refCompte.setDeviseCpte(getCellStringValue(row.getCell(9)));
        refCompte.setEtatCpte(convertCellToBigInteger(row.getCell(10)));
        refCompte.setDateOuvCpte(getCellStringValue(row.getCell(11)));
        refCompte.setDateclotureCpte(getCellStringValue(row.getCell(12)));
        refCompte.setDateGelCpte(getCellStringValue(row.getCell(13)));
        refCompte.setNumAutBCT(getCellStringValue(row.getCell(14)));
        refCompte.setDateAutBCT(getCellStringValue(row.getCell(15)));
        refCompte.setSoldDebMois(createTMontant(row.getCell(16), row.getCell(17)));
        refCompte.setSoldfinMois(createTMontant(row.getCell(18), row.getCell(19)));
        return refCompte;
    }

    private Document.Extraits.Extrait.Details.Detail createDetail(Row row, ObjectFactory factory) {
        Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

        // Rib du détail
        detail.setRib(getCellStringValue(row.getCell(21)));

        // Référence Opération
        Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
        refOperation.setNatMvtOp(getCellStringValue(row.getCell(22)));
        refOperation.setMntOpDev(createTMontant(row.getCell(23), row.getCell(24)));
        refOperation.setMntOpDin(createTMontant(row.getCell(25), row.getCell(26)));
        refOperation.setDateMvt(getCellStringValue(row.getCell(27)));
        refOperation.setNatOp(getCellStringValue(row.getCell(28)));
        refOperation.setModReg(convertCellToBigInteger(row.getCell(29)));
        refOperation.setNumMsgeSwiftMvt(getCellStringValue(row.getCell(30)));
        detail.setRefOperation(refOperation);

        // Référence Support
        Document.Extraits.Extrait.Details.Detail.RefSupport refSupport = factory.createDocumentExtraitsExtraitDetailsDetailRefSupport();
        refSupport.setSuppOp(convertCellToBigInteger(row.getCell(31)));
        refSupport.setNumSupp(getCellStringValue(row.getCell(32)));
        refSupport.setDateSupp(getCellStringValue(row.getCell(33)));
        detail.setRefSupport(refSupport);

        // Déclaration Douane
        Document.Extraits.Extrait.Details.Detail.DecDouane decDouane = factory.createDocumentExtraitsExtraitDetailsDetailDecDouane();
        decDouane.setNumDecD(getCellStringValue(row.getCell(34)));
        decDouane.setDateDecD(getCellStringValue(row.getCell(35)));
        detail.setDecDouane(decDouane);

        return detail;
    }

    private boolean shouldCreateDetails(Row row) {
        // Vérifie si au moins un champ obligatoire est rempli
        return !isCellEmpty(row.getCell(21)) ||  // Rib
                !isCellEmpty(row.getCell(22)) ||  // NatMvtOp
                !isCellEmpty(row.getCell(23)) ||  // MntOpDev
                !isCellEmpty(row.getCell(25));    // MntOpDin
    }

    private TMontant createTMontant(Cell valueCell, Cell currencyCell) {
        TMontant montant = new TMontant();
        try {
            String value = dataFormatter.formatCellValue(valueCell)
                    .replaceAll("[^\\d.,-]", "")
                    .replace(',', '.');

            montant.setValue(value.isEmpty() ? BigDecimal.ZERO : new BigDecimal(value));
        } catch (Exception e) {
            logger.error("Erreur conversion montant cellule {}: {}",
                    valueCell.getAddress().formatAsString(),
                    dataFormatter.formatCellValue(valueCell));
            montant.setValue(BigDecimal.ZERO);
        }
        montant.setCcy(getCellStringValue(currencyCell));
        return montant;
    }

    private String getCellStringValue(Cell cell) {
        return cell != null ? dataFormatter.formatCellValue(cell).trim() : "";
    }

    private BigInteger convertCellToBigInteger(Cell cell) {
        try {
            String value = dataFormatter.formatCellValue(cell)
                    .replaceAll("[^\\d-]", "");
            return value.isEmpty() ? BigInteger.ZERO : new BigInteger(value);
        } catch (Exception e) {
            logger.warn("Conversion impossible en BigInteger cellule {}: {}",
                    cell != null ? cell.getAddress().formatAsString() : "null",
                    dataFormatter.formatCellValue(cell));
            return BigInteger.ZERO;
        }
    }

    private boolean isCellEmpty(Cell cell) {
        return cell == null || dataFormatter.formatCellValue(cell).trim().isEmpty();
    }
}