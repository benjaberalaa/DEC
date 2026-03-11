package com.smi.declarations.services.TrService;

import com.smi.generated.tr_retail.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

@Service
public class TrRetallService {

    private static final String CODE_ANNEXE = "TR-RETALL";
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
        entete.setPeriodDec(getStringValue(row.getCell(0))); // Colonne A: PeriodDec
        entete.setNbrEcritures(getStringValue(row.getCell(1))); // Colonne B: NbrEcritures
        transfert.setEntete(entete);

        // Détails
        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setPeriodDec(getStringValue(row.getCell(2))); // Colonne C: PeriodDec
        detail.setAgence(getStringValue(row.getCell(3))); // Colonne D: Agence

        // Bénéficiaire
        Document.Transferts.Transfert.Details.Detail.Benificiaire benef = factory.createDocumentTransfertsTransfertDetailsDetailBenificiaire();
        benef.setCategBenif(new BigInteger( getStringValue(row.getCell(4)))); // Colonne E: CategBenif
        benef.setAge(getStringValue(row.getCell(5))); // Colonne F: Age
        benef.setTypeIdentifiant(getStringValue(row.getCell(6))); // Colonne G: TypeIdentifiant
        benef.setCodeIdentifiant(getStringValue(row.getCell(7))); // Colonne H: CodeIdentifiant
        benef.setNom(getStringValue(row.getCell(8))); // Colonne I: Nom
        benef.setPrenom(getStringValue(row.getCell(9))); // Colonne J: Prenom
        benef.setNationalite(getStringValue(row.getCell(10))); // Colonne K: Nationalite
        detail.setBenificiaire(benef);

        // Référence Rétrocession
        Document.Transferts.Transfert.Details.Detail.RefRetrocession refRetro = factory.createDocumentTransfertsTransfertDetailsDetailRefRetrocession();
        refRetro.setNatOp(getStringValue(row.getCell(11))); // Colonne L: NatOp
        refRetro.setCadRetro(new BigInteger( getStringValue(row.getCell(12)))); // Colonne M: CadRetro
        refRetro.setDatRetro(getStringValue(row.getCell(13))); // Colonne N: DatRetro

        if (row.getCell(14) != null) refRetro.setMntRetroDev(getStringValue(row.getCell(14))); // Colonne O: MntRetroDev (optionnel)
        if (row.getCell(15) != null) refRetro.setDevMntRetro(getStringValue(row.getCell(15))); // Colonne P: DevMntRetro (optionnel)
        if (row.getCell(16) != null) refRetro.setCVMntRetro(getStringValue(row.getCell(16))); // Colonne Q: CVMntRetro (optionnel)

        refRetro.setNumAutBctSD(getStringValue(row.getCell(17))); // Colonne R: NumAutBctSD
        refRetro.setDatAutBctSD(getStringValue(row.getCell(18))); // Colonne S: DatAutBctSD

        if (row.getCell(19) != null) refRetro.setDatRetVoy(getStringValue(row.getCell(19))); // Colonne T: DatRetVoy (optionnel)
        detail.setRefRetrocession(refRetro);

        // Déclaration Douane
        Document.Transferts.Transfert.Details.Detail.DecDouane decDouane = factory.createDocumentTransfertsTransfertDetailsDetailDecDouane();
        if (row.getCell(20) != null) decDouane.setNumDecD(getStringValue(row.getCell(20))); // Colonne U: NumDecD (optionnel)
        if (row.getCell(21) != null) decDouane.setDatDecD(getStringValue(row.getCell(21))); // Colonne V: DatDecD (optionnel)
        detail.setDecDouane(decDouane);

        // Date Délivrance Allocation Touristique
        detail.setDatDelivAllocTouris(getStringValue(row.getCell(22))); // Colonne W: DatDelivAllocTouris

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