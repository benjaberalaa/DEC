package com.smi.declarations.services.TrService;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.smi.generated.tr_all_v2.Document;
import com.smi.generated.tr_all_v2.ObjectFactory;
import com.smi.generated.tr_all_v2.TMontant;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.stereotype.Service;
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
public class TrAllService {

    public Document readExcelFile(MultipartFile excelFile) throws IOException {
        InputStream inputStream = excelFile.getInputStream();
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Document document = new Document();
        ObjectFactory factory = new ObjectFactory();

        // Populate EntêteDoc
        document.setEnteteDoc(factory.createDocumentEnteteDoc());
        Document.EnteteDoc enteteDoc = document.getEnteteDoc();
        enteteDoc.setCodeIAT(String.format("%02d", 23));
        enteteDoc.setDateDec(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
        enteteDoc.setCodeAnnexe("TR-012");

        // Populate Transferts
        Document.Transferts transferts = factory.createDocumentTransferts();
        List<Document.Transferts.Transfert> transfertList = new ArrayList<>();

        Iterator<Row> rowIterator = sheet.iterator();
        rowIterator.next(); // Skip header row

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            if (row != null && row.getCell(0) != null) {
                Document.Transferts.Transfert transfert = createTransfert(row, factory);
                transfertList.add(transfert);
            }
        }

        transferts.getTransfert().addAll(transfertList);
        document.setTransferts(transferts);

        workbook.close();
        inputStream.close();

        return document;
    }

    private Document.Transferts.Transfert createTransfert(Row row, ObjectFactory factory) {
        Document.Transferts.Transfert transfert = factory.createDocumentTransfertsTransfert();
        Document.Transferts.Transfert.Entete entete = factory.createDocumentTransfertsTransfertEntete();
        transfert.setEntete(entete);

        entete.setPeriodDec(getCellStringValue(row.getCell(0)));
        entete.setNbrEcritures(String.format("%06d", 1));

        Document.Transferts.Transfert.Details details = factory.createDocumentTransfertsTransfertDetails();
        transfert.setDetails(details);

        Document.Transferts.Transfert.Details.Detail detail = createDetail(row, factory);
        details.getDetail().add(detail);

        return transfert;
    }

    private Document.Transferts.Transfert.Details.Detail createDetail(Row row, ObjectFactory factory) {
        Document.Transferts.Transfert.Details.Detail detail = factory.createDocumentTransfertsTransfertDetailsDetail();

        detail.setPeriodDec(getCellStringValue(row.getCell(0)));
        detail.setAgence(formatAgence(row.getCell(1)));

        Document.Transferts.Transfert.Details.Detail.Benificiaire benificiaire = factory.createDocumentTransfertsTransfertDetailsDetailBenificiaire();
        benificiaire.setCategBenif(getCellBigIntegerValue(row.getCell(2)));
        benificiaire.setAge(getCellStringValue(row.getCell(3)));
        benificiaire.setTypeIdentifiant(getCellStringValue(row.getCell(4)));
        benificiaire.setCodIdentifiant(getCellStringValue(row.getCell(5)));
        benificiaire.setNom(getCellStringValue(row.getCell(6)));
        benificiaire.setPrenom(getCellStringValue(row.getCell(7)));
        benificiaire.setNationalite(getCellStringValue(row.getCell(8)));
        detail.setBenificiaire(benificiaire);

        Document.Transferts.Transfert.Details.Detail.OperationTransf operationTransf = factory.createDocumentTransfertsTransfertDetailsDetailOperationTransf();
        operationTransf.setEcoSalaire(getCellStringValue(row.getCell(9)));
        operationTransf.setCodPaysDest(getCellStringValue(row.getCell(10)));
        operationTransf.setModDeliv(getCellBigIntegerValue(row.getCell(11)));

        TMontant mntAllocTourDev = factory.createTMontant();
        mntAllocTourDev.setValue(formatAmount(getCellNumericValue(row.getCell(12))));
        mntAllocTourDev.setCcy(getCellStringValue(row.getCell(13)));
        operationTransf.setMntAllocTourDev(mntAllocTourDev);

        TMontant mntAlloc = factory.createTMontant();
        mntAlloc.setValue(formatAmount(getCellNumericValue(row.getCell(14))));
        mntAlloc.setCcy(getCellStringValue(row.getCell(15)));
        operationTransf.setMntAlloc(mntAlloc);

        operationTransf.setDatDelivAllocTour(formatDate(row.getCell(16)));
        operationTransf.setNumAutBctSD(getCellStringValue(row.getCell(17)));
        operationTransf.setDatAutBctSD(formatDate(row.getCell(18)));
        detail.setOperationTransf(operationTransf);

        Document.Transferts.Transfert.Details.Detail.RefAutorisationBct refAutorisationBct = factory.createDocumentTransfertsTransfertDetailsDetailRefAutorisationBct();
        refAutorisationBct.setNumAutBCT(getCellStringValue(row.getCell(19)));
        refAutorisationBct.setDatAutBCT(formatDate(row.getCell(20)));
        detail.setRefAutorisationBct(refAutorisationBct);

        return detail;
    }

    private String formatAgence(Cell cell) {
        String agence = getCellStringValue(cell);
        return agence != null && !agence.isEmpty() ? String.format("%03d", Integer.parseInt(agence)) : "000";
    }

    private String getCellStringValue(Cell cell) {
        if (cell == null) return "";
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue().trim();
            case NUMERIC:
                return formatNumericValue(cell.getNumericCellValue());
            default:
                return "";
        }
    }

    private double getCellNumericValue(Cell cell) {
        if (cell == null) return 0.0;
        return cell.getCellType() == CellType.NUMERIC ? cell.getNumericCellValue() : 0.0;
    }

    private BigDecimal formatAmount(double value) {
        return BigDecimal.valueOf(value).setScale(3, BigDecimal.ROUND_HALF_UP);
    }

    private String formatNumericValue(double value) {
        return value == (long) value ? String.valueOf((long) value) : String.valueOf(value);
    }

    private String formatDate(Cell cell) {
        try {
            if (cell != null && cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
                return new SimpleDateFormat("dd/MM/yyyy").format(cell.getDateCellValue());
            } else if (cell != null && cell.getCellType() == CellType.STRING) {
                String date = cell.getStringCellValue().trim();
                if (date.matches("\\d{2}/\\d{2}/\\d{4}")) {
                    return date;
                }
            }
        } catch (Exception e) {
            return "";
        }
        return "";
    }

    private BigInteger getCellBigIntegerValue(Cell cell) {
        if (cell == null) return BigInteger.ONE;
        return cell.getCellType() == CellType.NUMERIC
                ? BigInteger.valueOf((long) cell.getNumericCellValue())
                : BigInteger.ONE;
    }



    public String convertDocumentToJson(Document document) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(document);
    }

    public Document convertJsonToDocument(String json) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, Document.class);
    }
}
