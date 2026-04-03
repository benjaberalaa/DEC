package com.smi.declarations.services;

import com.smi.declarations.entities.Periode;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.util.List;

@Service
public class GenericDeclarationService {

    @org.springframework.beans.factory.annotation.Autowired
    private org.springframework.context.ApplicationContext context;

    private com.fasterxml.jackson.databind.JsonNode mappingNode;

    @PostConstruct
    public void init() {
        try {
            com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
            java.io.InputStream is = getClass().getResourceAsStream("/backend_mapping.json");
            if (is != null) {
                mappingNode = mapper.readTree(is);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String readExcelToJsonDynamic(Periode.TypePeriod type, org.springframework.web.multipart.MultipartFile excelFile, String periodDec) throws Exception {
        if (mappingNode == null || !mappingNode.has(type.name())) {
            // Fallback to legacy reflection if mapping is missing
            return readExcelToJsonLegacy(type, excelFile);
        }

        com.fasterxml.jackson.databind.JsonNode typeMapping = mappingNode.get(type.name());
        com.fasterxml.jackson.databind.JsonNode paths = typeMapping.get("paths");
        String codeAnnexe = typeMapping.get("codeAnnexe").asText();
        
        System.out.println("Processing Excel for declaration: " + type.name() + " (Code: " + codeAnnexe + ")");

        Class<?> docClass = getDocumentClass(type);
        Object factory = getObjectFactory(type);
        
        Object document = docClass.getDeclaredConstructor().newInstance();
        
        // Build EnteteDoc
        java.lang.reflect.Method enteteSetter = findMethod(docClass, "setEnteteDoc");
        if (enteteSetter != null) {
            Class<?> enteteClass = enteteSetter.getParameterTypes()[0];
            Object entete = enteteClass.getDeclaredConstructor().newInstance();
            setSimpleProperty(entete, "codeAnnexe", codeAnnexe);
            setSimpleProperty(entete, "dateDec", new java.text.SimpleDateFormat("dd/MM/yyyy").format(new java.util.Date()));
            setSimpleProperty(entete, "codeIAT", "01");
            if (periodDec != null) {
                setSimpleProperty(entete, "periodDec", periodDec);
                if (periodDec.length() >= 4) {
                    setSimpleProperty(entete, "anneDec", periodDec.substring(2));
                }
            }
            enteteSetter.invoke(document, entete);
        }

        try (java.io.InputStream is = excelFile.getInputStream();
             org.apache.poi.ss.usermodel.Workbook workbook = new org.apache.poi.xssf.usermodel.XSSFWorkbook(is)) {
            
            org.apache.poi.ss.usermodel.DataFormatter dataFormatter = new org.apache.poi.ss.usermodel.DataFormatter();
            System.out.println("Reading Sheet 1 (Index 0) of the Excel file.");
            org.apache.poi.ss.usermodel.Sheet sheet = workbook.getSheetAt(0);
            java.util.Iterator<org.apache.poi.ss.usermodel.Row> rowIterator = sheet.iterator();
            if (rowIterator.hasNext()) rowIterator.next(); // Skip header

            while (rowIterator.hasNext()) {
                org.apache.poi.ss.usermodel.Row row = rowIterator.next();
                
                boolean hasData = false;
                for (int i = 0; i < paths.size(); i++) {
                    org.apache.poi.ss.usermodel.Cell cell = row.getCell(i);
                    if (cell != null) {
                        String value = dataFormatter.formatCellValue(cell);
                        if (value != null && !value.trim().isEmpty()) {
                            hasData = true;
                            break;
                        }
                    }
                }
                if (!hasData) continue;
                
                // We need to create a NEW "Main Item" for each row.
                // The main item is usually the second part of the path (e.g. "Transfert" in "Transferts_Transfert")
                String firstPath = paths.get(0).asText();
                String[] firstPathParts = firstPath.split("_");
                if (firstPathParts.length >= 2) {
                     forceNewItem(document, firstPathParts[0], firstPathParts[1], factory);
                }

                for (int i = 0; i < paths.size(); i++) {
                    String path = paths.get(i).asText();
                    org.apache.poi.ss.usermodel.Cell cell = row.getCell(i);
                    String value = getCellValueAsString(cell, dataFormatter);
                    if (value != null && !value.isEmpty()) {
                        setPropertyRecursive(document, path, value, factory);
                    }
                }
            }
        }

        // Hook for CRS_CPD_OSM mandatory DecDouane
        if (type == Periode.TypePeriod.CRS_CPD_OSM) {
            com.smi.generated.crs_cpd_osm.Document doc = (com.smi.generated.crs_cpd_osm.Document) document;
            if (doc.getExtraits() != null) {
                for (com.smi.generated.crs_cpd_osm.Document.Extraits.Extrait ext : doc.getExtraits().getExtrait()) {
                    if (ext.getDetails() != null) {
                        for (com.smi.generated.crs_cpd_osm.Document.Extraits.Extrait.Details.Detail det : ext.getDetails().getDetail()) {
                            if (det.getDecDouane() == null) {
                                det.setDecDouane(new com.smi.generated.crs_cpd_osm.ObjectFactory().createDocumentExtraitsExtraitDetailsDetailDecDouane());
                            }
                        }
                    }
                }
            }
        }

        com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
        return mapper.writeValueAsString(document);
    }

    private String readExcelToJsonLegacy(Periode.TypePeriod type, org.springframework.web.multipart.MultipartFile excelFile) throws Exception {
        String beanName = getServiceName(type);
        Object serviceBean = context.getBean(beanName);
        java.lang.reflect.Method method;
        try {
            method = serviceBean.getClass().getMethod("readExcelFile", org.springframework.web.multipart.MultipartFile.class);
        } catch (NoSuchMethodException e) {
            method = serviceBean.getClass().getMethod("processExcelFile", org.springframework.web.multipart.MultipartFile.class);
        }
        Object document = method.invoke(serviceBean, excelFile);
        com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
        return mapper.writeValueAsString(document);
    }

    private void forceNewItem(Object document, String containerProp, String itemProp, Object factory) throws Exception {
        java.lang.reflect.Method containerGetter = findGetter(document.getClass(), containerProp);
        if (containerGetter == null) return;
        Object container = containerGetter.invoke(document);
        if (container == null) {
            container = createItem(factory, containerGetter);
            findSetter(document.getClass(), containerProp).invoke(document, container);
        }
        
        java.lang.reflect.Method itemGetter = findGetter(container.getClass(), itemProp);
        if (itemGetter == null) return;
        Object listObj = itemGetter.invoke(container);
        if (listObj instanceof List) {
            @SuppressWarnings("unchecked")
            List<Object> list = (List<Object>) listObj;
            list.add(createItem(factory, itemGetter));
        }
    }

    private void setPropertyRecursive(Object target, String path, String value, Object factory) throws Exception {
        String[] parts = path.split("_");
        Object current = target;
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            String propertyName = part.substring(0, 1).toLowerCase() + part.substring(1);
            
            if (i == parts.length - 1) {
                // Final leaf
                java.lang.reflect.Method setter = findSetter(current.getClass(), propertyName);
                if (setter != null) {
                    Object converted = convertValue(value, setter.getParameterTypes()[0]);
                    setter.invoke(current, converted);
                }
            } else {
                // Intermediate
                java.lang.reflect.Method getter = findGetter(current.getClass(), propertyName);
                if (getter == null) return;
                
                Object next = getter.invoke(current);
                if (next instanceof List) {
                    @SuppressWarnings("unchecked")
                    List<Object> list = (List<Object>) next;
                    if (list.isEmpty() || isNewItemRequired(path, i)) {
                         // This is tricky: how to know if we need a new item?
                         // For now, if it's the main container (e.g. Transfert), and we are at the start of a row
                         // But here we are already inside a row loop.
                         // Actually, if the list is empty, we must add one.
                         if (list.isEmpty()) {
                             Object newItem = createItem(factory, getter);
                             list.add(newItem);
                         }
                    }
                    next = list.get(list.size() - 1);
                } else if (next == null) {
                    next = createItem(factory, getter);
                    java.lang.reflect.Method setter = findSetter(current.getClass(), propertyName);
                    if (setter != null) setter.invoke(current, next);
                }
                current = next;
            }
        }
    }

    private boolean isNewItemRequired(String path, int index) {
        // Simple heuristic: if we are at the second level (e.g. Transfert in Transferts),
        // we might have already added it for this row.
        // Actually, the loop in readExcelToJsonDynamic should probably create a new item per row.
        return false; 
    }

    private Object createItem(Object factory, java.lang.reflect.Method getter) throws Exception {
        Class<?> type = getter.getReturnType();
        if (java.util.List.class.isAssignableFrom(type)) {
            // Get generic type of list
            java.lang.reflect.ParameterizedType pt = (java.lang.reflect.ParameterizedType) getter.getGenericReturnType();
            type = (Class<?>) pt.getActualTypeArguments()[0];
        }
        
        String typeName = type.getSimpleName();
        Class<?> enclosingClass = type.getEnclosingClass();
        
        // Strategy 1: Try factory.createEnclosingClassTypeName()
        if (enclosingClass != null) {
            String creatorName = "create" + enclosingClass.getSimpleName() + typeName;
            try {
                return factory.getClass().getMethod(creatorName).invoke(factory);
            } catch (NoSuchMethodException ignored) {}
        }
        
        // Strategy 2: Try factory.createTypeName()
        try {
            String creatorName = "create" + typeName;
            return factory.getClass().getMethod(creatorName).invoke(factory);
        } catch (NoSuchMethodException e) {
            // Strategy 3: Direct instantiation
            return type.getDeclaredConstructor().newInstance();
        }
    }

    private Object getObjectFactory(Periode.TypePeriod type) throws Exception {
        Class<?> docClass = getDocumentClass(type);
        String pkg = docClass.getPackage().getName();
        return Class.forName(pkg + ".ObjectFactory").getDeclaredConstructor().newInstance();
    }

    private java.lang.reflect.Method findSetter(Class<?> clazz, String prop) {
        String name = "set" + prop.substring(0, 1).toUpperCase() + prop.substring(1);
        for (java.lang.reflect.Method m : clazz.getMethods()) {
            if (m.getName().equals(name) && m.getParameterCount() == 1) return m;
        }
        return null;
    }

    private java.lang.reflect.Method findGetter(Class<?> clazz, String prop) {
        String name = "get" + prop.substring(0, 1).toUpperCase() + prop.substring(1);
        try { return clazz.getMethod(name); } catch (Exception e) {
            name = "is" + prop.substring(0, 1).toUpperCase() + prop.substring(1);
            try { return clazz.getMethod(name); } catch (Exception e2) { return null; }
        }
    }

    private java.lang.reflect.Method findMethod(Class<?> clazz, String name) {
        for (java.lang.reflect.Method m : clazz.getMethods()) {
            if (m.getName().equalsIgnoreCase(name)) return m;
        }
        return null;
    }

    private void setSimpleProperty(Object target, String prop, Object value) throws Exception {
        java.lang.reflect.Method setter = findSetter(target.getClass(), prop);
        if (setter != null) setter.invoke(target, value);
    }

    private Object convertValue(String value, Class<?> type) {
        if (value == null) return null;
        if (type == String.class) return value;
        if (type == java.math.BigDecimal.class) return new java.math.BigDecimal(value.replace(",", "."));
        if (type == java.math.BigInteger.class) return new java.math.BigInteger(new java.math.BigDecimal(value).toBigInteger().toString());
        if (type == int.class || type == Integer.class) return Integer.parseInt(value);
        if (type.getSimpleName().equals("TMontant")) {
             // Special case for TMontant
             try {
                Object mnt = type.getDeclaredConstructor().newInstance();
                setSimpleProperty(mnt, "value", new java.math.BigDecimal(value.replace(",", ".")));
                return mnt;
             } catch (Exception e) { return null; }
        }
        return value;
    }

    private String getCellValueAsString(org.apache.poi.ss.usermodel.Cell cell, org.apache.poi.ss.usermodel.DataFormatter formatter) {
        if (cell == null) return "";
        if (cell.getCellType() == org.apache.poi.ss.usermodel.CellType.NUMERIC && org.apache.poi.ss.usermodel.DateUtil.isCellDateFormatted(cell)) {
             return new java.text.SimpleDateFormat("dd/MM/yyyy").format(cell.getDateCellValue());
        }
        return formatter.formatCellValue(cell).trim();
    }

    private String getServiceName(Periode.TypePeriod type) {
        switch (type) {
            case CRS_CPD_OSM: return "crsCpdOsmService";
            case CRS_CPD_VDPL: return "crsCpdVdplService";
            case CRS_DEVPPLTNDPPL: return "crsDevppltndpplService";
            case CRS_SM_TND: return "crsSmTndService";
            case CRS_INR: return "crsInrService";
            case CRS_ALL_TNDCV: return "crsAllTndCvService";
            case CRS_ATT: return "crsAttService";
            case CRS_E_TNDCVE_ENDCV_TTE_E_DEV: return "crsETndcveEndcvTteeDevService";
            case CRS_PPR: return "crsPprService";
            case CRS_Startup: return "crsStartupService";
            case CRS_NEG: return "crsNegService";
            case TR_DOMSC: return "trDomscService";
            case TR_SC: return "trScService";
            case TR_MS: return "trMsService";
            case TR_SM: return "trSmService";
            case TR_IE: return "trIeService";
            case TR_R_CNR: return "trRCnrService";
            case TR_DOM_EE: return "trDomEeService";
            case TR_REM_EE: return "trRemEeService";
            case TR_FP: return "trFpService";
            case TR_RETALL: return "trRetallService";
            case TR_ALL_CPI: return "trAllCpiService";
            case TR_ALL: return "trAllService";
            case TR_ALL_CTI: return "trAllCtiService";
            case TR_DON: return "trDonService";
            case TR_DIV: return "trDivService";
            case TR_CESSLIǪ: return "trCessliqService";
            case TR_RD: return "trRdService";
            case TR_FI: return "trFiService";
            case DC_AVA: return "dcAvaService";
            case DC_MAR: return "dcMarService";
            case DS_IETR: return "dsIetrService";
            case DS_IESuivi: return "dsIeSuiviService";
            case DS_Startup_IE_TR: return "dsStartupIeTrService";
            case DS_Startup_IE_SUIVI: return "dsStartupIeSuiviService";
            default: return "trDonService";
        }
    }

    public String mergeJsonDynamic(String existingJson, String newJson) throws Exception {
        com.fasterxml.jackson.databind.ObjectMapper objectMapper = new com.fasterxml.jackson.databind.ObjectMapper();
        com.fasterxml.jackson.databind.JsonNode existingNode = objectMapper.readTree(existingJson);
        com.fasterxml.jackson.databind.JsonNode newNode = objectMapper.readTree(newJson);

        String[] containers = {"transferts", "extraits", "decomptes", "dossiers", "Transferts", "Extraits", "Decomptes", "Dossiers"};
        
        for (String c : containers) {
            if (newNode.has(c) && existingNode.has(c)) {
                com.fasterxml.jackson.databind.JsonNode newArrayContainer = newNode.get(c);
                com.fasterxml.jackson.databind.node.ObjectNode existingArrayContainer = (com.fasterxml.jackson.databind.node.ObjectNode) existingNode.get(c);
                
                java.util.Iterator<String> fieldNames = newArrayContainer.fieldNames();
                if(fieldNames.hasNext()) {
                    String arrayKey = fieldNames.next();
                    com.fasterxml.jackson.databind.JsonNode newItems = newArrayContainer.get(arrayKey);
                    
                    com.fasterxml.jackson.databind.node.ArrayNode existingArray;
                    if(existingArrayContainer.has(arrayKey) && existingArrayContainer.get(arrayKey).isArray()) {
                        existingArray = (com.fasterxml.jackson.databind.node.ArrayNode) existingArrayContainer.get(arrayKey);
                    } else {
                        existingArray = objectMapper.createArrayNode();
                        existingArrayContainer.set(arrayKey, existingArray);
                    }
                    
                    if(newItems.isArray()) {
                        for(com.fasterxml.jackson.databind.JsonNode item : newItems) {
                            existingArray.add(item);
                        }
                    } else {
                        existingArray.add(newItems);
                    }
                }
                return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingNode);
            }
        }
        
        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingNode);
    }

