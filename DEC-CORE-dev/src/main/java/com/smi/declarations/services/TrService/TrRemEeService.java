package com.smi.declarations.services.TrService;

import com.smi.generated.tr_rem_ee.*;
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
public class TrRemEeService {

    private static final String CODE_ANNEXE = "TR-REM-EE";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");
    private static final SimpleDateFormat YEAR_FORMAT = new SimpleDateFormat("yyyy");
    private static final SimpleDateFormat QUARTER_FORMAT = new SimpleDateFormat("MM");

    public Document processExcelFile(MultipartFile file) throws IOException {
        try (InputStream is = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            ObjectFactory factory = new ObjectFactory();
            Document document = factory.createDocument();

            // Entête document
            buildEnteteDoc(document);

            // Extraction des données
            Document.Transferts transferts = factory.createDocumentTransferts();
            Iterator<Row> rowIterator = sheet.iterator();

            // Sauter l'en-tête Excel
            if (rowIterator.hasNext()) rowIterator.next();

            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                transferts.getTransfert().add(buildTransfertFromRow(factory, row));
            }

            document.setTransferts(transferts);
            return document;
        }
    }

    private Document.Transferts.Transfert buildTransfertFromRow(ObjectFactory factory, Row row) {
        Document.Transferts.Transfert transfert = factory.createDocumentTransfertsTransfert();

        // Entête
        Document.Transferts.Transfert.Entete entete = factory.createDocumentTransfertsTransfertEntete();
        entete.setAnneDec(YEAR_FORMAT.format(new Date())); // Année courante
        entete.setPeriodDec(getQuarterFromDate(new Date())); // Trimestre courant (1-4)
        entete.setNbrEcritures(getStringValue(row.getCell(0))); // Colonne A: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setAnneDec(YEAR_FORMAT.format(new Date())); // Année courante
        detail.setPeriodDec( getQuarterFromDate(new Date())); // Trimestre courant (1-4)
        detail.setAgence(getStringValue(row.getCell(1))); // Colonne B: Agence

        // Référence Domiciliation Convention
        Document.Transferts.Transfert.Details.Detail.RefDomConvention refDomConv =
                factory.createDocumentTransfertsTransfertDetailsDetailRefDomConvention();
        refDomConv.setNumDomConv(getStringValue(row.getCell(2))); // Colonne C: NumDomConv
        refDomConv.setDatDomConv(getStringValue(row.getCell(3))); // Colonne D: DatDomConv
        detail.setRefDomConvention(refDomConv);

        // Emprunteur/Prêteur
        Document.Transferts.Transfert.Details.Detail.EmprunteurPreteur emprunteur =
                factory.createDocumentTransfertsTransfertDetailsDetailEmprunteurPreteur();
        emprunteur.setMatFiscalSocEmp(getStringValue(row.getCell(4))); // Colonne E: MatFiscalSocEmp
        emprunteur.setDenomSocEmp(getStringValue(row.getCell(5))); // Colonne F: DenomSocEmp
        emprunteur.setDenomOrgPret(getStringValue(row.getCell(6))); // Colonne G: DenomOrgPret
        detail.setEmprunteurPreteur(emprunteur);

        // Montant Transfert Devise
        Document.Transferts.Transfert.Details.Detail.MntTransfDevise mntTransfDev =
                factory.createDocumentTransfertsTransfertDetailsDetailMntTransfDevise();
        mntTransfDev.setMntTotRembTrsfDev(createMontant(row.getCell(7), row.getCell(8))); // Colonnes H+I: MntTotRembTrsfDev + Ccy
        mntTransfDev.setMntPrincTrsfDev(createMontant(row.getCell(9), row.getCell(10))); // Colonnes J+K: MntPrincTrsfDev + Ccy
        mntTransfDev.setMntInteretsTrsfDev(createMontant(row.getCell(11), row.getCell(12))); // Colonnes L+M: MntInteretsTrsfDev + Ccy
        mntTransfDev.setAutresChargesTrsfDev(createMontant(row.getCell(13), row.getCell(14))); // Colonnes N+O: AutresChargesTrsfDev + Ccy
        detail.setMntTransfDevise(mntTransfDev);

        // Contre Valeur Montant
        Document.Transferts.Transfert.Details.Detail.ConterValMontant cvMontant =
                factory.createDocumentTransfertsTransfertDetailsDetailConterValMontant();
        cvMontant.setCVMntTndTotTrsf(createMontant(row.getCell(15), row.getCell(16))); // Colonnes P+Q: CVMntTndTotTrsf + Ccy
        cvMontant.setCVMntTndPrinTrsf(createMontant(row.getCell(17), row.getCell(18))); // Colonnes R+S: CVMntTndPrinTrsf + Ccy
        cvMontant.setInteretsTndTrsf(createMontant(row.getCell(19), row.getCell(20))); // Colonnes T+U: InteretsTndTrsf + Ccy
        cvMontant.setCVAutresChargesTrsf(createMontant(row.getCell(21), row.getCell(22))); // Colonnes V+W: CVAutresChargesTrsf + Ccy
        cvMontant.setTauxInterets(getStringValue(row.getCell(23))); // Colonne X: TauxInterets
        detail.setConterValMontant(cvMontant);

        // Référence Fiche Info
        Document.Transferts.Transfert.Details.Detail.RefFicheInfo refFicheInfo =
                factory.createDocumentTransfertsTransfertDetailsDetailRefFicheInfo();
        refFicheInfo.setNumFichInfo(getStringValue(row.getCell(24))); // Colonne Y: NumFichInfo
        refFicheInfo.setDatFichInfo(getStringValue(row.getCell(25))); // Colonne Z: DatFichInfo
        detail.setRefFicheInfo(refFicheInfo);

        // Reliquat Montant Principal à Rembourser
        detail.setReliquatMntPrRemb(createMontant(row.getCell(26), row.getCell(27))); // Colonnes AA+AB: ReliquatMntPrRemb + Ccy

        details.getDetail().add(detail);
        transfert.setDetails(details);

        return transfert;
    }

    private void buildEnteteDoc(Document doc) {
        Document.EnteteDoc entete = new Document.EnteteDoc();
        entete.setCodeIAT("01"); // Valeur par défaut
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

    private BigInteger getQuarterFromDate(Date date) {
        int month = Integer.parseInt(QUARTER_FORMAT.format(date));
        int quarter = (month - 1) / 3 + 1;
        return BigInteger.valueOf(quarter);
    }
}