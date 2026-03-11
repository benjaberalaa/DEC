package com.smi.declarations.services.DsService;

import com.smi.generated.ds_startup_ie_suivi.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

@Service
public class DsStartupIeSuiviService {

    private static final String CODE_ANNEXE = "DS-STARTUP-IE-SUIVI";
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
            Document.Dossiers dossiers = factory.createDocumentDossiers();
            Document.Dossiers.Dossier dossier = factory.createDocumentDossiersDossier();

            Iterator<Row> rowIterator = sheet.iterator();

            // Sauter l'en-tête Excel
            if (rowIterator.hasNext()) rowIterator.next();

            // Construction de l'entête
            if (rowIterator.hasNext()) {
                Row headerRow = rowIterator.next();
                Document.Dossiers.Dossier.Entete entete = factory.createDocumentDossiersDossierEntete();
                entete.setNbrEcritures(getStringValue(headerRow.getCell(0))); // Colonne A: NbrEcritures
                dossier.setEntete(entete);
            }

            // Construction des détails
            Document.Dossiers.Dossier.Details details = factory.createDocumentDossiersDossierDetails();

            // Réinitialiser l'itérateur pour traiter toutes les lignes comme détails
            rowIterator = sheet.iterator();
            if (rowIterator.hasNext()) rowIterator.next(); // Sauter l'en-tête

            while (rowIterator.hasNext()) {
                Row dataRow = rowIterator.next();

                // Création d'un nouveau détail
                Document.Dossiers.Dossier.Details.Detail detail =
                        factory.createDocumentDossiersDossierDetailsDetail();

                // Remplissage des champs du détail
                detail.setAgence(getStringValue(dataRow.getCell(1))); // Colonne B: Agence
                detail.setMatFiscal(getStringValue(dataRow.getCell(2))); // Colonne C: MatFiscal
                detail.setRaisSoc(getStringValue(dataRow.getCell(3))); // Colonne D: RaisSoc

                // Création et remplissage des documents
                Document.Dossiers.Dossier.Details.Detail.Documents documents =
                        factory.createDocumentDossiersDossierDetailsDetailDocuments();
                Document.Dossiers.Dossier.Details.Detail.Documents.DocumentInv documentInv =
                        factory.createDocumentDossiersDossierDetailsDetailDocumentsDocumentInv();

                documentInv.setCodDoc(getStringValue(dataRow.getCell(4))); // Colonne E: CodDoc (21 caractères)
                documentInv.setNomOrigPiece(getStringValue(dataRow.getCell(5))); // Colonne F: NomOrigPiece
                documentInv.setAttachefFile(getStringValue(dataRow.getCell(6)).getBytes()); // Colonne G: AttachefFile

                documents.getDocumentInv().add(documentInv);
                detail.setDocuments(documents);

                // Ajout du détail à la liste des détails
                details.getDetail().add(detail);
            }

            dossier.setDetails(details);
            dossiers.setDossier(dossier);
            document.setDossiers(dossiers);

            return document;
        }
    }

    private void buildEnteteDoc(Document doc) {
        Document.EnteteDoc entete = new Document.EnteteDoc();
        entete.setCodeIAT("01"); // Valeur par défaut
        entete.setDateDec(DATE_FORMAT.format(new Date()));
        entete.setCodeAnnexe(CODE_ANNEXE);
        entete.setPeriodDec(new SimpleDateFormat("MMyyyy").format(new Date()));
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