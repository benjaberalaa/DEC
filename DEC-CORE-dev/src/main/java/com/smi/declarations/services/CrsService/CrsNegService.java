package com.smi.declarations.services.CrsService;

import com.smi.generated.crs_neg.*;
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
public class CrsNegService {

    private static final String CODE_ANNEXE = "CRS-NEG";
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

        // Titulaire (Colonnes B à I)
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeTitul(new BigInteger(getStringValue(row.getCell(1)))); // B: TypeTitul
        titulaire.setTypeIdentifiant(getStringValue(row.getCell(2))); // C: TypeIdentifiant
        titulaire.setCodeIdentifiant(getStringValue(row.getCell(3))); // D: CodeIdentifiant

        // Champs conditionnels selon TypeTitul
        if ("1".equals(getStringValue(row.getCell(1)))) { // Personne morale
            titulaire.setRaisSociale(getStringValue(row.getCell(7))); // H: RaisSociale
        } else { // Personne physique
            titulaire.setNom(getStringValue(row.getCell(4))); // E: Nom
            titulaire.setPrenom(getStringValue(row.getCell(5))); // F: Prenom
            titulaire.setNationalite(getStringValue(row.getCell(6))); // G: Nationalite
        }
        entete.setTitulaire(titulaire);

        // Référence Compte (Colonnes I à S)
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getStringValue(row.getCell(8))); // I: Rib
        refCompte.setDeviseCpte(getStringValue(row.getCell(9))); // J: DeviseCpte
        refCompte.setDateOuvCpte(getStringValue(row.getCell(10))); // K: DateOuvCpte
        refCompte.setEtatCpte(new BigInteger(getStringValue(row.getCell(11)))); // L: EtatCpte

        if (row.getCell(12) != null) refCompte.setDateclotureCpte(getStringValue(row.getCell(12))); // M: DateclotureCpte (optionnel)
        if (row.getCell(13) != null) refCompte.setDateGelCpte(getStringValue(row.getCell(13))); // N: DateGelCpte (optionnel)
        if (row.getCell(14) != null) refCompte.setNumAutBCT(getStringValue(row.getCell(14))); // O: NumAutBCT (optionnel)
        if (row.getCell(15) != null) refCompte.setDateAutBCT(getStringValue(row.getCell(15))); // P: DateAutBCT (optionnel)

        refCompte.setSoldDebMois(createMontant(row.getCell(16), row.getCell(17))); // Q+R: SoldDebMois + Ccy
        refCompte.setSoldfinMois(createMontant(row.getCell(18), row.getCell(19))); // S+T: SoldfinMois + Ccy

        entete.setRefCompte(refCompte);
        entete.setNbrEcritures(getStringValue(row.getCell(20))); // U: NbrEcritures
        extrait.setEntete(entete);

        // Détails (Colonnes V à AN)
        if (row.getCell(21) != null) {
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

            detail.setRib(getStringValue(row.getCell(21))); // V: Rib

            // Référence Opération
            Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
            refOperation.setNatMvtOp(getStringValue(row.getCell(22))); // W: NatMvtOp
            refOperation.setMntOpDev(createMontant(row.getCell(23), row.getCell(24))); // X+Y: MntOpDev + Ccy
            refOperation.setMntOpDin(createMontant(row.getCell(25), row.getCell(26))); // Z+AA: MntOpDin + Ccy
            refOperation.setDateMvt(getStringValue(row.getCell(27))); // AB: DateMvt
            refOperation.setTypeOp(getStringValue(row.getCell(28))); // AC: TypeOp

            if (row.getCell(29) != null) refOperation.setNatOp(getStringValue(row.getCell(29))); // AD: NatOp (optionnel)
            if (row.getCell(30) != null) refOperation.setCodMvt(getStringValue(row.getCell(30))); // AE: CodMvt (optionnel)
            if (row.getCell(31) != null) refOperation.setModReg(getStringValue(row.getCell(31))); // AF: ModReg (optionnel)
            if (row.getCell(32) != null) refOperation.setNumMsgeSwiftMvt(getStringValue(row.getCell(32))); // AG: NumMsgeSwiftMvt (optionnel)

            detail.setRefOperation(refOperation);

            // Référence Autorisation BCT
            Document.Extraits.Extrait.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentExtraitsExtraitDetailsDetailRefAutorisationBct();
            if (row.getCell(33) != null) refAuth.setNumAutBCT(getStringValue(row.getCell(33))); // AH: NumAutBCT (optionnel)
            if (row.getCell(34) != null) refAuth.setDateAutBCT(getStringValue(row.getCell(34))); // AI: DateAutBCT (optionnel)
            detail.setRefAutorisationBct(refAuth);

            detail.setNomFourniClient(getStringValue(row.getCell(35))); // AJ: NomFourniClient
            detail.setDenomBenif(getStringValue(row.getCell(36))); // AK: DenomBenif
            if (row.getCell(37) != null) detail.setPays(getStringValue(row.getCell(37))); // AL: Pays (optionnel)

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