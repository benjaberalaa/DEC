package com.smi.declarations.services.TrService;

import com.smi.generated.tr_domsc.*;
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
public class TrDomscService {

    private static final String CODE_ANNEXE = "TR-DOMSC";
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
        Document.Transferts.Transfert.Details.Detail.Benificiaire benificiaire = factory.createDocumentTransfertsTransfertDetailsDetailBenificiaire();
        benificiaire.setTypeIdentifiant(getStringValue(row.getCell(4))); // Colonne E: TypeIdentifiant
        benificiaire.setCodeIdentifiant(getStringValue(row.getCell(5))); // Colonne F: CodeIdentifiant
        benificiaire.setNom(getStringValue(row.getCell(6))); // Colonne G: Nom
        benificiaire.setPrenom(getStringValue(row.getCell(7))); // Colonne H: Prenom
        benificiaire.setNationalite(getStringValue(row.getCell(8))); // Colonne I: Nationalite
        benificiaire.setCategBenif(new BigInteger(getStringValue(row.getCell(9)))); // Colonne J: CategBenif
        detail.setBenificiaire(benificiaire);

        // Domiciliation Scolarité
        Document.Transferts.Transfert.Details.Detail.DomScolarite domScolarite = factory.createDocumentTransfertsTransfertDetailsDetailDomScolarite();
        domScolarite.setAnneScol(getStringValue(row.getCell(10))); // Colonne K: AnneScol
        domScolarite.setDatDebScol(getStringValue(row.getCell(11))); // Colonne L: DatDebScol
        domScolarite.setDatFinScol(getStringValue(row.getCell(12))); // Colonne M: DatFinScol
        domScolarite.setNumDomDosScol(getStringValue(row.getCell(13))); // Colonne N: NumDomDosScol
        domScolarite.setDatDomDosScol(getStringValue(row.getCell(14))); // Colonne O: DatDomDosScol
        domScolarite.setOuvRenDosScol(new BigInteger(getStringValue(row.getCell(15)))); // Colonne P: OuvRenDosScol
        domScolarite.setDatOuvRen(getStringValue(row.getCell(16))); // Colonne Q: DatOuvRen

        // Champs optionnels
        if (row.getCell(17) != null) domScolarite.setNumAutBCT(getStringValue(row.getCell(17))); // Colonne R: NumAutBCT
        if (row.getCell(18) != null) domScolarite.setDateAutBCT(getStringValue(row.getCell(18))); // Colonne S: DateAutBCT

        detail.setDomScolarite(domScolarite);

        // Bourse
        Document.Transferts.Transfert.Details.Detail.Bourse bourse = factory.createDocumentTransfertsTransfertDetailsDetailBourse();
        bourse.setBoursEtude(new BigInteger(getStringValue(row.getCell(19)))); // Colonne T: BoursEtude

        // Champs conditionnels
        if ("1".equals(getStringValue(row.getCell(19)))) { // Si bourse = OUI
            if (row.getCell(20) != null) bourse.setMntBoursDev((getStringValue(row.getCell(20)))); // Colonne U: MntBoursDev
            if (row.getCell(21) != null) bourse.setCodDevMntBourse(getStringValue(row.getCell(21))); // Colonne V: CodDevMntBourse
            if (row.getCell(22) != null) bourse.setMntBoursTnd(getStringValue(row.getCell(22))); // Colonne W: MntBoursTnd
            if (row.getCell(23) != null) bourse.setDureBours(getStringValue(row.getCell(23))); // Colonne X: DureBours
            if (row.getCell(24) != null) bourse.setDatDebBours(getStringValue(row.getCell(24))); // Colonne Y: DatDebBours
            if (row.getCell(25) != null) bourse.setDatFinBours(getStringValue(row.getCell(25))); // Colonne Z: DatFinBours
        }

        detail.setBourse(bourse);

        // Référence Clôture Dossier Scolarité
        Document.Transferts.Transfert.Details.Detail.RefClotureDosScol refCloture = factory.createDocumentTransfertsTransfertDetailsDetailRefClotureDosScol();
        if (row.getCell(26) != null) refCloture.setDatClotDosScolIat(getStringValue(row.getCell(26))); // Colonne AA: DatClotDosScolIat
        if (row.getCell(27) != null) refCloture.setCodIATClot(getStringValue(row.getCell(27))); // Colonne AB: CodIATClot
        detail.setRefClotureDosScol(refCloture);

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