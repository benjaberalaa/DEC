package com.smi.declarations.services.TrService;

import com.smi.generated.tr_ms.*;
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
public class TrMsService {

    private static final String CODE_ANNEXE = "TR-MS";
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

        // Bénéficiaire
        Document.Transferts.Transfert.Details.Detail.Benificiaire benificiaire = factory.createDocumentTransfertsTransfertDetailsDetailBenificiaire();
        benificiaire.setCodeIdentifiant(getStringValue(row.getCell(4))); // E: CodeIdentifiant
        benificiaire.setNom(getStringValue(row.getCell(5))); // F: Nom
        benificiaire.setPrenom(getStringValue(row.getCell(6))); // G: Prenom
        detail.setBenificiaire(benificiaire);

        // Employeur
        Document.Transferts.Transfert.Details.Detail.Employeur employeur = factory.createDocumentTransfertsTransfertDetailsDetailEmployeur();
        employeur.setGroupClass(getStringValue(row.getCell(7))); // H: GroupClass
        employeur.setIdenEmploy(getStringValue(row.getCell(8))); // I: IdenEmploy
        employeur.setDenomEmploy(getStringValue(row.getCell(9))); // J: DenomEmploy
        detail.setEmployeur(employeur);

        // Mission/Stage
        Document.Transferts.Transfert.Details.Detail.MissionStage missionStage = factory.createDocumentTransfertsTransfertDetailsDetailMissionStage();
        if (row.getCell(10) != null) missionStage.setNatVoy(new BigInteger(getStringValue(row.getCell(10)))); // K: NatVoy (optionnel)
        if (row.getCell(11) != null) missionStage.setNumMissStage(getStringValue(row.getCell(11))); // L: NumMissStage (optionnel)
        missionStage.setDatOrdMissStage(getStringValue(row.getCell(12))); // M: DatOrdMissStage
        missionStage.setDatDebdMissStage(getStringValue(row.getCell(13))); // N: DatDebdMissStage
        missionStage.setDatFindMissStage(getStringValue(row.getCell(14))); // O: DatFindMissStage
        missionStage.setNbreJrsMissStage(getStringValue(row.getCell(15))); // P: NbreJrsMissStage
        missionStage.setPrisCharg(new BigInteger(getStringValue(row.getCell(16)))); // Q: PrisCharg

        if (row.getCell(17) != null) missionStage.setNatPrisCharg(getStringValue(row.getCell(17))); // R: NatPrisCharg (optionnel)

        missionStage.setTauxJr(getStringValue(row.getCell(18))); // S: TauxJr
        detail.setMissionStage(missionStage);

        // Opération Transfert
        Document.Transferts.Transfert.Details.Detail.OperationTransf operation = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operation.setModTrans(new BigInteger(getStringValue(row.getCell(19)))); // T: ModTrans
        operation.setDatTrans(getStringValue(row.getCell(20))); // U: DatTrans
        operation.setMntTransDev(createMontant(row.getCell(21), row.getCell(22))); // V+W: MntTransDev + Ccy
        operation.setCvMntTnd(createMontant(row.getCell(23), row.getCell(24))); // X+Y: CvMntTnd + Ccy

        // Les champs optionnels suivants ne sont pas dans l'Excel fourni mais sont dans le XSD
        // Ils peuvent être ajoutés si nécessaires

        detail.setOperationTransf(operation);

        // Les autres éléments (RefFichInfo, RefRetrocession, DecDouane, etc.) peuvent être ajoutés
        // selon les besoins et les colonnes supplémentaires dans l'Excel

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