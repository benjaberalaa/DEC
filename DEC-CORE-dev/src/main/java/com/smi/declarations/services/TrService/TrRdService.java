package com.smi.declarations.services.TrService;

import com.smi.generated.majc_tr_rd_v3.*;
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
public class TrRdService {

    private static final String CODE_ANNEXE = "TR-RD";
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
        entete.setJrDec(getStringValue(row.getCell(0))); // Colonne A: JrDec
        entete.setNbrEcritures(getStringValue(row.getCell(1))); // Colonne B: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        // Informations de base
        detail.setJrDec(getStringValue(row.getCell(2))); // Colonne C: JrDec
        detail.setAgence(getStringValue(row.getCell(3))); // Colonne D: Agence
        detail.setCodTitre(getStringValue(row.getCell(4))); // Colonne E: CodTitre

        // Référence Identification
        Document.Transferts.Transfert.Details.Detail.RefIdentification refIdentification =
                factory.createDocumentTransfertsTransfertDetailsDetailRefIdentification();
        if (row.getCell(5) != null) refIdentification.setRefIden(getStringValue(row.getCell(5))); // Colonne F: RefIden (optionnel)
        if (row.getCell(6) != null) refIdentification.setDatRefIden(getStringValue(row.getCell(6))); // Colonne G: DatRefIden (optionnel)
        detail.setRefIdentification(refIdentification);

        detail.setCodRD(getStringValue(row.getCell(7))); // Colonne H: CodRD

        // Opérateur
        Document.Transferts.Transfert.Details.Detail.Operateur operateur =
                factory.createDocumentTransfertsTransfertDetailsDetailOperateur();
        operateur.setTypOp(getStringValue(row.getCell(8))); // Colonne I: TypOp
        operateur.setCodOp(getStringValue(row.getCell(9))); // Colonne J: CodOp

        if (row.getCell(10) != null) operateur.setNom(getStringValue(row.getCell(10))); // Colonne K: Nom (optionnel)
        if (row.getCell(11) != null) operateur.setPrenom(getStringValue(row.getCell(11))); // Colonne L: Prenom (optionnel)
        if (row.getCell(12) != null) operateur.setDenomOp(getStringValue(row.getCell(12))); // Colonne M: DenomOp (optionnel)
        detail.setOperateur(operateur);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf =
                factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operationTransf.setMntTransDev(createMontant(row.getCell(13), row.getCell(14))); // Colonnes N+O: MntTransDev + Ccy
        operationTransf.setCvMntTnd(createMontant(row.getCell(15), row.getCell(16))); // Colonnes P+Q: CvMntTnd + Ccy
        operationTransf.setDatValOp(getStringValue(row.getCell(17))); // Colonne R: DatValOp

        if (row.getCell(18) != null) operationTransf.setRib(getStringValue(row.getCell(18))); // Colonne S: Rib (optionnel)
        if (row.getCell(19) != null) operationTransf.setNatCpte(getStringValue(row.getCell(19))); // Colonne T: NatCpte (optionnel)

        operationTransf.setNatOp(getStringValue(row.getCell(20))); // Colonne U: NatOp

        if (row.getCell(21) != null) operationTransf.setCodBenif(getStringValue(row.getCell(21))); // Colonne V: CodBenif (optionnel)
        if (row.getCell(22) != null) operationTransf.setNomPrenomDenomBenif(getStringValue(row.getCell(22))); // Colonne W: NomPrenomDenomBenif (optionnel)

        operationTransf.setCodPaysDest(getStringValue(row.getCell(23))); // Colonne X: CodPaysDest
        detail.setOperationTransf(operationTransf);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuth =
                factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(24) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(24))); // Colonne Y: NumAutBCT (optionnel)
        if (row.getCell(25) != null) refAuth.setDatAutBCT(getStringValue(row.getCell(25))); // Colonne Z: DatAutBCT (optionnel)
        detail.setRefAutorisationBct(refAuth);

        if (row.getCell(26) != null) detail.setCodSwift(getStringValue(row.getCell(26))); // Colonne AA: CodSwift (optionnel)

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