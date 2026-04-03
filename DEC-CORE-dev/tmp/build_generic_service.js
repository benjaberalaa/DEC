const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\target\\generated-sources\\jaxb';
const xsdDir = 'c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\xsd';

// Utility to recursively find XSD files
function findXsdFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findXsdFiles(fullPath, fileList);
    } else if (fullPath.endsWith('.xsd')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allXsds = findXsdFiles(xsdDir);

const enumToMap = [
  "CRS_CPD_OSM", "CRS_CPD_VDPL", "CRS_DEVPPLTNDPPL", "CRS_SM_TND", "CRS_INR", "CRS_ALL_TNDCV", "CRS_ATT",
  "CRS_E_TNDCVE_ENDCV_TTE_E_DEV", "CRS_PPR", "CRS_Startup", "CRS_NEG", "TR_DOMSC", "TR_SC", "TR_MS", "TR_SM", "TR_IE",
  "TR_R_CNR", "TR_DOM_EE", "TR_REM_EE", "TR_FP", "TR_RETALL", "TR_ALL_CPI", "TR_ALL", "TR_ALL_CTI", "TR_DON",
  "TR_DIV", "TR_CESSLIQ", "TR_RD", "TR_FI", "DC_AVA", "DC_MAR", "DS_IETR", "DS_IESuivi", "DS_Startup_IE_TR", "DS_Startup_IE_SUIVI"
];

let javaCode = `package com.smi.declarations.services;

import com.smi.declarations.entities.Periode;
import org.springframework.stereotype.Service;

@Service
public class GenericDeclarationService {

    public Class<?> getDocumentClass(Periode.TypePeriod type) {
        switch (type) {
`;

// Map enum to generated package
const packages = fs.readdirSync(targetDir);

// Mapping heuristics
function normalizeName(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const packageMap = {};
for (const p of packages) {
  packageMap[normalizeName(p)] = p;
  // Tr-don has majc_tr_don_0312
  if(p.includes('tr_don')) packageMap[normalizeName('TR_DON')] = p;
  if(p.includes('crs_all_tndcv')) packageMap[normalizeName('CRS_ALL_TNDCV')] = p;
}

for (const type of enumToMap) {
  const normalized = normalizeName(type);
  let pkg = packageMap[normalized];
  if (!pkg) {
      if(type === 'TR_CESSLIQ') pkg = 'tr_cessliq'; // CESSLIQ is cessliq
      if(type === 'TR_FI') pkg = 'tr_fi'; 
      if(type === 'DS_Startup_IE_TR') pkg = 'ds_stratup_ie_tr'; // Check for stratup
      if(type === 'CRS_Startup') pkg = 'crs_startup';
      if(type === 'DS_IESuivi') pkg = 'ds_ie_suivi';
      if(type === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV') pkg = 'crs_e_tndcve_endcv_ttee_dev'; // tte_e vs ttee
  }
  
  if(pkg) {
    javaCode += `            case ${type}:\n`;
    javaCode += `                return com.smi.generated.${pkg}.Document.class;\n`;
  } else {
    // try to fall back
    for(const k of Object.keys(packageMap)) {
        if(k.includes(normalized) || normalized.includes(k)) {
            pkg = packageMap[k];
            javaCode += `            case ${type}:\n`;
            javaCode += `                return com.smi.generated.${pkg}.Document.class;\n`;
            break;
        }
    }
    if(!pkg) {
        console.warn('Cannot map package for type ' + type);
        javaCode += `            case ${type}:\n`;
        javaCode += `                return com.smi.generated.majc_tr_don_0312.Document.class; // TODO fallback\n`;
    }
  }
}

javaCode += `            default:
                throw new IllegalArgumentException("Unsupported type: " + type);
        }
    }

    public String getXsdPath(Periode.TypePeriod type) {
        switch (type) {
`;

for (const type of enumToMap) {
    const normalized = normalizeName(type);
    let matchedXsd = null;
    
    // Explicit matches
    if(type === 'TR_DON') matchedXsd = allXsds.find(x => x.includes('MAJC_TR-DON'));
    else if(type === 'CRS_CPD_OSM') matchedXsd = allXsds.find(x => x.includes('CRS-CPD-OSM'));
    else {
        // fuzzy match
        for(const xsd of allXsds) {
            const basename = path.basename(xsd);
            if(normalizeName(basename).includes(normalized)) {
                matchedXsd = xsd;
                break;
            }
        }
        if(!matchedXsd) { // Try parts
           for(const xsd of allXsds) {
               const basename = path.basename(xsd);
               if(basename.toLowerCase().includes(type.split('_')[1]?.toLowerCase())) {
                   matchedXsd = xsd; break;
               }
           } 
        }
    }
    
    if(matchedXsd) {
        const relPath = matchedXsd.split('src\\main\\resources\\')[1].replace(/\\\\/g, '/');
        javaCode += `            case ${type}:\n`;
        javaCode += `                return "${relPath}";\n`;
    } else {
        console.warn('Cannot map XSD for type ' + type);
         javaCode += `            case ${type}:\n`;
         javaCode += `                return "xsd/XSD_V2012/TR_V2012/MAJC_TR-DON_0312_1812.xsd"; // fallback\n`;
    }
}

javaCode += `            default:
                throw new IllegalArgumentException("Unsupported type: " + type);
        }
    }
}
`;

fs.writeFileSync('c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\java\\com\\smi\\declarations\\services\\GenericDeclarationService.java', javaCode);
console.log('Successfully generated GenericDeclarationService.java !');
