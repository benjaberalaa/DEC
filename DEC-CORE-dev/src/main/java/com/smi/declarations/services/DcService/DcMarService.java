package com.smi.declarations.services.DcService;

import com.smi.generated.dc_mar.*;
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
public class DcMarService {

    private static final String CODE_ANNEXE = "DC-MAR";
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
        entete.setAnneDec(getStringValue(row.getCell(0))); // AnneDec
        entete.setPeriodDec(getStringValue(row.getCell(1))); // PeriodDec
        entete.setAgence(getStringValue(row.getCell(2))); // Agence
        entete.setIdMarche(getStringValue(row.getCell(3))); // IdMarche
        entete.setDenomMaitreOuv(getStringValue(row.getCell(4))); // DenomMaitreOuv
        entete.setCodPays(getStringValue(row.getCell(5))); // CodPays

        // MaitreOeuvreResident
        Document.Decomptes.Decompte.Entete.MaitreOeuvreResident mor =
                factory.createDocumentDecomptesDecompteEnteteMaitreOeuvreResident();
        mor.setMatFiscalMOR(getStringValue(row.getCell(6))); // MatFiscalMOR
        mor.setDenomMOR(getStringValue(row.getCell(7))); // DenomMOR
        entete.setMaitreOeuvreResident(mor);

        entete.setGroupement(getStringValue(row.getCell(8))); // Groupement

        // EntrepriseChefDeFile
        Document.Decomptes.Decompte.Entete.EntrepriseChefDeFile ecf =
                factory.createDocumentDecomptesDecompteEnteteEntrepriseChefDeFile();
        if (row.getCell(9) != null) ecf.setResPlanChang(getStringValue(row.getCell(9))); // ResPlanChang (optionnel)
        if (row.getCell(10) != null) ecf.setMatFiscalEntrRCF(getStringValue(row.getCell(10))); // MatFiscalEntrRCF (optionnel)
        if (row.getCell(11) != null) ecf.setDenomEntrRCF(getStringValue(row.getCell(11))); // DenomEntrRCF (optionnel)
        entete.setEntrepriseChefDeFile(ecf);

        // EntrespCoTitulaire (jusqu'à 6 occurrences)
        Document.Decomptes.Decompte.Entete.EntrespCoTitulaire ect =
                factory.createDocumentDecomptesDecompteEnteteEntrespCoTitulaire();
        if (row.getCell(12) != null) ect.setDenomEntrCoTitu(getStringValue(row.getCell(12))); // DenomEntrCoTitu (optionnel)
        if (row.getCell(13) != null) ect.setStatPlanChangEntrCoTitu(getStringValue(row.getCell(13))); // StatPlanChangEntrCoTitu
        if (row.getCell(14) != null) ect.setMFIdEntrCoTitul(getStringValue(row.getCell(14))); // MFIdEntrCoTitul (optionnel)
        entete.getEntrespCoTitulaire().add(ect);

        // Montants
        entete.setMntGlobal(createMontant(row.getCell(15), row.getCell(16))); // MntGlobal + Ccy
        entete.setMntLocale(createMontant(row.getCell(17), row.getCell(18))); // MntLocale + Ccy
        entete.setMntConvertible(createMontant(row.getCell(19), row.getCell(20))); // MntConvertible + Ccy

        entete.setAvanceMarchPourMntMarche(getStringValue(row.getCell(21))); // AvanceMarchPourMntMarche
        entete.setDateConcContratMarche(getStringValue(row.getCell(22))); // DateConcContratMarche
        entete.setDureeMarcheMois(getStringValue(row.getCell(23))); // DureeMarcheMois
        entete.setNbrEcritures(getStringValue(row.getCell(24))); // NbrEcritures

        decompte.setEntete(entete);

        // Détails
        Document.Decomptes.Decompte.Details details = factory.createDocumentDecomptesDecompteDetails();
        Document.Decomptes.Decompte.Details.Detail detail = factory.createDocumentDecomptesDecompteDetailsDetail();

        detail.setAnneDec(getStringValue(row.getCell(25))); // AnneDec
        detail.setPeriodDec(getStringValue(row.getCell(26))); // PeriodDec
        detail.setIdMarche(getStringValue(row.getCell(27))); // IdMarche
        detail.setLibOp(getStringValue(row.getCell(28))); // LibOp

        if (row.getCell(29) != null) detail.setRib(getStringValue(row.getCell(29))); // Rib (optionnel)
        if (row.getCell(30) != null) detail.setNatCmpte(getStringValue(row.getCell(30))); // NatCmpte (optionnel)

        detail.setDatOp(getStringValue(row.getCell(31))); // DatOp
        detail.setMntOp(createMontant(row.getCell(32), row.getCell(33))); // MntOp + Ccy
        detail.setCVDinTot(createMontant(row.getCell(34), row.getCell(35))); // CVDinTot + Ccy

        if (row.getCell(36) != null) detail.setSourcRegl(getStringValue(row.getCell(36))); // SourcRegl (optionnel)

        // RefFichInfo
        Document.Decomptes.Decompte.Details.Detail.RefFichInfo refFichInfo =
                factory.createDocumentDecomptesDecompteDetailsDetailRefFichInfo();
        if (row.getCell(37) != null) refFichInfo.setNumFichInfo(getStringValue(row.getCell(37))); // NumFichInfo (optionnel)
        if (row.getCell(38) != null) refFichInfo.setDatFichInfo(getStringValue(row.getCell(38))); // DatFichInfo (optionnel)
        detail.setRefFichInfo(refFichInfo);

        // RefAutorisationBct
        Document.Decomptes.Decompte.Details.Detail.RefAutorisationBct refAuth =
                factory.createDocumentDecomptesDecompteDetailsDetailRefAutorisationBct();
        if (row.getCell(39) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(39))); // NumAutBCT (optionnel)
        if (row.getCell(40) != null) refAuth.setDatAutBCT(getStringValue(row.getCell(40))); // DatAutBCT (optionnel)
        detail.setRefAutorisationBct(refAuth);

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