const fs = require('fs');
const path = require('path');

// 1. GenericDeclarationService
let codeGeneric = fs.readFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', 'utf8');

if (!codeGeneric.includes('@org.springframework.beans.factory.annotation.Autowired')) {
    codeGeneric = codeGeneric.replace("public class GenericDeclarationService {", "public class GenericDeclarationService {\\n\\n    @org.springframework.beans.factory.annotation.Autowired\\n    private org.springframework.context.ApplicationContext context;\\n");

    const enumToMap = [
      "CRS_CPD_OSM", "CRS_CPD_VDPL", "CRS_DEVPPLTNDPPL", "CRS_SM_TND", "CRS_INR", "CRS_ALL_TNDCV", "CRS_ATT",
      "CRS_E_TNDCVE_ENDCV_TTE_E_DEV", "CRS_PPR", "CRS_Startup", "CRS_NEG", "TR_DOMSC", "TR_SC", "TR_MS", "TR_SM", "TR_IE",
      "TR_R_CNR", "TR_DOM_EE", "TR_REM_EE", "TR_FP", "TR_RETALL", "TR_ALL_CPI", "TR_ALL", "TR_ALL_CTI", "TR_DON",
      "TR_DIV", "TR_CESSLIQ", "TR_RD", "TR_FI", "DC_AVA", "DC_MAR", "DS_IETR", "DS_IESuivi", "DS_Startup_IE_TR", "DS_Startup_IE_SUIVI"
    ];

    let patch = \`
    public String readExcelToJsonDynamic(Periode.TypePeriod type, org.springframework.web.multipart.MultipartFile excelFile) throws Exception {
        String beanName = getServiceName(type);
        Object serviceBean = context.getBean(beanName);
        java.lang.reflect.Method method = serviceBean.getClass().getMethod("readExcelFile", org.springframework.web.multipart.MultipartFile.class);
        Object document = method.invoke(serviceBean, excelFile);
        com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
        return mapper.writeValueAsString(document);
    }

    private String getServiceName(Periode.TypePeriod type) {
        switch (type) {
\`;

    const services = ["CrsAllTndCvService", "CrsAttService", "CrsCpdOsmService", "CrsCpdVdplService", "CrsDevppltndpplService",
    "CrsETndcveEndcvTteeDevService", "CrsInrService", "CrsNegService", "CrsPprService", "CrsSmTndService",
    "CrsStartupService", "DcAvaService", "DcMarService", "DsIeSuiviService", "DsIetrService",
    "DsStartupIeSuiviService", "DsStartupIeTrService", "TrAllCpiService", "TrAllCtiService",
    "TrAllService", "TrCessliqService", "TrDivService", "TrDomEeService", "TrDomscService",
    "TrDonService", "TrFiService", "TrFpService", "TrIeService", "TrMsService", "TrRCnrService",
    "TrRdService", "TrRemEeService", "TrRetallService", "TrScService", "TrSmService"];
    
    for (let t of enumToMap) {
        let normalized = t.toLowerCase().replace(/[^a-z0-9]/g, '');
        let matchedSvc = null;
        for (let svc of services) {
            if (svc.toLowerCase().includes(normalized) || normalized.includes(svc.toLowerCase().replace('service',''))) {
                matchedSvc = svc; break;
            }
        }
        if (!matchedSvc) {
            if(t === 'TR_IE') matchedSvc = 'TrIeService';
            if(t === 'TR_FI') matchedSvc = 'TrFiService';
            if(t === 'TR_SC') matchedSvc = 'TrScService';
            if(t === 'TR_SM') matchedSvc = 'TrSmService';
            if(t === 'TR_FP') matchedSvc = 'TrFpService';
            if(t === 'TR_RD') matchedSvc = 'TrRdService';
            if(t === 'DC_AVA') matchedSvc = 'DcAvaService';
            if(t === 'DC_MAR') matchedSvc = 'DcMarService';
            if(t === 'DS_IETR') matchedSvc = 'DsIetrService';
            if(t === 'DS_IESuivi') matchedSvc = 'DsIeSuiviService';
            if(t === 'DS_Startup_IE_TR') matchedSvc = 'DsStartupIeTrService';
            if(t === 'DS_Startup_IE_SUIVI') matchedSvc = 'DsStartupIeSuiviService';
            if(t === 'TR_ALL') matchedSvc = 'TrAllService';
            if(t === 'TR_DIV') matchedSvc = 'TrDivService';
        }
        if (matchedSvc) {
            let bean = matchedSvc.charAt(0).toLowerCase() + matchedSvc.slice(1);
            patch += '            case ' + t + ':\\n                return "' + bean + '";\\n';
        } else {
            patch += '            case ' + t + ':\\n                return "trDonService";\\n';
        }
    }
    patch += \`
            default:
                throw new IllegalArgumentException("Unsupported type for excel: " + type);
        }
    }
}
\`;

    codeGeneric = codeGeneric.replace(/}\\s*$/, patch);
    fs.writeFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', codeGeneric);
    console.log('Fixed GenericDeclarationService');
}

// 2. XsdValidator
let codeObj = fs.readFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/XsdValidator.java', 'utf8');
codeObj = codeObj.replace("public void validate(Document document, String xsdPath, List<ValidationError> errors) {", "public void validate(Object document, String xsdPath, List<ValidationError> errors) {");
codeObj = codeObj.replace("JAXBContext jaxbContext = JAXBContext.newInstance(Document.class);", "JAXBContext jaxbContext = JAXBContext.newInstance(document.getClass());");
codeObj = codeObj.replace('throw new IllegalArgumentException("L\\'objet Document à valider ne peut pas être null.");', 'throw new IllegalArgumentException("L\\'objet à valider ne peut pas être null.");');
codeObj = codeObj.replace(/String modifiedXmlContent = xmlContent\\.replaceFirst\\([\\s\\S]*?\\);/, 'String modifiedXmlContent = xmlContent;');
fs.writeFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/XsdValidator.java', codeObj);
console.log('Fixed XsdValidator');


// 3. PeriodeController
let codeCtrl = fs.readFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/controllers/PeriodeController.java', 'utf8');

codeCtrl = codeCtrl.replace(/@Autowired\\s+private\\s+TrDonService\\s+excelToJsonService;/g, '@Autowired\\n    private com.smi.declarations.services.GenericDeclarationService genericDeclarationService;');
codeCtrl = codeCtrl.replace(/@Autowired\\s+private\\s+TrDonService\\s+trDonService;/g, '');
codeCtrl = codeCtrl.replace(/import com\\.smi\\.generated\\.majc_tr_don_0312\\.Document;/g, '');

codeCtrl = codeCtrl.replace(/Document document = excelToJsonService\\.readExcelFile\\(excelFile\\);\\s*String jsonData = excelToJsonService\\.convertDocumentToJson\\(document\\);/g, 'String jsonData = genericDeclarationService.readExcelToJsonDynamic(periode.getTypePeriode(), excelFile);');
codeCtrl = codeCtrl.replace(/periode\\.setDetails\\(periode\\.getDetails\\(\\) == null \\? jsonData : mergeJson\\(periode\\.getDetails\\(\\), jsonData\\)\\);/g, 'periode.setDetails(periode.getDetails() == null ? jsonData : genericDeclarationService.mergeJsonDynamic(periode.getDetails(), jsonData));');

codeCtrl = codeCtrl.replace(/String xsdPath = "xsd[\\\\\\/]XSD_V2012[\\\\\\/]TR_V2012[\\\\\\/]MAJC_TR-DON_0312_1812\\.xsd";/g, 'String xsdPath = genericDeclarationService.getXsdPath(periode.getTypePeriode());');
codeCtrl = codeCtrl.replace(/Document document = excelToJsonService\\.convertJsonToDocument\\(periode\\.getDetails\\(\\)\\);/g, 'Class<?> clazz = genericDeclarationService.getDocumentClass(periode.getTypePeriode());\\n            Object document = new com.fasterxml.jackson.databind.ObjectMapper().readValue(periode.getDetails(), clazz);');

codeCtrl = codeCtrl.replace(/Periode updatedPeriod = trDonService\\.addTransactionToPeriod\\(id, transfert\\);/g, 
\`Periode periode = periodeRepository.findById(id).orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Période introuvable avec l'ID : " + id));
            String existingDetails = periode.getDetails();
            String updatedDetails = (existingDetails == null || existingDetails.isEmpty())
                    ? transfert.toString()
                    : genericDeclarationService.mergeJsonDynamic(existingDetails, transfert.toString());
            periode.setDetails(updatedDetails);
            Periode updatedPeriod = periodeRepository.save(periode);\`);

codeCtrl = codeCtrl.replace(/String\\s+xsdPath\\s*=\\s*"xsd[\\\\\\/]XSD_V2012[\\\\\\/]TR_V2012[\\\\\\/]MAJC_TR-DON_0312_1812\\.xsd";/g, 
'String type = String.valueOf(operationData.get("typePeriode")); Periode.TypePeriod tp = Periode.TypePeriod.valueOf(type); String xsdPath = genericDeclarationService.getXsdPath(tp);');

codeCtrl = codeCtrl.replace(/Document document = excelToJsonService\\.convertOperationJsonToDocument\\(operationJson\\);/g, 
'Class<?> clazz = genericDeclarationService.getDocumentClass(tp); Object document = new com.fasterxml.jackson.databind.ObjectMapper().readValue(operationJson, clazz);');

fs.writeFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/controllers/PeriodeController.java', codeCtrl);
console.log('Fixed PeriodeController');
