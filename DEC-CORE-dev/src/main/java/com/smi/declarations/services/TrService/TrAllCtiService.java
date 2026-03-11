package com.smi.declarations.services.TrService;

import com.smi.generated.tr_all_cti.*;
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
public class TrAllCtiService {

    private static final String CODE_ANNEXE = "TR-ALL-CTI";
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
        benef.setNatBenif(new BigInteger(getStringValue(row.getCell(4)))); // Colonne E: NatBenif
        benef.setTypeIdentifiant(getStringValue(row.getCell(5))); // Colonne F: TypeIdentifiant
        benef.setCodIdentifiant(getStringValue(row.getCell(6))); // Colonne G: CodIdentifiant

        if (row.getCell(7) != null) benef.setRaisSocial(getStringValue(row.getCell(7))); // Colonne H: RaisSocial (optionnel)
        if (row.getCell(8) != null) benef.setNom(getStringValue(row.getCell(8))); // Colonne I: Nom (optionnel)
        if (row.getCell(9) != null) benef.setPrenom(getStringValue(row.getCell(9))); // Colonne J: Prenom (optionnel)

        detail.setBenificiaire(benef);

        // Champs optionnels
        if (row.getCell(10) != null) detail.setPPObtDiplomBac(getStringValue(row.getCell(10))); // Colonne K: PPObtDiplomBac (optionnel)
        if (row.getCell(11) != null) detail.setSocLabStratup(getStringValue(row.getCell(11))); // Colonne L: SocLabStratup (optionnel)

        // Référence Montant Allocation
        Document.Transferts.Transfert.Details.Detail.RefMntAllocation refMntAlloc = factory.createDocumentTransfertsTransfertDetailsDetailRefMntAllocation();
        refMntAlloc.setMntInsAllocDin(createMontant(row.getCell(12), row.getCell(13))); // Colonnes M+N: MntInsAllocDin + Ccy
        refMntAlloc.setDatAlimCart(getStringValue(row.getCell(14))); // Colonne O: DatAlimCart
        refMntAlloc.setMntAllocTrsfDin(createMontant(row.getCell(15), row.getCell(16))); // Colonnes P+Q: MntAllocTrsfDin + Ccy
        refMntAlloc.setDatTrans(getStringValue(row.getCell(17))); // Colonne R: DatTrans
        refMntAlloc.setMntRapaCartDin(createMontant(row.getCell(18), row.getCell(19))); // Colonnes S+T: MntRapaCartDin + Ccy
        detail.setRefMntAllocation(refMntAlloc);

        // Référence Autorisation BCT
        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        if (row.getCell(20) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(20))); // Colonne U: NumAutBCT (optionnel)
        if (row.getCell(21) != null) refAuth.setDatAutBCT(getStringValue(row.getCell(21))); // Colonne V: DatAutBCT (optionnel)
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