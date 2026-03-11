package com.smi.declarations.services.TrService;

import com.smi.generated.tr_sc.*;
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
public class TrScService {

    private static final String CODE_ANNEXE = "TR-SC";
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

        // Domiciliation Scolarité
        Document.Transferts.Transfert.Details.Detail.DomScolarite domScolarite = factory.createDocumentTransfertsTransfertDetailsDetailDomScolarite();
        domScolarite.setNumDomDosScol(getStringValue(row.getCell(4))); // E: NumDomDosScol
        domScolarite.setDateDomDosScol(getStringValue(row.getCell(5))); // F: DateDomDosScol
        detail.setDomScolarite(domScolarite);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operation = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operation.setLibOp(new BigInteger(getStringValue(row.getCell(6)))); // G: LibOp
        operation.setMntTransDev(createMontant(row.getCell(7), row.getCell(8))); // H+I: MntTransDev + Ccy
        operation.setCvMntTnd(createMontant(row.getCell(9), row.getCell(10))); // J+K: CvMntTnd + Ccy
        operation.setDatTrans(getStringValue(row.getCell(11))); // L: DatTrans
        operation.setModTrans(new BigInteger(getStringValue(row.getCell(12)))); // M: ModTrans
        operation.setCodPaysDest(getStringValue(row.getCell(13))); // N: CodPaysDest

        if (row.getCell(14) != null) operation.setNumAutBctSD(getStringValue(row.getCell(14))); // O: NumAutBctSD (optionnel)
        if (row.getCell(15) != null) operation.setDatAutBctSD(getStringValue(row.getCell(15))); // P: DatAutBctSD (optionnel)

        operation.setNatOp(getStringValue(row.getCell(16))); // Q: NatOp
        detail.setOperationTransf(operation);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(17) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(17))); // R: NumAutBCT (optionnel)
        if (row.getCell(18) != null) refAuth.setDatAutBCT(getStringValue(row.getCell(18))); // S: DatAutBCT (optionnel)
        detail.setRefAutorisationBct(refAuth);

        // Référence Fiche Information
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFich = factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        if (row.getCell(19) != null) refFich.setNumFichInfo(getStringValue(row.getCell(19))); // T: NumFichInfo (optionnel)
        if (row.getCell(20) != null) refFich.setDatFichInfo(getStringValue(row.getCell(20))); // U: DatFichInfo (optionnel)
        detail.setRefFichInfo(refFich);

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