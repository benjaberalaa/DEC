package com.smi.declarations.services.CrsService;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smi.declarations.services.GenericDeclarationService;
import com.smi.declarations.entities.Periode;
import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.generated.crs_startup.Document;
import com.smi.generated.crs_startup.ObjectFactory;
import com.smi.generated.crs_startup.TMontant;
import jakarta.persistence.EntityNotFoundException;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Service
public class CrsStartupService {

    @Autowired
    private PeriodeRepository periodeRepository;

    @Autowired
    private GenericDeclarationService genericDeclarationService;

    private static final Logger logger = LoggerFactory.getLogger(CrsStartupService.class);


    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();
        document.setEnteteDoc(factory.createDocumentEnteteDoc());

        Document.EnteteDoc enteteDoc = document.getEnteteDoc();
        enteteDoc.setCodeIAT(String.format("%02d", 23));  // Exemple "023" pour codeIAT
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        enteteDoc.setDateDec(sdf.format(new Date()));
        enteteDoc.setCodeAnnexe("CRS-001"); // Valeur par défaut pour codeAnnexe

        // PeriodDec (colonne 1)
        enteteDoc.setPeriodDec(getCellStringValue(sheet.getRow(1).getCell(0)));

        Document.Extraits extraits = factory.createDocumentExtraits();
        List<Document.Extraits.Extrait> extraitList = new ArrayList<>();

        Iterator<Row> rowIterator = sheet.iterator();
        rowIterator.next(); // Skipper la ligne d'en-tête

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();

            Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();
            Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();
            extrait.setEntete(entete);

            // Mapping des colonnes du fichier Excel
            entete.setAgenceDom(getCellStringValue(row.getCell(1))); // AgenceDom (colonne 2)
            entete.setTitulaire(createTitulaire(row));
            entete.setRefCompte(createRefCompte(row));
            entete.setNbrEcritures(getCellStringValue(row.getCell(16))); // NbrEcritures (colonne 17)

            // Ajout des détails (Details)
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();
            detail.setRib(getCellStringValue(row.getCell(17))); // Rib (colonne 18)

            // Création de RefOperation
            Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
            refOperation.setNatMvtOp(getCellStringValue(row.getCell(18))); // NatMvtOp (colonne 19)
            refOperation.setCodMvt(getCellStringValue(row.getCell(19))); // CodMvt (colonne 20)
            refOperation.setDateMvt(getCellStringValue(row.getCell(20))); // DateMvt (colonne 21)
            refOperation.setMntOpDev(createMontant(row.getCell(21), row.getCell(22))); // MntOpDev et Ccy (colonnes 22 et 23)
            refOperation.setMntOpDin(createMontant(row.getCell(23), row.getCell(24))); // MntOpDin et Ccy (colonnes 24 et 25)
            refOperation.setModReg(getCellStringValue(row.getCell(25))); // ModReg (colonne 26)
            refOperation.setNatOp(getCellStringValue(row.getCell(26))); // NatOp (colonne 27)
            refOperation.setNumMsgeSwiftMvt(getCellStringValue(row.getCell(27))); // NumMsgeSwiftMvt (colonne 28)

            detail.setRefOperation(refOperation);
            detail.setDenomBenif(getCellStringValue(row.getCell(28))); // DenomBenif (colonne 29)
            detail.setPays(getCellStringValue(row.getCell(29))); // Pays (colonne 30)

            details.getDetail().add(detail);
            extrait.setDetails(details);

