package com.smi.declarations.services.CrsService;

import com.smi.generated.crs_cpd_vdpl.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

@Service
public class CrsCpdVdplService {

    private static final String CODE_ANNEXE = "CRS-002";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

    public Document processExcelFile(MultipartFile file) throws IOException {
        try (InputStream is = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            ObjectFactory factory = new ObjectFactory();
            Document document = factory.createDocument();

            // Entête document (valeurs fixes)
            Document.EnteteDoc enteteDoc = factory.createDocumentEnteteDoc();
            enteteDoc.setCodeIAT("01"); // Valeur par défaut
            enteteDoc.setDateDec(DATE_FORMAT.format(new Date()));
            enteteDoc.setCodeAnnexe(CODE_ANNEXE);
            enteteDoc.setPeriodDec(getPeriodFromCurrentDate()); // MMYYYY
            document.setEnteteDoc(enteteDoc);

            // Extraction des données
            Document.Extraits extraits = factory.createDocumentExtraits();
            Iterator<Row> rowIterator = sheet.iterator();

            // Sauter l'en-tête Excel
            if (rowIterator.hasNext()) rowIterator.next();

            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                extraits.getExtrait().add(buildExtraitFromRow(factory, row));
            }

            document.setExtraits(extraits);
            return document;
        }
    }

    private Document.Extraits.Extrait buildExtraitFromRow(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();

        // Entête
        Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();
        entete.setNbrEcritures(getStringValue(row.getCell(0))); // Colonne A: NbrEcritures
        extrait.setEntete(entete);

        // Détails
        Document.Extraits.Extrait.Details.Detail detail = buildDetailFromRow(factory, row);
        Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
        details.getDetail().add(detail);
        extrait.setDetails(details);

        return extrait;
    }

    private Document.Extraits.Extrait.Details.Detail buildDetailFromRow(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

        // Colonne B: Agence
        detail.setAgence(getStringValue(row.getCell(1)));

        // Opérateur (Colonnes C à H)
        detail.setOperateur(buildOperateur(factory, row));

        // Référence Opération (Colonnes I à N)
        detail.setRefOperation(buildRefOperation(factory, row));

        // Référence Support (Colonnes O à R)
        detail.setRefSupport(buildRefSupport(factory, row));

        return detail;
    }

    private Document.Extraits.Extrait.Details.Detail.Operateur buildOperateur(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait.Details.Detail.Operateur operateur =
                factory.createDocumentExtraitsExtraitDetailsDetailOperateur();

        // Colonne C: TypeOp (1-4)
        operateur.setTypeOp(BigInteger.valueOf(new BigDecimal(getStringValue(row.getCell(2))).intValue()));

        // Colonne D: TypeIdentifiant (C/P/S/D)
        operateur.setTypeIdentifiant(getStringValue(row.getCell(3)));

        // Colonne E: CodeIdentifiant
        operateur.setCodeIdentifiant(getStringValue(row.getCell(4)));

        // Colonne F: Nom
        operateur.setNom(getStringValue(row.getCell(5)));

        // Colonne G: Prenom
        operateur.setPrenom(getStringValue(row.getCell(6)));

        // Colonne H: RaisSociale
        operateur.setRaisSociale(getStringValue(row.getCell(7)));

        return operateur;
    }

    private Document.Extraits.Extrait.Details.Detail.RefOperation buildRefOperation(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait.Details.Detail.RefOperation refOperation =
                factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();

        // Colonne I: NatMvtOp (VD/PL)
        refOperation.setNatMvtOp(getStringValue(row.getCell(8)));

        // Colonne J+K: MntOpDev + Ccy
        refOperation.setMntOpDev(createMontant(row.getCell(9), row.getCell(10)));

        // Colonne L+M: MntOpDin + Ccy
        refOperation.setMntOpDin(createMontant(row.getCell(11), row.getCell(12)));

        // Colonne N: DateMvt
        refOperation.setDateMvt(getStringValue(row.getCell(13)));

        // Colonne O: EncoursPlac (optionnel)
        if (row.getCell(14) != null) {
            refOperation.setEncoursPlac(String.valueOf(new BigDecimal(getStringValue(row.getCell(14)))));
        }

        // Colonne P: NatOp (optionnel)
        if (row.getCell(15) != null) {
            refOperation.setNatOp(getStringValue(row.getCell(15)));
        }

        return refOperation;
    }

    private Document.Extraits.Extrait.Details.Detail.RefSupport buildRefSupport(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait.Details.Detail.RefSupport refSupport =
                factory.createDocumentExtraitsExtraitDetailsDetailRefSupport();

        // Colonne Q: SuppOp (optionnel)
        if (row.getCell(16) != null) {
            refSupport.setSuppOp(String.valueOf(new BigDecimal(getStringValue(row.getCell(16)))));
        }

        // Colonne R: NumSupp (optionnel)
        if (row.getCell(17) != null) {
            refSupport.setNumSupp(getStringValue(row.getCell(17)));
        }

        // Colonne S: DateSupp (optionnel)
        if (row.getCell(18) != null) {
            refSupport.setDateSupp(getStringValue(row.getCell(18)));
        }

        return refSupport;
    }

    // Méthodes utilitaires
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

    private String getPeriodFromCurrentDate() {
        return new SimpleDateFormat("MMyyyy").format(new Date());
    }
}