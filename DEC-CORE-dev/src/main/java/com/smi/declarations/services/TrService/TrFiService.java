package com.smi.declarations.services.TrService;

import com.smi.generated.tr_fi_v2.*;
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
public class TrFiService {

    private static final String CODE_ANNEXE = "TR-FI";
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
        entete.setAnneDec(getStringValue(row.getCell(0))); // Colonne A: AnneDec
        entete.setMoisDec(getStringValue(row.getCell(1))); // Colonne B: MoisDec
        entete.setPeriodDec(new BigInteger( getStringValue(row.getCell(2)))); // Colonne C: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(3))); // Colonne D: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        // Informations de base
        detail.setAnneDec(getStringValue(row.getCell(4))); // Colonne E: AnneDec
        detail.setMoisDec(getStringValue(row.getCell(5))); // Colonne F: MoisDec
        detail.setPeriodDec(new BigInteger( getStringValue(row.getCell(6)))); // Colonne G: PeriodDec
        detail.setAgence(getStringValue(row.getCell(7))); // Colonne H: Agence
        detail.setCodTitre(getStringValue(row.getCell(8))); // Colonne I: CodTitre

        // Référence Fichier Info
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFichInfo =
                factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        if (row.getCell(9) != null) refFichInfo.setRefFichInfo(getStringValue(row.getCell(9))); // Colonne J: RefFichInfo (optionnel)
        if (row.getCell(10) != null) refFichInfo.setDatFichInfo(getStringValue(row.getCell(10))); // Colonne K: DatFichInfo (optionnel)
        detail.setRefFichInfo(refFichInfo);

        detail.setDatTrans(getStringValue(row.getCell(11))); // Colonne L: DatTrans

        // Demandeur
        Document.Transferts.Transfert.Details.Detail.Demandeur demandeur =
                factory.createDocumentTransfertsTransfertDetailsDetailDemandeur();
        demandeur.setTypeIdentifiant(getStringValue(row.getCell(12))); // Colonne M: TypeIdentifiant
        demandeur.setCodIdentifiant(getStringValue(row.getCell(13))); // Colonne N: CodIdentifiant

        if (row.getCell(14) != null) demandeur.setNom(getStringValue(row.getCell(14))); // Colonne O: Nom (optionnel)
        if (row.getCell(15) != null) demandeur.setPrenom(getStringValue(row.getCell(15))); // Colonne P: Prenom (optionnel)
        if (row.getCell(16) != null) demandeur.setDenomDem(getStringValue(row.getCell(16))); // Colonne Q: DenomDem (optionnel)
        detail.setDemandeur(demandeur);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf =
                factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operationTransf.setMntTransDev(createMontant(row.getCell(17), row.getCell(18))); // Colonnes R+S: MntTransDev + Ccy
        operationTransf.setCvMntTnd(createMontant(row.getCell(19), row.getCell(20))); // Colonnes T+U: CvMntTnd + Ccy
        operationTransf.setModReg(getStringValue(row.getCell(21))); // Colonne V: ModReg
        operationTransf.setCodReg(getStringValue(row.getCell(22))); // Colonne W: CodReg

        if (row.getCell(23) != null) operationTransf.setRefMsgSwift(getStringValue(row.getCell(23))); // Colonne X: RefMsgSwift (optionnel)

        operationTransf.setCodBenif(getStringValue(row.getCell(24))); // Colonne Y: CodBenif
        operationTransf.setNomPrenomDenomBenif(getStringValue(row.getCell(25))); // Colonne Z: NomPrenomDenomBenif
        operationTransf.setNatOp(getStringValue(row.getCell(26))); // Colonne AA: NatOp
        operationTransf.setCodPaysDest(getStringValue(row.getCell(27))); // Colonne AB: CodPaysDest

        detail.setOperationTransf(operationTransf);

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