            extraitList.add(extrait);
        }

        extraits.getExtrait().addAll(extraitList);
        document.setExtraits(extraits);

        workbook.close();
        inputStream.close();

        return document;
    }

    private Document.Extraits.Extrait.Entete.Titulaire createTitulaire(Row row) {
        Document.Extraits.Extrait.Entete.Titulaire titulaire = new Document.Extraits.Extrait.Entete.Titulaire();

        String typeIdentifiant = getCellStringValue(row.getCell(2));
        if (typeIdentifiant == null || typeIdentifiant.trim().isEmpty() || typeIdentifiant.length() != 1) {
            logger.warn("TypeIdentifiant manquant ou invalide à la ligne {}. Valeur par défaut 'D' attribuée.", row.getRowNum());
            typeIdentifiant = "D"; // Valeur par défaut valide
        }
        titulaire.setTypeIdentifiant(typeIdentifiant);

        String codeIdentifiant = getCellStringValue(row.getCell(3));
        if (codeIdentifiant == null || codeIdentifiant.trim().isEmpty()) {
            logger.warn("CodeIdentifiant manquant à la ligne {}. Valeur par défaut '00000000' attribuée.", row.getRowNum());
            codeIdentifiant = "00000000"; // Valeur par défaut valide
        }
        titulaire.setCodeIdentifiant(codeIdentifiant);

        titulaire.setRaisSociale(getCellStringValue(row.getCell(4)));

        return titulaire;
    }

    private Document.Extraits.Extrait.Entete.RefCompte createRefCompte(Row row) {
        Document.Extraits.Extrait.Entete.RefCompte refCompte = new Document.Extraits.Extrait.Entete.RefCompte();

        refCompte.setRib(getCellStringValue(row.getCell(5))); // Rib doit être avant SoldDebMois
        refCompte.setDeviseCpte(getCellStringValue(row.getCell(6)));
        refCompte.setDateobtStartup(getCellStringValue(row.getCell(7)));
        refCompte.setDateOuvCpte(getCellStringValue(row.getCell(8)));

        // Gestion correcte de EtatCpte
        String etatCpteStr = getCellStringValue(row.getCell(9));
        if (etatCpteStr != null && !etatCpteStr.isEmpty()) {
            try {
                refCompte.setEtatCpte(new BigInteger(etatCpteStr));
            } catch (NumberFormatException e) {
                refCompte.setEtatCpte(BigInteger.ZERO); // Valeur par défaut
            }
        }

        refCompte.setDateclotureCpte(getCellStringValue(row.getCell(10)));
        refCompte.setDateGelCpte(getCellStringValue(row.getCell(11)));

        // Ajout de Rib avant SoldDebMois
        refCompte.setSoldDebMois(createMontant(row.getCell(12), row.getCell(13)));
        refCompte.setSoldfinMois(createMontant(row.getCell(14), row.getCell(15)));

        return refCompte;
    }

    private TMontant createMontant(Cell cellMontant, Cell cellCcy) {
        TMontant montant = new TMontant();

        // Vérification de la cellule Montant
        if (cellMontant == null || cellMontant.getCellType() == CellType.BLANK) {
            System.err.println("⚠️ Avertissement : Montant vide détecté ! Valeur 0.0 attribuée.");
            montant.setValue(BigDecimal.ZERO); // Valeur par défaut
        } else {
            montant.setValue(BigDecimal.valueOf(getCellNumericValue(cellMontant)));
        }

        // Vérification de la devise (Ccy)
        String ccy = getCellStringValue(cellCcy);
        if (ccy == null || ccy.isEmpty()) {
            System.err.println("⚠️ Avertissement : Devise vide détectée ! Valeur 'XXX' attribuée.");
            ccy = "XXX"; // Valeur par défaut si la devise est manquante
        }
        montant.setCcy(ccy);

        return montant;
    }

    private String getCellStringValue(Cell cell) {
        if (cell == null || cell.getCellType() == CellType.BLANK) {
            return null; // Évite les chaînes vides inutiles
        }
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue().trim();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    return sdf.format(cell.getDateCellValue());
                }
                return String.valueOf((long) cell.getNumericCellValue()); // Gestion des entiers
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case FORMULA:
                try {
                    return String.valueOf((long) cell.getNumericCellValue());
                } catch (Exception e) {
                    return cell.getStringCellValue(); // Cas où la formule renvoie un texte
                }
            default:
                return null;
        }
    }

    private double getCellNumericValue(Cell cell) {
        if (cell == null || cell.getCellType() == CellType.BLANK) {
            return 0.0;
        }
        try {
            if (cell.getCellType() == CellType.NUMERIC || cell.getCellType() == CellType.FORMULA) {
                return cell.getNumericCellValue();
            } else if (cell.getCellType() == CellType.STRING) {
                return Double.parseDouble(cell.getStringCellValue().trim());
            }
        } catch (NumberFormatException e) {
            return 0.0;
        }
        return 0.0;
    }

    private String formatNumericValue(double value) {
        if (value == (long) value) {
            return String.valueOf((long) value);
        }
        return String.valueOf(value);
    }

    public String convertDocumentToJson(Document document) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(document); // Convertit l'objet Document en JSON
    }

    @Transactional
    public Periode addTransactionToPeriod(Long id, JsonNode transfert) throws Exception {
        Periode periode = periodeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Période introuvable avec l'ID : " + id));

        String existingDetails = periode.getDetails();
        String updatedDetails = (existingDetails == null || existingDetails.isEmpty())
                ? transfert.toString()
                : genericDeclarationService.mergeJsonDynamic(existingDetails, transfert.toString(), periode.getTypePeriode(), periode.getPeriodDec());

        periode.setDetails(updatedDetails);
        return periodeRepository.save(periode);
    }
}
