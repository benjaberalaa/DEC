package com.smi.declarations.services.TrService;

import com.smi.generated.tr_fp.*;
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
public class TrFpService {

    private static final String CODE_ANNEXE = "TR-FP";
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
        entete.setAnneDec(getStringValue(row.getCell(0))); // Colonne A: AnneDec
        entete.setPeriodDec(getQuarterAsBigInteger(row.getCell(1))); // Colonne B: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(2))); // Colonne C: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setAnneDec(getStringValue(row.getCell(3))); // Colonne D: AnneDec
        detail.setPeriodDec(getQuarterAsBigInteger(row.getCell(4))); // Colonne E: PeriodDec
        detail.setAgence(getStringValue(row.getCell(5))); // Colonne F: Agence

        // Bénéficiaire
        Document.Transferts.Transfert.Details.Detail.Benificiaire benef = factory.createDocumentTransfertsTransfertDetailsDetailBenificiaire();
        benef.setTypeIdentifiant(getStringValue(row.getCell(6))); // Colonne G: TypeIdentifiant
        benef.setCodIdentifiant(getStringValue(row.getCell(7))); // Colonne H: CodIdentifiant
        benef.setNom(getStringValue(row.getCell(8))); // Colonne I: Nom
        benef.setPrenom(getStringValue(row.getCell(9))); // Colonne J: Prenom
        benef.setNationalite(getStringValue(row.getCell(10))); // Colonne K: Nationalite
        detail.setBenificiaire(benef);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operation = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        if (row.getCell(11) != null) operation.setNiveauForm(getStringValue(row.getCell(11))); // Colonne L: NiveauForm (optionnel)
        operation.setAnnScol(getStringValue(row.getCell(12))); // Colonne M: AnnScol
        operation.setTypAlloc(new BigInteger( getStringValue(row.getCell(13)))); // Colonne N: TypAlloc
        operation.setNumDomDosForm(getStringValue(row.getCell(14))); // Colonne O: NumDomDosForm
        operation.setDatDomDosForm(getStringValue(row.getCell(15))); // Colonne P: DatDomDosForm

        if (row.getCell(16) != null) operation.setBoursForm(getStringValue(row.getCell(16))); // Colonne Q: BoursForm (optionnel)
        if (row.getCell(17) != null) operation.setMntBoursDev(getStringValue(row.getCell(17))); // Colonne R: MntBoursDev (optionnel)
        if (row.getCell(18) != null) operation.setDevMntBours(getStringValue(row.getCell(18))); // Colonne S: DevMntBours (optionnel)

        operation.setMntAllocDev(createMontant(row.getCell(19), row.getCell(20))); // Colonnes T+U: MntAllocDev + Ccy
        operation.setMntTrans(createMontant(row.getCell(21), row.getCell(22))); // Colonnes V+W: MntTrans + Ccy
        operation.setCvTndMntGlob(createMontant(row.getCell(23), row.getCell(24))); // Colonnes X+Y: CvTndMntGlob + Ccy
        operation.setDatTrans(getStringValue(row.getCell(25))); // Colonne Z: DatTrans
        operation.setModTrasn(new BigInteger( getStringValue(row.getCell(26)))); // Colonne AA: ModTrasn
        detail.setOperationTransf(operation);

        // Référence Fiche Info
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFicheInfo = factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        refFicheInfo.setNumFichInfo(getStringValue(row.getCell(27))); // Colonne AB: NumFichInfo
        refFicheInfo.setDatFichInfo(getStringValue(row.getCell(28))); // Colonne AC: DatFichInfo
        detail.setRefFichInfo(refFicheInfo);

        // Référence Autorisation Sortie Devises
        Document.Transferts.Transfert.Details.Detail.RefAutSortDev refAutSortDev = factory.createDocumentTransfertsTransfertDetailsDetailRefAutSortDev();
        if (row.getCell(29) != null) refAutSortDev.setNumAutBctSD(getStringValue(row.getCell(29))); // Colonne AD: NumAutBctSD (optionnel)
        if (row.getCell(30) != null) refAutSortDev.setDatAutBctSD(getStringValue(row.getCell(30))); // Colonne AE: DatAutBctSD (optionnel)
        detail.setRefAutSortDev(refAutSortDev);

        // Référence Formation
        Document.Transferts.Transfert.Details.Detail.RefFormation refFormation = factory.createDocumentTransfertsTransfertDetailsDetailRefFormation();
        refFormation.setDureForm(getStringValue(row.getCell(31))); // Colonne AF: DureForm
        refFormation.setDatDebBenifForm(getStringValue(row.getCell(32))); // Colonne AG: DatDebBenifForm
        refFormation.setDatFinBenifForm(getStringValue(row.getCell(33))); // Colonne AH: DatFinBenifForm
        if (row.getCell(34) != null) refFormation.setCodPaysForm(getStringValue(row.getCell(34))); // Colonne AI: CodPaysForm (optionnel)
        refFormation.setNatOp(getStringValue(row.getCell(35))); // Colonne AJ: NatOp
        detail.setRefFormation(refFormation);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuthBct = factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(36) != null) refAuthBct.setNumAutBCT(getStringValue(row.getCell(36))); // Colonne AK: NumAutBCT (optionnel)
        if (row.getCell(37) != null) refAuthBct.setDatAutBCT(getStringValue(row.getCell(37))); // Colonne AL: DatAutBCT (optionnel)
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

    private BigInteger getQuarterAsBigInteger(Cell cell) {
        String quarterStr = getStringValue(cell);
        return new BigInteger(quarterStr);
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