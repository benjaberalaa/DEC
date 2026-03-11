package com.smi.declarations.services.CrsService;

import com.smi.generated.crs_e_tndcve_endcv_ttee_dev.*;
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
public class CrsETndcveEndcvTteeDevService {

    private static final String CODE_ANNEXE = "CRS-ETNDCVE";
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
        entete.setNatCpteRegl(getStringValue(row.getCell(1))); // Colonne B: NatCpteRegl

        // Titulaire (Colonnes C à H)
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeIdentifiant(getStringValue(row.getCell(2))); // C: TypeIdentifiant
        titulaire.setCodeIdentifiant(getStringValue(row.getCell(3))); // D: CodeIdentifiant

        if (row.getCell(4) != null) titulaire.setNom(getStringValue(row.getCell(4))); // E: Nom (optionnel)
        if (row.getCell(5) != null) titulaire.setPrenom(getStringValue(row.getCell(5))); // F: Prenom (optionnel)
        if (row.getCell(6) != null) titulaire.setRaisSociale(getStringValue(row.getCell(6))); // G: RaisSociale (optionnel)

        titulaire.setNationalite(getStringValue(row.getCell(7))); // H: Nationalite
        entete.setTitulaire(titulaire);

        // Référence Compte (Colonnes I à P)
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getStringValue(row.getCell(8))); // I: Rib
        refCompte.setDeviseCpte(getStringValue(row.getCell(9))); // J: DeviseCpte
        refCompte.setDateOuvCpte(getStringValue(row.getCell(10))); // K: DateOuvCpte
        refCompte.setEtatCpte(BigInteger.valueOf(new BigDecimal(getStringValue(row.getCell(11))).intValue())); // L: EtatCpte

        if (row.getCell(12) != null) refCompte.setDateclotureCpte(getStringValue(row.getCell(12))); // M: DateclotureCpte (optionnel)
        if (row.getCell(13) != null) refCompte.setDateGelCpte(getStringValue(row.getCell(13))); // N: DateGelCpte (optionnel)

        refCompte.setSoldDebMois(createMontant(row.getCell(14), row.getCell(15))); // O+P: SoldDebMois + Ccy
        refCompte.setSoldfinMois(createMontant(row.getCell(16), row.getCell(17))); // Q+R: SoldfinMois + Ccy

        entete.setRefCompte(refCompte);
        entete.setNbrEcritures(getStringValue(row.getCell(18))); // S: NbrEcritures
        extrait.setEntete(entete);

        // Détails (Colonnes T à AG)
        if (row.getCell(19) != null) {
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

            detail.setRib(getStringValue(row.getCell(19))); // T: Rib

            // Référence Opération
            Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
            refOperation.setNatMvtOp(getStringValue(row.getCell(20))); // U: NatMvtOp
            refOperation.setMntOpDev(createMontant(row.getCell(21), row.getCell(22))); // V+W: MntOpDev + Ccy
            refOperation.setMntOpDin(createMontant(row.getCell(23), row.getCell(24))); // X+Y: MntOpDin + Ccy
            refOperation.setDateMvt(getStringValue(row.getCell(25))); // Z: DateMvt

            if (row.getCell(26) != null) refOperation.setCodMvt(getStringValue(row.getCell(26))); // AA: CodMvt (optionnel)
            if (row.getCell(27) != null) refOperation.setNatOp(getStringValue(row.getCell(27))); // AB: NatOp (optionnel)
            if (row.getCell(28) != null) refOperation.setModReg(String.valueOf(new BigDecimal(getStringValue(row.getCell(28))).intValue())); // AC: ModReg (optionnel)
            if (row.getCell(29) != null) refOperation.setNumMsgeSwiftMvt(getStringValue(row.getCell(29))); // AD: NumMsgeSwiftMvt (optionnel)

            detail.setRefOperation(refOperation);

            // Référence Autorisation BCT
            Document.Extraits.Extrait.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentExtraitsExtraitDetailsDetailRefAutorisationBct();
            if (row.getCell(30) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(30))); // AE: NumAutBCT (optionnel)
            if (row.getCell(31) != null) refAuth.setDateAutBCT(getStringValue(row.getCell(31))); // AF: DateAutBCT (optionnel)
            detail.setRefAutorisationBct(refAuth);

            detail.setDenomBenif(getStringValue(row.getCell(32))); // AG: DenomBenif
            if (row.getCell(33) != null) detail.setPays(getStringValue(row.getCell(33))); // AH: Pays (optionnel)

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
        entete.setPeriodDec(new SimpleDateFormat("MMyyyy").format(new Date()));
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