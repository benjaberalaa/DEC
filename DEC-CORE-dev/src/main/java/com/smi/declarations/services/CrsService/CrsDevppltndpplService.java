package com.smi.declarations.services.CrsService;

import com.smi.generated.crs_devppltndppl.*;
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
public class CrsDevppltndpplService {

    private static final String CODE_ANNEXE = "CRS-003";
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

    public Document processExcelFile(MultipartFile file) throws IOException {
        try (InputStream is = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            ObjectFactory factory = new ObjectFactory();
            Document document = factory.createDocument();

            // Entête document
            Document.EnteteDoc enteteDoc = factory.createDocumentEnteteDoc();
            enteteDoc.setCodeIAT("01"); // Valeur par défaut
            enteteDoc.setDateDec(DATE_FORMAT.format(new Date()));
            enteteDoc.setCodeAnnexe(CODE_ANNEXE);
            enteteDoc.setPeriodDec(new SimpleDateFormat("MMyyyy").format(new Date()));
            document.setEnteteDoc(enteteDoc);

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
        entete.setAgenceTrsf(getStringValue(row.getCell(0))); // Colonne A: AgenceTrsf
        entete.setNatCpteRegl(getStringValue(row.getCell(1))); // Colonne B: NatCpteRegl

        // Titulaire (Colonnes C à G)
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeIdentifiant(getStringValue(row.getCell(2))); // C: TypeIdentifiant
        titulaire.setCodeIdentifiant(getStringValue(row.getCell(3))); // D: CodeIdentifiant
        titulaire.setNom(getStringValue(row.getCell(4))); // E: Nom
        titulaire.setPrenom(getStringValue(row.getCell(5))); // F: Prenom
        titulaire.setNationalite(getStringValue(row.getCell(6))); // G: Nationalite
        entete.setTitulaire(titulaire);

        // Référence Compte (Colonnes H à O)
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getStringValue(row.getCell(7))); // H: Rib
        refCompte.setDeviseCpte(getStringValue(row.getCell(8))); // I: DeviseCpte
        refCompte.setEtatCpte(BigInteger.valueOf(new BigDecimal(getStringValue(row.getCell(9))).intValue())); // J: EtatCpte
        refCompte.setDateOuvCpte(getStringValue(row.getCell(10))); // K: DateOuvCpte
        if (row.getCell(11) != null) refCompte.setDateclotureCpte(getStringValue(row.getCell(11))); // L: DateclotureCpte (optionnel)
        if (row.getCell(12) != null) refCompte.setDateGelCpte(getStringValue(row.getCell(12))); // M: DateGelCpte (optionnel)
        refCompte.setSoldDebMois(createMontant(row.getCell(13), row.getCell(14))); // N+O: SoldDebMois + Ccy
        refCompte.setSoldfinMois(createMontant(row.getCell(15), row.getCell(16))); // P+Q: SoldfinMois + Ccy
        entete.setRefCompte(refCompte);

        entete.setNbrEcritures(getStringValue(row.getCell(17))); // R: NbrEcritures
        extrait.setEntete(entete);

        // Détails (si présents)
        if (row.getCell(18) != null) {
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

            // Mapping des colonnes 18 à 36...
            // (Implémentation similaire à l'exemple précédent)

            details.getDetail().add(detail);
            extrait.setDetails(details);
        }

        return extrait;
    }

    // Méthodes utilitaires identiques à précédemment...
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