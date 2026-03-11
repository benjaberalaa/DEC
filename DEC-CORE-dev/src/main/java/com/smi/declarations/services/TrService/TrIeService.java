package com.smi.declarations.services.TrService;

import com.smi.generated.tr_ie.*;
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
public class TrIeService {

    private static final String CODE_ANNEXE = "TR-IE";
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
        refInvestisseur.setMatricFiscalInvt(getStringValue(row.getCell(4))); // E: MatricFiscalInvt
        refInvestisseur.setRaisSocialInvt(getStringValue(row.getCell(5))); // F: RaisSocialInvt
        detail.setRefInvestisseur(refInvestisseur);

        detail.setCodActInvt(getStringValue(row.getCell(6))); // G: CodActInvt
        detail.setSocExport(new BigInteger(getStringValue(row.getCell(7)))); // H: SocExport
        detail.setChiffAffaire(new BigInteger(getStringValue(row.getCell(8)))); // I: ChiffAffaire
        detail.setPosInvt(new BigInteger(getStringValue(row.getCell(9)))); // J: PosInvt
        detail.setFormInvt(new BigInteger(getStringValue(row.getCell(10)))); // K: FormInvt

        if (row.getCell(11) != null) detail.setTxPart(getStringValue(row.getCell(11))); // L: TxPart (optionnel)

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operation = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operation.setMntTransDev(createMontant(row.getCell(12), row.getCell(13))); // M+N: MntTransDev + Ccy
        operation.setCvMntTnd(createMontant(row.getCell(14), row.getCell(15))); // O+P: CvMntTnd + Ccy
        operation.setMoyenReg(getStringValue(row.getCell(16))); // Q: MoyenReg
        operation.setRaisSocialInvtss(getStringValue(row.getCell(17))); // R: RaisSocialInvtss
        operation.setCodSectActInvt(getStringValue(row.getCell(18))); // S: CodSectActInvt

        if (row.getCell(19) != null) operation.setCodClassActInvt(getStringValue(row.getCell(19))); // T: CodClassActInvt (optionnel)

        operation.setCodPaysDest(getStringValue(row.getCell(20))); // U: CodPaysDest
        detail.setOperationTransf(operation);

        // Référence Fiche Information
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFichInfo = factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        refFichInfo.setNumFichInfo(getStringValue(row.getCell(21))); // V: NumFichInfo
        refFichInfo.setDatFichInfo(getStringValue(row.getCell(22))); // W: DatFichInfo
        detail.setRefFichInfo(refFichInfo);

        detail.setCodSwift(getStringValue(row.getCell(23))); // X: CodSwift

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