    public void isolateTransaction(Object document, int entryIndex, int detailIndex) throws Exception {
        String[] containers = {"transferts", "extraits", "decomptes", "dossiers", "Transferts", "Extraits", "Decomptes", "Dossiers"};
        for (String c : containers) {
            java.lang.reflect.Method getter = findGetter(document.getClass(), c);
            if (getter == null) continue;
            Object container = getter.invoke(document);
            if (container == null) continue;

            for (java.lang.reflect.Method m : container.getClass().getMethods()) {
                if (m.getName().startsWith("get") && java.util.List.class.isAssignableFrom(m.getReturnType())) {
                    java.util.List<Object> list = (java.util.List<Object>) m.invoke(container);
                    if (list != null && entryIndex >= 0 && entryIndex < list.size()) {
                        Object targetEntry = list.get(entryIndex);
                        list.clear();
                        list.add(targetEntry);

                        if (detailIndex >= 0) {
                            java.lang.reflect.Method detailsGetter = findGetter(targetEntry.getClass(), "Details");
                            if (detailsGetter == null) detailsGetter = findGetter(targetEntry.getClass(), "details");
                            if (detailsGetter != null) {
                                Object detailsObj = detailsGetter.invoke(targetEntry);
                                if (detailsObj != null) {
                                    for (java.lang.reflect.Method detailListGetter : detailsObj.getClass().getMethods()) {
                                        if (detailListGetter.getName().startsWith("get") && java.util.List.class.isAssignableFrom(detailListGetter.getReturnType())) {
                                            java.util.List<Object> detailList = (java.util.List<Object>) detailListGetter.invoke(detailsObj);
                                            if (detailList != null && detailIndex < detailList.size()) {
                                                Object targetDetail = detailList.get(detailIndex);
                                                detailList.clear();
                                                detailList.add(targetDetail);
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
    }

    public Class<?> getDocumentClass(Periode.TypePeriod type) {
        switch (type) {
            case CRS_CPD_OSM: return com.smi.generated.crs_cpd_osm.Document.class;
            case CRS_CPD_VDPL: return com.smi.generated.crs_cpd_vdpl.Document.class;
            case CRS_DEVPPLTNDPPL: return com.smi.generated.crs_devppltndppl.Document.class;
            case CRS_SM_TND: return com.smi.generated.crs_sm_tnd.Document.class;
            case CRS_INR: return com.smi.generated.crs_inr.Document.class;
            case CRS_ALL_TNDCV: return com.smi.generated.crs_all_tndcv.Document.class;
            case CRS_ATT: return com.smi.generated.crs_att.Document.class;
            case CRS_E_TNDCVE_ENDCV_TTE_E_DEV: return com.smi.generated.crs_e_tndcve_endcv_ttee_dev.Document.class;
            case CRS_PPR: return com.smi.generated.crs_ppr.Document.class;
            case CRS_Startup: return com.smi.generated.crs_startup.Document.class;
            case CRS_NEG: return com.smi.generated.crs_neg.Document.class;
            case TR_DOMSC: return com.smi.generated.tr_domsc.Document.class;
            case TR_SC: return com.smi.generated.tr_sc.Document.class;
            case TR_MS: return com.smi.generated.tr_ms.Document.class;
            case TR_SM: return com.smi.generated.tr_sm.Document.class;
            case TR_IE: return com.smi.generated.tr_ie.Document.class;
            case TR_R_CNR: return com.smi.generated.tr_r_cnr.Document.class;
            case TR_DOM_EE: return com.smi.generated.tr_dom_ee.Document.class;
            case TR_REM_EE: return com.smi.generated.tr_rem_ee.Document.class;
            case TR_FP: return com.smi.generated.tr_fp.Document.class;
            case TR_RETALL: return com.smi.generated.tr_retail.Document.class;
            case TR_ALL_CPI: return com.smi.generated.tr_all_cpi.Document.class;
            case TR_ALL: return com.smi.generated.tr_all_cpi.Document.class;
            case TR_ALL_CTI: return com.smi.generated.tr_all_cti.Document.class;
            case TR_DON: return com.smi.generated.majc_tr_don_0312.Document.class;
            case TR_DIV: return com.smi.generated.tr_div.Document.class;
            case TR_CESSLIǪ: return com.smi.generated.tr_cessliq_v2.Document.class;
            case TR_RD: return com.smi.generated.majc_tr_rd_v3.Document.class;
            case TR_FI: return com.smi.generated.tr_fi_v2.Document.class;
            case DC_AVA: return com.smi.generated.dc_ava.Document.class;
            case DC_MAR: return com.smi.generated.dc_mar.Document.class;
            case DS_IETR: return com.smi.generated.ds_ietr.Document.class;
            case DS_IESuivi: return com.smi.generated.ds_ie_suivi.Document.class;
            case DS_Startup_IE_TR: return com.smi.generated.ds_stratup_ie_tr.Document.class;
            case DS_Startup_IE_SUIVI: return com.smi.generated.ds_startup_ie_suivi.Document.class;
            default: throw new IllegalArgumentException("Unsupported type: " + type);
        }
    }

    public String getXsdPath(Periode.TypePeriod type) {
        switch (type) {
            case CRS_CPD_OSM: return "xsd/XSD_V2012/CRS_V2012/MAJ_CRS-CPD-OSM_0912.xsd";
            case CRS_CPD_VDPL: return "xsd/XSD_V2012/CRS_V2012/CRS-CPD-VDPL_V2.xsd";
            case CRS_DEVPPLTNDPPL: return "xsd/XSD_V2012/CRS_V2012/MAJ_CRS-DEVPPLTNDPPL_2011_0912.xsd";
            case CRS_SM_TND: return "xsd/XSD_V2012/CRS_V2012/CRS-SM-TND_2011_0912.xsd";
            case CRS_INR: return "xsd/XSD_V2012/CRS_V2012/CRS-INR_V3_2011_0912.xsd";
            case CRS_ALL_TNDCV: return "xsd/XSD_V2012/CRS_V2012/MAJ_CRS-ALL-TNDCV_2011_0912.xsd";
            case CRS_ATT: return "xsd/XSD_V2012/CRS_V2012/MAJ_CRS-ATT_2011_0912.xsd";
            case CRS_E_TNDCVE_ENDCV_TTE_E_DEV: return "xsd/XSD_V2012/CRS_V2012/CRS-E-TNDCVE-ENDCV-TTEE-DEV_V3_2011_0912.xsd";
            case CRS_PPR: return "xsd/XSD_V2012/CRS_V2012/CRS-PPR_V3_2011_0912.xsd";
            case CRS_Startup: return "xsd/XSD_V2012/CRS_V2012/MAJ_CRS-STARTUP_2011_0912.xsd";
            case CRS_NEG: return "xsd/XSD_V2012/CRS_V2012/CRS-NEG_V3_2011_0912.xsd";
            case TR_DOMSC: return "xsd/XSD_V2012/TR_V2012/TR-DOMSC.xsd";
            case TR_SC: return "xsd/XSD_V2012/TR_V2012/TR-SC.xsd";
            case TR_MS: return "xsd/XSD_V2012/TR_V2012/TR-MS_V2_0912.xsd";
            case TR_SM: return "xsd/XSD_V2012/TR_V2012/TR-SM.xsd";
            case TR_IE: return "xsd/XSD_V2012/TR_V2012/MAJ_TR-IE_V2.xsd";
            case TR_R_CNR: return "xsd/XSD_V2012/TR_V2012/MAJ_TR-R_CNR_V2.xsd";
            case TR_DOM_EE: return "xsd/XSD_V2012/TR_V2012/TR-DOM-EE_V2.xsd";
            case TR_REM_EE: return "xsd/XSD_V2012/TR_V2012/TR-REM-EE_V3.xsd";
            case TR_FP: return "xsd/XSD_V2012/TR_V2012/TR-FP.xsd";
            case TR_RETALL: return "xsd/XSD_V2012/TR_V2012/TR-RETAIL.xsd";
            case TR_ALL_CPI: return "xsd/XSD_V2012/TR_V2012/TR-ALL-CPI_V2.xsd";
            case TR_ALL: return "xsd/XSD_V2012/TR_V2012/TR-ALL_V2.xsd";
            case TR_ALL_CTI: return "xsd/XSD_V2012/TR_V2012/TR-ALL-CTI_V3.xsd";
            case TR_DON: return "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd";
            case TR_DIV: return "xsd/XSD_V2012/TR_V2012/TR-DIV_V2.xsd";
            case TR_CESSLIǪ: return "xsd/XSD_V2012/TR_V2012/TR-CESSLIQ_V2.xsd";
            case TR_RD: return "xsd/XSD_V2012/TR_V2012/MAJ_TR-RD_V3.xsd";
            case TR_FI: return "xsd/XSD_V2012/TR_V2012/TR-FI_V2.xsd";
            case DC_AVA: return "xsd/XSD_V2012/DC_V2012/DC_AVA_V3.xsd";
            case DC_MAR: return "xsd/XSD_V2012/DC_V2012/DC_MAR_V2.xsd";
            case DS_IETR: return "xsd/XSD_V2012/DS_V2012/DS_IETR_V4.xsd";
            case DS_IESuivi: return "xsd/XSD_V2012/DS_V2012/DS_IESuivi_V3.xsd";
            case DS_Startup_IE_TR: return "xsd/XSD_V2012/DS_V2012/DS_Startup-IE-TR_V3.xsd";
            case DS_Startup_IE_SUIVI: return "xsd/XSD_V2012/DS_V2012/DS_Startup-IE-Suivi_V4.xsd";
            default: throw new IllegalArgumentException("Unsupported type: " + type);
        }
    }
}
