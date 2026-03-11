package com.smi.declarations.services.CrsService;

import com.smi.generated.crs_ppr.Document;
import com.smi.generated.crs_ppr.ObjectFactory;
import com.smi.generated.crs_ppr.TMontant;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class CrsPprService {

    private static final Logger logger = LoggerFactory.getLogger(CrsPprService.class);
    private final ObjectFactory factory = new ObjectFactory();

    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Document document = factory.createDocument();
        document.setEnteteDoc(factory.createDocumentEnteteDoc());
        document.setExtraits(factory.createDocumentExtraits());

        // Entête global - Version sécurisée
        Document.EnteteDoc header = document.getEnteteDoc();
        header.setCodeIAT("23");
        header.setDateDec(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
        header.setCodeAnnexe("CRS-009");

        // Correction 1: Vérification de la ligne d'en-tête
        Row headerRow = sheet.getRow(0); // Supposant que l'en-tête est sur la première ligne
        if(headerRow != null) {
        } else {
            throw new IllegalArgumentException("Fichier Excel mal formaté - En-tête manquant");
        }

        // Correction 2: Itération sécurisée
        for(int i = 1; i <= sheet.getLastRowNum(); i++) { // Commence à la ligne 1
            Row row = sheet.getRow(i);
            if(row == null || isRowEmpty(row)) continue;

            Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();
            header.setPeriodDec(getCellStringValue(row.getCell(0)));

            buildEntete(row, extrait);

            buildDetails(row, extrait);

            document.getExtraits().getExtrait().add(extrait);
        }

        workbook.close();
        return document;
    }

    private void buildEntete(Row row, Document.Extraits.Extrait extrait) {
        Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();

        // AgenceDom

        entete.setAgenceDom(getCellStringValue(row.getCell(1)));

        // Titulaire
        Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
        titulaire.setTypeIdentifiant(getCellStringValue(row.getCell(2)));
        titulaire.setCodeIdentifiant(getCellStringValue(row.getCell(3)));
        titulaire.setNom(getCellStringValue(row.getCell(4)));
        titulaire.setPrenom(getCellStringValue(row.getCell(5)));
        titulaire.setNationalite(getCellStringValue(row.getCell(6)));
        entete.setTitulaire(titulaire);

        // RefCompte
        Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
        refCompte.setRib(getCellStringValue(row.getCell(7)));
        refCompte.setDeviseCpte(getCellStringValue(row.getCell(8)));
        refCompte.setDateOuvCpte(getCellStringValue(row.getCell(9)));
        refCompte.setEtatCpte(new BigInteger(getCellStringValue(row.getCell(10))));

        // Gestion des champs conditionnels
        String etatCpte = getCellStringValue(row.getCell(9));
        if("2".equals(etatCpte)) {
            refCompte.setDateclotureCpte(getCellStringValue(row.getCell(11)));
        } else if("3".equals(etatCpte)) {
            refCompte.setDateGelCpte(getCellStringValue(row.getCell(12)));
        }

        refCompte.setNumAutBCT(getCellStringValue(row.getCell(13)));
        refCompte.setDateAutBCT(getCellStringValue(row.getCell(14)));
        refCompte.setSoldDebMois(createMontant(row.getCell(15), row.getCell(16)));
        refCompte.setSoldfinMois(createMontant(row.getCell(17), row.getCell(18)));
        entete.setRefCompte(refCompte);

        // NbrEcritures
        entete.setNbrEcritures(getCellStringValue(row.getCell(19)));

        extrait.setEntete(entete);
    }

    private void buildDetails(Row row, Document.Extraits.Extrait extrait) {
        Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
        Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

        // Rib
        detail.setRib(getCellStringValue(row.getCell(20)));

        // RefOperation
        Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
        refOperation.setNatMvtOp(getCellStringValue(row.getCell(21)));
        refOperation.setMntOpDev(createMontant(row.getCell(22), row.getCell(23)));
        refOperation.setMntOpDin(createMontant(row.getCell(24), row.getCell(25)));
        refOperation.setDateMvt(getCellStringValue(row.getCell(26)));
        refOperation.setCodMvt(getCellStringValue(row.getCell(27)));
        refOperation.setNatOp(getCellStringValue(row.getCell(28)));
        refOperation.setModReg(getCellStringValue(row.getCell(29)));
        refOperation.setNumMsgeSwiftMvt(getCellStringValue(row.getCell(30)));
        detail.setRefOperation(refOperation);

        // RefFicheInformation
        Document.Extraits.Extrait.Details.Detail.RefFicheInformation refFiche = factory.createDocumentExtraitsExtraitDetailsDetailRefFicheInformation();
        refFiche.setNumFicheInformation(getCellStringValue(row.getCell(31)));
        refFiche.setDateFicheInformation(getCellStringValue(row.getCell(32)));
        detail.setRefFicheInformation(refFiche);

        // RefAutorisationBct
        Document.Extraits.Extrait.Details.Detail.RefAutorisationBct refAuth = factory.createDocumentExtraitsExtraitDetailsDetailRefAutorisationBct();
        refAuth.setNumAutBCT(getCellStringValue(row.getCell(33)));
        refAuth.setDateAutBCT(getCellStringValue(row.getCell(34)));
        detail.setRefAutorisationBct(refAuth);

        // DecDouane
        Document.Extraits.Extrait.Details.Detail.DecDouane decDouane = factory.createDocumentExtraitsExtraitDetailsDetailDecDouane();
        decDouane.setNumDecD(getCellStringValue(row.getCell(35)));
        decDouane.setDateDecD(getCellStringValue(row.getCell(36)));
        detail.setDecDouane(decDouane);

        // Derniers champs
        detail.setDenomBenif(getCellStringValue(row.getCell(37)));
        detail.setPays(getCellStringValue(row.getCell(38)));

        details.getDetail().add(detail);
        extrait.setDetails(details);
    }

    private TMontant createMontant(Cell cellValue, Cell cellDevise) {
        TMontant montant = factory.createTMontant();
        try {
            montant.setValue(new BigDecimal(getCellNumericValue(cellValue)));
            montant.setCcy(getCellStringValue(cellDevise));
        } catch (Exception e) {
            logger.error("Erreur création Montant : " + e.getMessage());
            montant.setValue(BigDecimal.ZERO);
            montant.setCcy("XXX");
        }
        return montant;
    }

    // Méthodes utilitaires
    private String getCellStringValue(Cell cell) {
        if(cell == null) return ""; // Correction 3: Gestion des cellules nulles

        switch(cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue().trim();
            case NUMERIC:
                if(DateUtil.isCellDateFormatted(cell)) {
                    return new SimpleDateFormat("dd/MM/yyyy").format(cell.getDateCellValue());
                }
                return String.valueOf((long) cell.getNumericCellValue());
            default:
                return "";
        }
    }

    private double getCellNumericValue(Cell cell) {
        try {
            return cell.getNumericCellValue();
        } catch (Exception e) {
            return 0.0;
        }
    }

    private boolean isRowEmpty(Row row) {
        if(row == null) return true; // Correction 4: Vérification null
        for(int i = 0; i < row.getLastCellNum(); i++) {
            Cell cell = row.getCell(i);
            if(cell != null && cell.getCellType() != CellType.BLANK) {
                return false;
            }
        }
        return true;
    }
}