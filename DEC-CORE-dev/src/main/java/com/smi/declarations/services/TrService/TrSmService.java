package com.smi.declarations.services.TrService;

import com.smi.generated.tr_sm.*;
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
public class TrSmService {

    private static final String CODE_ANNEXE = "TR-SM";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

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
        entete.setPeriodDec(getStringValue(row.getCell(2))); // Colonne C: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(1))); // Colonne B: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setPeriodDec(getStringValue(row.getCell(2))); // Colonne C: PeriodDec (dans Details)
        detail.setAgence(getStringValue(row.getCell(3))); // Colonne D: Agence

        // Référence Patient
        Document.Transferts.Transfert.Details.Detail.RefPatient refPatient =
                factory.createDocumentTransfertsTransfertDetailsDetailRefPatient();
        refPatient.setTypeIdentifiant(getStringValue(row.getCell(4))); // Colonne E: TypeIdentifiant
        refPatient.setCodeIdentifiant(getStringValue(row.getCell(5))); // Colonne F: CodeIdentifiant
        refPatient.setNom(getStringValue(row.getCell(6))); // Colonne G: Nom
        refPatient.setPrenom(getStringValue(row.getCell(7))); // Colonne H: Prenom
        detail.setRefPatient(refPatient);

        detail.setNomPrenoMed(getStringValue(row.getCell(8))); // Colonne I: NomPrenoMed
        detail.setCodPaysDest(getStringValue(row.getCell(9))); // Colonne J: CodPaysDest
        detail.setPrisCharg(new BigInteger(getStringValue(row.getCell(10)))); // Colonne K: PrisCharg
        detail.setAccomp(new BigInteger(getStringValue(row.getCell(11)))); // Colonne L: Accomp

        // Référence Accompagnateur
        Document.Transferts.Transfert.Details.Detail.RefAccompagnateur refAccomp =
                factory.createDocumentTransfertsTransfertDetailsDetailRefAccompagnateur();
        if (row.getCell(12) != null) refAccomp.setTypIdentifiantAccomp(getStringValue(row.getCell(12))); // Colonne M: TypIdentifiantAccomp (optionnel)
        if (row.getCell(13) != null) refAccomp.setCodeIdentifiantAccomp(getStringValue(row.getCell(13))); // Colonne N: CodeIdentifiantAccomp (optionnel)
        if (row.getCell(14) != null) refAccomp.setNomAccomp(getStringValue(row.getCell(14))); // Colonne O: NomAccomp (optionnel)
        if (row.getCell(15) != null) refAccomp.setPrenomAccomp(getStringValue(row.getCell(15))); // Colonne P: PrenomAccomp (optionnel)
        detail.setRefAccompagnateur(refAccomp);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operation =
                factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operation.setNatOp(getStringValue(row.getCell(16))); // Colonne Q: NatOp
        operation.setMntTransDev(createMontant(row.getCell(17), row.getCell(18))); // Colonnes R+S: MntTransDev + Ccy
        operation.setCvMntTnd(createMontant(row.getCell(19), row.getCell(20))); // Colonnes T+U: CvMntTnd + Ccy
        operation.setModTrans(new BigInteger(getStringValue(row.getCell(21)))); // Colonne V: ModTrans

        if (row.getCell(22) != null) operation.setNumAutBctSD(getStringValue(row.getCell(22))); // Colonne W: NumAutBctSD (optionnel)
        if (row.getCell(23) != null) operation.setDatAutBctSD(getStringValue(row.getCell(23))); // Colonne X: DatAutBctSD (optionnel)
        detail.setOperationTransf(operation);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuth =
                factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(24) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(24))); // Colonne Y: NumAutBCT (optionnel)
        if (row.getCell(25) != null) refAuth.setDatAutBCT(getStringValue(row.getCell(25))); // Colonne Z: DatAutBCT (optionnel)
        detail.setRefAutorisationBct(refAuth);

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