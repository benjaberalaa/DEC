package com.smi.declarations.services.TrService;

import com.smi.generated.tr_dom_ee.*;
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
public class TrDomEeService {

    private static final String CODE_ANNEXE = "TR-DOMEE";
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
        entete.setAnneDec(getStringValue(row.getCell(0))); // A: AnneDec
        entete.setPeriodDec(new BigInteger(getStringValue(row.getCell(1)))); // B: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(2))); // C: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setAnneDec(getStringValue(row.getCell(3))); // D: AnneDec
        detail.setPeriodDec(new BigInteger(getStringValue(row.getCell(4)))); // E: PeriodDec
        detail.setAgence(getStringValue(row.getCell(5))); // F: Agence

        // Référence Domiciliation Convention
        Document.Transferts.Transfert.Details.Detail.RefDomConvention refDomConv = factory.createDocumentTransfertsTransfertDetailsDetailRefDomConvention();
        if (row.getCell(6) != null) refDomConv.setNumDomConv(getStringValue(row.getCell(6))); // G: NumDomConv (optionnel)
        if (row.getCell(7) != null) refDomConv.setDatDomConv(getStringValue(row.getCell(7))); // H: DatDomConv (optionnel)
        detail.setRefDomConvention(refDomConv);

        // Référence Société Emprunteuse
        Document.Transferts.Transfert.Details.Detail.RefSocEmprunteuse refSocEmp = factory.createDocumentTransfertsTransfertDetailsDetailRefSocEmprunteuse();
        refSocEmp.setMatFiscalSocEmp(getStringValue(row.getCell(8))); // I: MatFiscalSocEmp
        refSocEmp.setDenomSocEmp(getStringValue(row.getCell(9))); // J: DenomSocEmp
        refSocEmp.setCodNatSocEmp(getStringValue(row.getCell(10))); // K: CodNatSocEmp
        detail.setRefSocEmprunteuse(refSocEmp);

        if (row.getCell(11) != null) detail.setCodOrgNot(getStringValue(row.getCell(11))); // L: CodOrgNot (optionnel)
        detail.setDenomOrgPret(getStringValue(row.getCell(12))); // M: DenomOrgPret

        // Référence Emprunt
        Document.Transferts.Transfert.Details.Detail.RefEmprunt refEmprunt = factory.createDocumentTransfertsTransfertDetailsDetailRefEmprunt();
        refEmprunt.setMntEmp(createMontant(row.getCell(13), row.getCell(14))); // N+O: MntEmp + Ccy
        refEmprunt.setCvMntTnd(createMontant(row.getCell(15), row.getCell(16))); // P+Q: CvMntTnd + Ccy
        refEmprunt.setFormEmpExt(getStringValue(row.getCell(17))); // R: FormEmpExt

        if (row.getCell(18) != null) refEmprunt.setAutrFormExt(getStringValue(row.getCell(18))); // S: AutrFormExt (optionnel)

        refEmprunt.setTxInteret(getStringValue(row.getCell(19))); // T: TxInteret
        refEmprunt.setDureRemb(getStringValue(row.getCell(20))); // U: DureRemb
        refEmprunt.setModRemb(new BigInteger(getStringValue(row.getCell(21)))); // V: ModRemb
        detail.setRefEmprunt(refEmprunt);

        // Référence Fiche Investissement
        Document.Transferts.Transfert.Details.Detail.RefFicheInvest refFichInvt = factory.createDocumentTransfertsTransfertDetailsDetailRefFicheInvest();
        if (row.getCell(22) != null) refFichInvt.setNumFichInvt(getStringValue(row.getCell(22))); // W: NumFichInvt (optionnel)
        if (row.getCell(23) != null) refFichInvt.setDatFichInvt(getStringValue(row.getCell(23))); // X: DatFichInvt (optionnel)
        detail.setRefFicheInvest(refFichInvt);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuthBct = factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(24) != null) refAuthBct.setNumAutBCT(getStringValue(row.getCell(24))); // Y: NumAutBCT (optionnel)
        if (row.getCell(25) != null) refAuthBct.setDatAutBCT(getStringValue(row.getCell(25))); // Z: DatAutBCT (optionnel)
        detail.setRefAutorisationBct(refAuthBct);

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