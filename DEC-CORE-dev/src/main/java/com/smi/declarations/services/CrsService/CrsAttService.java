package com.smi.declarations.services.CrsService;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smi.declarations.services.GenericDeclarationService;
import com.smi.declarations.entities.Periode;
import com.smi.declarations.repositories.PeriodeRepository;
import com.smi.generated.crs_att.*;
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
import java.util.Date;
import java.util.Iterator;

@Service
public class CrsAttService {

    @Autowired
    private PeriodeRepository periodeRepository;

    @Autowired
    private GenericDeclarationService genericDeclarationService;

    private static final Logger logger = LoggerFactory.getLogger(CrsAttService.class);

    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();

        // Initialisation des sections principales
        document.setEnteteDoc(factory.createDocumentEnteteDoc());
        document.setExtraits(factory.createDocumentExtraits());

        // Mapping de l'entête global
        Document.EnteteDoc header = document.getEnteteDoc();
        header.setCodeIAT("23");
        header.setDateDec(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
        header.setCodeAnnexe("CRS-007");


        // Parcours des lignes Excel
        Iterator<Row> rowIterator = sheet.iterator();
        rowIterator.next(); // Skip header

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();

            if (isRowEmpty(row)) {
                continue;
            }
            Document.Extraits.Extrait extrait = factory.createDocumentExtraitsExtrait();
            Document.Extraits.Extrait.Entete entete = factory.createDocumentExtraitsExtraitEntete();

            // =====================================================================
            // MAPPING ENTETE
            // =====================================================================

            // AgenceDom (colonne 1)
            entete.setAgenceDom(String.valueOf((row.getCell(1))));

            // Titulaire (colonnes 2-8)
            Document.Extraits.Extrait.Entete.Titulaire titulaire = factory.createDocumentExtraitsExtraitEnteteTitulaire();
            titulaire.setTypeTitul(new BigInteger(getCellStringValue(row.getCell(2))));
            titulaire.setTypeIdentifiant(getCellStringValue(row.getCell(3)));
            titulaire.setCodeIdentifiant(getCellStringValue(row.getCell(4)));
            titulaire.setNom(getCellStringValue(row.getCell(5)));
            titulaire.setPrenom(getCellStringValue(row.getCell(6)));
            titulaire.setRaisSociale(getCellStringValue(row.getCell(7)));
            titulaire.setNationalite(getCellStringValue(row.getCell(8)));
            entete.setTitulaire(titulaire);

            // Référence Compte (colonnes 9-17)
            Document.Extraits.Extrait.Entete.RefCompte refCompte = factory.createDocumentExtraitsExtraitEnteteRefCompte();
            refCompte.setRib(getCellStringValue(row.getCell(9)));
            refCompte.setDateOuvCpte(getCellStringValue(row.getCell(10)));
            refCompte.setEtatCpte(new BigInteger(getCellStringValue(row.getCell(11))));
            refCompte.setDateclotureCpte(getCellStringValue(row.getCell(12)));
            refCompte.setSoldDebMois(createMontant(row.getCell(14), row.getCell(15))); // SoldDebMois + Ccy
            refCompte.setSoldfinMois(createMontant(row.getCell(16), row.getCell(17))); // SoldfinMois + Ccy
            entete.setRefCompte(refCompte);

            // NbrEcritures (colonne 13)
            entete.setNbrEcritures(getCellStringValue(row.getCell(13)));

            // =====================================================================
            // MAPPING DETAILS
            // =====================================================================
            Document.Extraits.Extrait.Details details = factory.createDocumentExtraitsExtraitDetails();
            Document.Extraits.Extrait.Details.Detail detail = factory.createDocumentExtraitsExtraitDetailsDetail();

            // Rib détail (colonne 18)
            detail.setRib(getCellStringValue(row.getCell(18)));

            // Référence Opération (colonnes 19-29)
            Document.Extraits.Extrait.Details.Detail.RefOperation refOperation = factory.createDocumentExtraitsExtraitDetailsDetailRefOperation();
            refOperation.setNatMvtOp(getCellStringValue(row.getCell(19)));
            refOperation.setMntOpDev(createMontant(row.getCell(20), row.getCell(21)));
            refOperation.setMntOpDin(createMontant(row.getCell(22), row.getCell(23)));
            refOperation.setDateMvt(getCellStringValue(row.getCell(25)));
            refOperation.setCodMvt(getCellStringValue(row.getCell(26)));
            refOperation.setNatOp(getCellStringValue(row.getCell(27)));
            refOperation.setModReg(getCellStringValue(row.getCell(28)));
            refOperation.setNumMsgeSwiftMvt(getCellStringValue(row.getCell(29)));
            detail.setRefOperation(refOperation);

            // Autorisation BCT (colonnes 30-31)
            Document.Extraits.Extrait.Details.Detail.RefAutorisationBct refAuthBct = factory.createDocumentExtraitsExtraitDetailsDetailRefAutorisationBct();
            refAuthBct.setNumAutBCT(getCellStringValue(row.getCell(30)));
            refAuthBct.setDateAutBCT(getCellStringValue(row.getCell(31)));
            detail.setRefAutorisationBct(refAuthBct);

            // Détails finaux (colonnes 32-33)
            detail.setDenomBenif(getCellStringValue(row.getCell(32)));
            detail.setPays(getCellStringValue(row.getCell(33)));

            details.getDetail().add(detail);
            extrait.setEntete(entete);
            extrait.setDetails(details);

            document.getExtraits().getExtrait().add(extrait);
        }

        workbook.close();
        inputStream.close();

        return document;
    }

    private TMontant createMontant(Cell cellMontant, Cell cellCcy) {
        TMontant montant = new TMontant();

        // Vérification de la cellule Montant
        if (cellMontant == null || cellMontant.getCellType() == CellType.BLANK) {
            montant.setValue(BigDecimal.ZERO);  // ✅ Définit une valeur par défaut
        } else {
            montant.setValue(BigDecimal.valueOf(getCellNumericValue(cellMontant)));
        }

        // Vérification de la cellule Devise
        String ccy = getCellStringValue(cellCcy);
        if (ccy == null || ccy.isEmpty()) {  // ⛔ Ici, si ccy est null, ccy.length() provoque une erreur
            ccy = "XXX";  // ✅ Valeur par défaut
        }
        montant.setCcy(ccy);

        return montant;
    }

    private String getCellStringValue(Cell cell) {
        if (cell == null || cell.getCellType() == CellType.BLANK) {
            logger.warn("Cell is empty or null.");
            return "";
        }

        logger.info("Processing cell with value: " + cell.toString());

        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue().trim();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    return sdf.format(cell.getDateCellValue());
                }
                return String.valueOf((long) cell.getNumericCellValue());
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case FORMULA:
                try {
                    return String.valueOf((long) cell.getNumericCellValue());
                } catch (Exception e) {
                    return cell.getStringCellValue();
                }
            default:
                logger.error("Unknown cell type: " + cell.getCellType());
                return "";
        }
    }

    private boolean isRowEmpty(Row row) {
        // Vérification des colonnes jusqu'à la dernière colonne utilisée
        for (int i = 0; i < row.getPhysicalNumberOfCells(); i++) {
            if (row.getCell(i) != null && !row.getCell(i).toString().trim().isEmpty()) {
                return false;  // Si une cellule contient des données, la ligne n'est pas vide
            }
        }
        return true; // La ligne est vide si toutes les cellules sont nulles ou vides
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

    public String convertDocumentToJson(Document document) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(document);
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
