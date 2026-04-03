const fs = require('fs');

const services = [
"CrsAllTndCvService", "CrsAttService", "CrsCpdOsmService", "CrsCpdVdplService", "CrsDevppltndpplService",
"CrsETndcveEndcvTteeDevService", "CrsInrService", "CrsNegService", "CrsPprService", "CrsSmTndService",
"CrsStartupService", "DcAvaService", "DcMarService", "DsIeSuiviService", "DsIetrService",
"DsStartupIeSuiviService", "DsStartupIeTrService", "TrAllCpiService", "TrAllCtiService",
"TrAllService", "TrCessliqService", "TrDivService", "TrDomEeService", "TrDomscService",
"TrDonService", "TrFiService", "TrFpService", "TrIeService", "TrMsService", "TrRCnrService",
"TrRdService", "TrRemEeService", "TrRetallService", "TrScService", "TrSmService"
];

const enumToMap = [
  "CRS_CPD_OSM", "CRS_CPD_VDPL", "CRS_DEVPPLTNDPPL", "CRS_SM_TND", "CRS_INR", "CRS_ALL_TNDCV", "CRS_ATT",
  "CRS_E_TNDCVE_ENDCV_TTE_E_DEV", "CRS_PPR", "CRS_Startup", "CRS_NEG", "TR_DOMSC", "TR_SC", "TR_MS", "TR_SM", "TR_IE",
  "TR_R_CNR", "TR_DOM_EE", "TR_REM_EE", "TR_FP", "TR_RETALL", "TR_ALL_CPI", "TR_ALL", "TR_ALL_CTI", "TR_DON",
  "TR_DIV", "TR_CESSLIQ", "TR_RD", "TR_FI", "DC_AVA", "DC_MAR", "DS_IETR", "DS_IESuivi", "DS_Startup_IE_TR", "DS_Startup_IE_SUIVI"
];

function normalizeName(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

let code = fs.readFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', 'utf8');

code = code.replace("public class GenericDeclarationService {", "public class GenericDeclarationService {\n\n    @org.springframework.beans.factory.annotation.Autowired\n    private org.springframework.context.ApplicationContext context;\n");

let patch = `
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
`;

for (const type of enumToMap) {
    const normalized = normalizeName(type);
    let matchedSvc = null;
    
    for (const svc of services) {
        if (svc.toLowerCase().includes(normalized) || normalized.includes(svc.toLowerCase().replace('service',''))) {
            matchedSvc = svc; break;
        }
    }
    if (!matchedSvc) {
        if(type === 'TR_IE') matchedSvc = 'TrIeService';
        if(type === 'TR_FI') matchedSvc = 'TrFiService';
        if(type === 'TR_SC') matchedSvc = 'TrScService';
        if(type === 'TR_SM') matchedSvc = 'TrSmService';
        if(type === 'TR_FP') matchedSvc = 'TrFpService';
        if(type === 'TR_RD') matchedSvc = 'TrRdService';
        if(type === 'DC_AVA') matchedSvc = 'DcAvaService';
        if(type === 'DC_MAR') matchedSvc = 'DcMarService';
        if(type === 'DS_IETR') matchedSvc = 'DsIetrService';
        if(type === 'DS_IESuivi') matchedSvc = 'DsIeSuiviService';
        if(type === 'DS_Startup_IE_TR') matchedSvc = 'DsStartupIeTrService';
        if(type === 'DS_Startup_IE_SUIVI') matchedSvc = 'DsStartupIeSuiviService';
        if(type === 'TR_ALL') matchedSvc = 'TrAllService';
        if(type === 'TR_DIV') matchedSvc = 'TrDivService';
    }
    
    if (matchedSvc) {
        const beanName = matchedSvc.charAt(0).toLowerCase() + matchedSvc.slice(1);
        patch += \`            case \${type}:\n                return "\${beanName}";\n\`;
    } else {
        console.warn('Could not match service for: ' + type);
        patch += \`            case \${type}:\n                return "trDonService";\n\`;
    }
}

patch += `            default:
                throw new IllegalArgumentException("Unsupported type for excel: " + type);
        }
    }
}
`;

code = code.replace(/}\s*$/g, patch);
fs.writeFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', code);
console.log('Patched GenericDeclarationService with dynamic Excel switch!');
