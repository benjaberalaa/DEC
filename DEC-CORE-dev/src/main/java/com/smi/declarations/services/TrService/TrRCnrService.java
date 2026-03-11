package com.smi.declarations.services.TrService;


import com.smi.generated.tr_r_cnr.Document;
import com.smi.generated.tr_r_cnr.ObjectFactory;
import com.smi.generated.tr_r_cnr.TMontant;
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
public class TrRCnrService {

    private static final String CODE_ANNEXE = "TR-RCNR";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

    public Document processExcelFile(MultipartFile file) throws IOException {
        try (InputStream is = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            ObjectFactory factory = new ObjectFactory();
            Document document = factory.createDocument();

            buildEnteteDoc(document);

            Document.Transferts transferts = factory.createDocumentTransferts();
            Iterator<Row> rowIterator = sheet.iterator();

            if (rowIterator.hasNext()) rowIterator.next(); // Skip header

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
        entete.setPeriodDec(getStringValue(row.getCell(0))); // A: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(1))); // B: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setPeriodDec(getStringValue(row.getCell(2))); // C: PeriodDec
        detail.setAgence(getStringValue(row.getCell(3))); // D: Agence

        // Référence Investisseur
        Document.Transferts.Transfert.Details.Detail.RefInvestisseur refInvestisseur = factory.createDocumentTransfertsTransfertDetailsDetailRefInvestisseur();
        refInvestisseur.setTypeIdentifiant(getStringValue(row.getCell(4))); // E: TypeIdentifiant
        refInvestisseur.setCodeIdentifiant(getStringValue(row.getCell(5))); // F: CodeIdentifiant

        // Champs conditionnels selon le type d'investisseur
        if (row.getCell(6) != null) refInvestisseur.setNom(getStringValue(row.getCell(6))); // G: Nom (optionnel)
        if (row.getCell(7) != null) refInvestisseur.setPrenom(getStringValue(row.getCell(7))); // H: Prenom (optionnel)
        if (row.getCell(8) != null) refInvestisseur.setRaisSocialInvt(getStringValue(row.getCell(8))); // I: RaisSocialInvt (optionnel)

        detail.setRefInvestisseur(refInvestisseur);

        detail.setFormPart(new BigInteger(getStringValue(row.getCell(9)))); // J: FormPart
        detail.setTxPart(new BigDecimal(getStringValue(row.getCell(10)))); // K: TxPart

        // Montants
        detail.setMntTrsf(createMontant(row.getCell(11), row.getCell(12))); // L+M: MntTrsf + Ccy
        detail.setCvMntTnd(createMontant(row.getCell(13), row.getCell(14))); // N+O: CvMntTnd + Ccy

        // Référence Fiche Information
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFichInfo = factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        refFichInfo.setNumFichInfo(getStringValue(row.getCell(15))); // P: NumFichInfo
        refFichInfo.setDatFichInfo(getStringValue(row.getCell(16))); // Q: DatFichInfo
        detail.setRefFichInfo(refFichInfo);

        // Référence Société NR
        Document.Transferts.Transfert.Details.Detail.RefSocietetNR refSocieteNR = factory.createDocumentTransfertsTransfertDetailsDetailRefSocietetNR();
        refSocieteNR.setIdentifiantSocNR(getStringValue(row.getCell(17))); // R: IdentifiantSocNR
        refSocieteNR.setRaisSocialSocNr(getStringValue(row.getCell(18))); // S: RaisSocialSocNr
        detail.setRefSocietetNR(refSocieteNR);

        detail.setCodInvt(getStringValue(row.getCell(19))); // T: CodInvt
        detail.setSuppActiv(new BigInteger(getStringValue(row.getCell(20)))); // U: SuppActiv
        detail.setCapSocSocNR(getStringValue(row.getCell(21))); // V: CapSocSocNR
        detail.setTxPartNonRes(new BigDecimal(getStringValue(row.getCell(22)))); // W: TxPartNonRes

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
}
