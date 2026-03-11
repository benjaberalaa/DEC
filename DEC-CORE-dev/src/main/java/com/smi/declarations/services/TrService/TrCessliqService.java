package com.smi.declarations.services.TrService;

import com.smi.generated.tr_cessliq_v2.*;
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
public class TrCessliqService {

    private static final String CODE_ANNEXE = "TR-CESSLIQ";
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
        entete.setPeriodDec(getStringValue(row.getCell(1))); // Colonne B: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(2))); // Colonne C: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        // Informations de base
        detail.setAnneDec(getStringValue(row.getCell(3))); // Colonne D: AnneDec
        detail.setPeriodDec(getStringValue(row.getCell(4))); // Colonne E: PeriodDec
        detail.setAgence(getStringValue(row.getCell(5))); // Colonne F: Agence
        detail.setLibOp(getStringValue(row.getCell(6))); // Colonne G: LibOp

        // Référence Société
        Document.Transferts.Transfert.Details.Detail.RefSociete refSociete = factory.createDocumentTransfertsTransfertDetailsDetailRefSociete();
        refSociete.setMatFiscalSoc(getStringValue(row.getCell(7))); // Colonne H: MatFiscalSoc
        refSociete.setRaisSocialSoc(getStringValue(row.getCell(8))); // Colonne I: RaisSocialSoc
        detail.setRefSociete(refSociete);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operationTransf.setStatupPlanChange(getStringValue(row.getCell(9))); // Colonne J: StatupPlanChange
        operationTransf.setAnneExercice(getStringValue(row.getCell(10))); // Colonne K: AnneExercice
        operationTransf.setDatTrans(getStringValue(row.getCell(11))); // Colonne L: DatTrans
        operationTransf.setMntTransDev(createMontant(row.getCell(12), row.getCell(13))); // Colonnes M+N: MntTransDev + Ccy
        operationTransf.setCvMntTnd(createMontant(row.getCell(14), row.getCell(15))); // Colonnes O+P: CvMntTnd + Ccy
        operationTransf.setModReg(getStringValue(row.getCell(16))); // Colonne Q: ModReg
        operationTransf.setMoyenReg(getStringValue(row.getCell(17))); // Colonne R: MoyenReg
        detail.setOperationTransf(operationTransf);

        // Bénéficiaire
        Document.Transferts.Transfert.Details.Detail.Benifiicaire benifiicaire = factory.createDocumentTransfertsTransfertDetailsDetailBenifiicaire();
        benifiicaire.setNatBenif(getStringValue(row.getCell(18))); // Colonne S: NatBenif

        if (row.getCell(19) != null) benifiicaire.setNom(getStringValue(row.getCell(19))); // Colonne T: Nom (optionnel)
        if (row.getCell(20) != null) benifiicaire.setPrenom(getStringValue(row.getCell(20))); // Colonne U: Prenom (optionnel)
        if (row.getCell(21) != null) benifiicaire.setRaisSocial(getStringValue(row.getCell(21))); // Colonne V: RaisSocial (optionnel)
        if (row.getCell(22) != null) benifiicaire.setNationalite(getStringValue(row.getCell(22))); // Colonne W: Nationalite (optionnel)

        benifiicaire.setIdSysBenifPlatforme(getStringValue(row.getCell(23))); // Colonne X: IdSysBenifPlatforme
        detail.setBenifiicaire(benifiicaire);

        // Autres champs
        detail.setNatOp(getStringValue(row.getCell(24))); // Colonne Y: NatOp

        // Référence Fichier Info
        Document.Transferts.Transfert.Details.Detail.RefFichInfo refFichInfo = factory.createDocumentTransfertsTransfertDetailsDetailRefFichInfo();
        if (row.getCell(25) != null) refFichInfo.setNumFichInfo(getStringValue(row.getCell(25))); // Colonne Z: NumFichInfo (optionnel)
        if (row.getCell(26) != null) refFichInfo.setDatFichInfo(getStringValue(row.getCell(26))); // Colonne AA: DatFichInfo (optionnel)
        detail.setRefFichInfo(refFichInfo);

        if (row.getCell(27) != null) detail.setCodSwift(getStringValue(row.getCell(27))); // Colonne AB: CodSwift (optionnel)
        detail.setCodPaysDest(getStringValue(row.getCell(28))); // Colonne AC: CodPaysDest

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