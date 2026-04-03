package com.smi.declarations.services.CrsService;
import com.smi.generated.crs_all_tndcv.*;
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
public class CrsAllTndCvService {

    private static final String CODE_ANNEXE = "CRS-ALL-TND-CV";
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
            Document.Extraits extraits = factory.createDocumentExtraits();
            Iterator<Row> rowIterator = sheet.iterator();

            // Sauter l'en-tête Excel
            if (rowIterator.hasNext()) rowIterator.next();

            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                extraits.getExtrait().add(buildExtraitFromRow(factory, row));
            }

            document.setExtraits(extraits);
            return document;
        }
    }

    private Document.Extraits.Extrait buildExtraitFromRow(ObjectFactory factory, Row row) {
        Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();

        // Entête
        Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();
        entete.setAgenceDom(getStringValue(row.getCell(0))); // Colonne A: AgenceDom

        // Titulaire (Colonnes B à F)
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeIdentifiant(getStringValue(row.getCell(1))); // B: TypeIdentifiant
        titulaire.setCodeIdentifiant(getStringValue(row.getCell(2))); // C: CodeIdentifiant
        titulaire.setNom(getStringValue(row.getCell(3))); // D: Nom
        titulaire.setPrenom(getStringValue(row.getCell(4))); // E: Prenom
        titulaire.setNationalite(getStringValue(row.getCell(5))); // F: Nationalite
        entete.setTitulaire(titulaire);

        // Référence Compte (Colonnes G à O)
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getStringValue(row.getCell(6))); // G: Rib
        refCompte.setDateOuvCpte(getStringValue(row.getCell(7))); // H: DateOuvCpte
        refCompte.setEtatCpte(BigInteger.valueOf(new BigDecimal(getStringValue(row.getCell(8))).intValue())); // I: EtatCpte

        if (row.getCell(9) != null) refCompte.setDateclotureCpte(getStringValue(row.getCell(9))); // J: DateclotureCpte (optionnel)
        if (row.getCell(10) != null) refCompte.setDateGelCpte(getStringValue(row.getCell(10))); // K: DateGelCpte (optionnel)

        refCompte.setSoldDebMois(createMontant(row.getCell(11), row.getCell(12))); // L+M: SoldDebMois + Ccy
        refCompte.setSoldfinMois(createMontant(row.getCell(13), row.getCell(14))); // N+O: SoldfinMois + Ccy

        entete.setRefCompte(refCompte);
        entete.setNbrEcritures(getStringValue(row.getCell(15))); // P: NbrEcritures
        extrait.setEntete(entete);

        // Détails (Colonnes Q à AD)
        if (row.getCell(16) != null) {
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

            detail.setRib(getStringValue(row.getCell(16))); // Q: Rib

            // Référence Opération
            Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
            refOperation.setNatMvtOp(getStringValue(row.getCell(17))); // R: NatMvtOp
            refOperation.setMntOpDev(createMontant(row.getCell(18), row.getCell(19))); // S+T: MntOpDev + Ccy
            refOperation.setMntOpDin(createMontant(row.getCell(20), row.getCell(21))); // U+V: MntOpDin + Ccy
            refOperation.setDateRetVoy(getStringValue(row.getCell(22))); // W: DateRetVoy
            refOperation.setDateMvt(getStringValue(row.getCell(23))); // X: DateMvt

            if (row.getCell(24) != null) refOperation.setCodMvt(getStringValue(row.getCell(24))); // Y: CodMvt (optionnel)
            if (row.getCell(25) != null) refOperation.setNatOp(getStringValue(row.getCell(25))); // Z: NatOp (optionnel)
            if (row.getCell(26) != null) refOperation.setModReg(String.valueOf(new BigDecimal(getStringValue(row.getCell(26))).intValue())); // AA: ModReg (optionnel)
            if (row.getCell(27) != null) refOperation.setNumMsgeSwiftMvt(getStringValue(row.getCell(27))); // AB: NumMsgeSwiftMvt (optionnel)

            detail.setRefOperation(refOperation);

            // Référence Autorisation BCT
            Document.Extraits.Extrait.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentExtraitsExtraitDetailsDetailRefAutorisationBct();
            if (row.getCell(28) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(28))); // AC: NumAutBCT (optionnel)
            if (row.getCell(29) != null) refAuth.setDateAutBCT(getStringValue(row.getCell(29))); // AD: DateAutBCT (optionnel)
            detail.setRefAutorisationBct(refAuth);

            detail.setDenomBenif(getStringValue(row.getCell(30))); // AE: DenomBenif
            if (row.getCell(31) != null) detail.setPays(getStringValue(row.getCell(31))); // AF: Pays (optionnel)

            details.getDetail().add(detail);
            extrait.setDetails(details);
        }

        return extrait;
    }

    private void buildEnteteDoc(Document doc) {
        Document.EnteteDoc entete = new Document.EnteteDoc();
        entete.setCodeIAT("01"); // Valeur par défaut
        entete.setDateDec(DATE_FORMAT.format(new Date()));
        entete.setCodeAnnexe(CODE_ANNEXE);
        entete.setAnneDec(new SimpleDateFormat("yyyy").format(new Date()));
        entete.setPeriodDec(new BigInteger( String.valueOf((Integer.parseInt(new SimpleDateFormat("MM").format(new Date())) / 3 + 1)))); // Calcul du trimestre
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