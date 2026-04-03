const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const xml2js = require('xml2js');

const BASE_PATH = 'c:\\Users\\user\\Desktop\\DEC';
const EXCELS_DIR = path.join(BASE_PATH, 'SMI-Excels');
const XSDS_DIR = path.join(BASE_PATH, 'XSD_V2012');

const mapping = {
    'CRS_CPD_OSM': { excel: 'CRS\\CRS-CPD-OSM.xlsx', xsd: 'CRS_V2012\\MAJ_CRS-CPD-OSM_0912.xsd' },
    'CRS_CPD_VDPL': { excel: 'CRS\\CRS-CPD-VDPL.xlsx', xsd: 'CRS_V2012\\CRS-CPD-VDPL_V2.xsd' },
    'CRS_DEVPPLTNDPPL': { excel: 'CRS\\CRS-DEVPPLTNDPPL.xlsx', xsd: 'CRS_V2012\\MAJ_CRS-DEVPPLTNDPPL_2011_0912.xsd' },
    'CRS_SM_TND': { excel: 'CRS\\CRS-SM-TND.xlsx', xsd: 'CRS_V2012\\CRS-SM-TND_2011_0912.xsd' },
    'CRS_INR': { excel: 'CRS\\CRS-INR_V3.xlsx', xsd: 'CRS_V2012\\CRS-INR_V3_2011_0912.xsd' },
    'CRS_ALL_TNDCV': { excel: 'CRS\\CRS-ALL-TNDCV.xlsx', xsd: 'CRS_V2012\\MAJ_CRS-ALL-TNDCV_2011_0912.xsd' },
    'CRS_ATT': { excel: 'CRS\\CRS-ATT.xlsx', xsd: 'CRS_V2012\\MAJ_CRS-ATT_2011_0912.xsd' },
    'CRS_E_TNDCVE_ENDCV_TTE_E_DEV': { excel: 'CRS\\CRS-E-TNDCVE-ENDCV-TTEE-DEV.xlsx', xsd: 'CRS_V2012\\CRS-E-TNDCVE-ENDCV-TTEE-DEV_V3_2011_0912.xsd' },
    'CRS_PPR': { excel: 'CRS\\CRS-PPR_V3.xlsx', xsd: 'CRS_V2012\\CRS-PPR_V3_2011_0912.xsd' },
    'CRS_Startup': { excel: 'CRS\\CRS-STARTUP.xlsx', xsd: 'CRS_V2012\\MAJ_CRS-STARTUP_2011_0912.xsd' },
    'CRS_NEG': { excel: 'CRS\\CRS-NEG_V3.xlsx', xsd: 'CRS_V2012\\CRS-NEG_V3_2011_0912.xsd' },

    'TR_DOMSC': { excel: 'TR\\TR-DOMSC.xlsx', xsd: 'TR_V2012\\TR-DOMSC.xsd' },
    'TR_SC': { excel: 'TR\\TR-SC.xlsx', xsd: 'TR_V2012\\TR-SC.xsd' },
    'TR_MS': { excel: 'TR\\TR-MS_V2.xlsx', xsd: 'TR_V2012\\TR-MS_V2_0912.xsd' },
    'TR_SM': { excel: 'TR\\TR-SM.xlsx', xsd: 'TR_V2012\\TR-SM.xsd' },
    'TR_IE': { excel: 'TR\\TR-IE_V2.xlsx', xsd: 'TR_V2012\\MAJ_TR-IE_V2.xsd' },
    'TR_R_CNR': { excel: 'TR\\TR-R_CNR.xlsx', xsd: 'TR_V2012\\MAJ_TR-R_CNR_V2.xsd' },
    'TR_DOM_EE': { excel: 'TR\\TR-DOM-EE_V2.xlsx', xsd: 'TR_V2012\\TR-DOM-EE_V2.xsd' },
    'TR_REM_EE': { excel: 'TR\\TR-REM-EE.xlsx', xsd: 'TR_V2012\\TR-REM-EE_V3.xsd' },
    'TR_FP': { excel: 'TR\\TR-FP.xlsx', xsd: 'TR_V2012\\TR-FP.xsd' },
    'TR_RETALL': { excel: 'TR\\TR-RETALL.xlsx', xsd: 'TR_V2012\\TR-RETAIL.xsd' },
    'TR_ALL_CPI': { excel: 'TR\\TR-ALL-CPI_V2.xlsx', xsd: 'TR_V2012\\TR-ALL-CPI_V2.xsd' },
    'TR_ALL': { excel: 'TR\\TR-ALL_V2.xlsx', xsd: 'TR_V2012\\TR-ALL_V2.xsd' },
    'TR_ALL_CTI': { excel: 'TR\\TR-ALL-CTI_V3.xlsx', xsd: 'TR_V2012\\TR-ALL-CTI_V3.xsd' },
    'TR_DON': { excel: 'TR\\TR-DON.xlsx', xsd: 'TR_V2012\\MAJC_TR-DON_0312_1812.xsd' },
    'TR_DIV': { excel: 'TR\\TR-DIV_V2.xlsx', xsd: 'TR_V2012\\TR-DIV_V2.xsd' },
    'TR_CESSLIQ': { excel: 'TR\\TR-CESSLIQ_V2.xlsx', xsd: 'TR_V2012\\TR-CESSLIQ_V2.xsd' },
    'TR_RD': { excel: 'TR\\TR-RD_V3.xlsx', xsd: 'TR_V2012\\MAJ_TR-RD_V3.xsd' },
    'TR_FI': { excel: 'TR\\TR-FI_V2.xlsx', xsd: 'TR_V2012\\TR-FI_V2.xsd' },

    'DC_AVA': { excel: 'DC\\DC_AVA_V3.xlsx', xsd: 'DC_V2012\\DC_AVA_V3.xsd' },
    'DC_MAR': { excel: 'DC\\DC_MAR_V2.xlsx', xsd: 'DC_V2012\\DC_MAR_V2.xsd' },

    'DS_IETR': { excel: 'DS\\DS_IETR_V3.xlsx', xsd: 'DS_V2012\\DS_IETR_V4.xsd' },
    'DS_IESuivi': { excel: 'DS\\DS_IESuivi_V2.xlsx', xsd: 'DS_V2012\\DS_IESuivi_V3.xsd' },
    'DS_Startup_IE_TR': { excel: 'DS\\DS_Startup-IE-TR_V2.xlsx', xsd: 'DS_V2012\\DS_Startup-IE-TR_V3.xsd' },
    'DS_Startup_IE_SUIVI': { excel: 'DS\\DS_Startup-IE-Suivi_V3.xlsx', xsd: 'DS_V2012\\DS_Startup-IE-Suivi_V4.xsd' }
};

const headerOverrides = {
    'raisonsoc': 'RaisSociale',
    'raisonsociale': 'RaisSociale',
    'ribcompte': 'Rib',
    'etat': 'EtatCpte',
    'soldedeb': 'SoldDebMois',
    'soldefin': 'SoldfinMois',
    'mntdev': 'MntOpDev',
    'mnttrsf': 'MntTransDev',
    'date': 'DateMvt',
    'datetrans': 'DateMvt',
    'dateop': 'DateMvt',
    'datemvt': 'DateMvt',
    'natop': 'NatOp',
    'natureop': 'NatOp',
    'codidentifiant': 'CodeIdentifiant',
    'typeidentifiant': 'TypeIdentifiant',
    'typeop': 'TypeOp',
    'nbrecritures': 'NbrEcritures',
    'perioddec': 'PeriodDec'
};

const parser = new xml2js.Parser();

async function parseXsd(xsdPath) {
    const fullXsdPath = path.join(XSDS_DIR, xsdPath);
    if (!fs.existsSync(fullXsdPath)) {
        console.warn(`XSD not found: ${fullXsdPath}`);
        return {};
    }
    const content = fs.readFileSync(fullXsdPath, 'utf8');
    const result = await parser.parseStringPromise(content);
    const elementMap = {};

    function traverse(node, currentPath = []) {
        if (!node) return;

        if (node['xs:sequence']) node['xs:sequence'].forEach(s => traverse(s, currentPath));
        if (node['xs:choice']) node['xs:choice'].forEach(c => traverse(c, currentPath));
        if (node['xs:complexType']) node['xs:complexType'].forEach(ct => traverse(ct, currentPath));
        if (node['xs:simpleContent']) node['xs:simpleContent'].forEach(sc => traverse(sc, currentPath));
        if (node['xs:extension']) node['xs:extension'].forEach(ext => traverse(ext, currentPath));
        
        if (node['xs:element']) {
            node['xs:element'].forEach(el => {
                const name = el.$.name;
                const doc = el['xs:annotation']?.[0]?.['xs:documentation']?.[0]?._ || name;
                const type = el.$.type || 'text';
                const newPath = [...currentPath, name];
                
                // Keep Track of all occurrences to handle duplicates (like Rib in Entete and Detail)
                const lowerName = name.toLowerCase();
                if (!elementMap[lowerName]) elementMap[lowerName] = [];
                elementMap[lowerName].push({
                    name: name,
                    label: doc.trim(),
                    path: newPath.join('_'),
                    type: type.includes('Date') ? 'date' : (type.includes('decimal') || type.includes('Montant') ? 'number' : 'text')
                });

                if (el['xs:complexType']) {
                    traverse(el['xs:complexType'][0], newPath);
                }
            });
        }
        
        if (node['xs:attribute']) {
            node['xs:attribute'].forEach(attr => {
                const name = attr.$.name;
                const parent = currentPath[currentPath.length - 1];
                const newPath = [...currentPath, name];
                const lowerName = `${parent.toLowerCase()}_${name.toLowerCase()}`;
                if (!elementMap[lowerName]) elementMap[lowerName] = [];
                elementMap[lowerName].push({
                    name: name,
                    label: name,
                    path: newPath.join('_'),
                    type: 'text'
                });
            });
        }
    }

    const schema = result['xs:schema'];
    const rootElements = schema['xs:element'] || [];
    rootElements.forEach(root => {
        if (root.$.name === 'Document') {
            traverse(root['xs:complexType'][0], []);
        }
    });

    return elementMap;
}

function getExcelHeaders(excelPath) {
    const fullPath = path.join(EXCELS_DIR, excelPath);
    const workbook = XLSX.readFile(fullPath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Sheet 1
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    if (jsonData.length > 0) {
        for (const row of jsonData) {
            if (row && row.length > 0 && row.some(cell => cell)) {
                return row.map(h => String(h || '').trim()).filter(h => h.length > 0);
            }
        }
    }
    return [];
}

async function run() {
    function formatFrontendPath(fullPath) {
        if (!fullPath || !Array.isArray(fullPath)) return '';
        
        // Find indices for Entete and Detail
        const detailIndex = fullPath.indexOf('Detail');
        const enteteIndex = fullPath.indexOf('Entete');

        if (detailIndex !== -1) {
            // Field is in a Detail container, path should be relative to Detail
            return fullPath.slice(detailIndex + 1).join('.');
        } else if (enteteIndex !== -1) {
            // Field is in an Entete container, path should start with _entete.
            return '_entete.' + fullPath.slice(enteteIndex + 1).join('.');
        }

        // Fallback: strip "Document" and first container if too deep, or just join
        let sliceIdx = 0;
        if (fullPath[0] === 'Document') sliceIdx = 1;
        // If it starts with common containers like Extraits, Transferts, etc.
        const containers = ['Extraits', 'Transferts', 'Decomptes', 'Dossiers'];
        if (containers.includes(fullPath[sliceIdx])) sliceIdx++;
        // If it has something like Extrait, Transfert, Decompte, Dossier
        const items = ['Extrait', 'Transfert', 'Decompte', 'Dossier'];
        if (items.includes(fullPath[sliceIdx])) sliceIdx++;

        return fullPath.slice(sliceIdx).join('.');
    }

    const finalConfigs = {};

    for (const [type, info] of Object.entries(mapping)) {
        console.log(`Processing ${type}...`);
        try {
            const excelHeaders = getExcelHeaders(info.excel);
            const xsdElementGroups = await parseXsd(info.xsd);
            
            const tableColumns = [];
            const fields = [];
            const seenKeys = new Set();
            let lastElement = null;
            let currentPathScope = 'Entete';

            excelHeaders.forEach((header, index) => {
                const originalHeaderLower = header.toLowerCase();
                const mappedName = headerOverrides[originalHeaderLower] || header;
                const mappedNameLower = mappedName.toLowerCase();
                
                if (mappedNameLower === 'natmvtop' || mappedNameLower === 'mntopdev' || mappedNameLower === 'datemvt' || mappedNameLower === 'libop' || mappedNameLower === 'mntop' || mappedNameLower === 'mntdinop' || mappedNameLower === 'natop' || mappedNameLower === 'modreg' || (mappedNameLower === 'rib' && seenKeys.has('Extraits_Extrait_Entete_RefCompte_Rib'))) {
                    currentPathScope = 'Details_Detail';
                }

                let candidates = xsdElementGroups[mappedNameLower] || [];
                let element = null;

                if (candidates.length > 0) {
                    element = candidates.find(e => e.path.includes(currentPathScope)) || candidates[0];
                } else {
                    const allElements = [].concat(...Object.values(xsdElementGroups));
                    const fuzzyCandidates = allElements.filter(e => e.path.toLowerCase().includes(mappedNameLower));
                    if (fuzzyCandidates.length > 0) {
                        element = fuzzyCandidates.find(e => e.path.includes(currentPathScope)) || fuzzyCandidates[0];
                    }
                }

                if (mappedNameLower === 'ccy' && lastElement) {
                   const key = `${lastElement.path}_Ccy`;
                   if (!seenKeys.has(key)) {
                       const pathParts = lastElement.path.split('_');
                       const fePath = formatFrontendPath([...pathParts, 'Ccy']);
                       tableColumns.push({ key: key, label: `${header} (${lastElement.label})`, path: fePath });
                       fields.push({ id: key, name: key, label: `${header} (${lastElement.label})`, type: 'text' });
                       seenKeys.add(key);
                   }
                } else if (element) {
                    const key = element.path;
                    const nextHeader = excelHeaders[index + 1]?.toLowerCase();
                    const isMontant = element.path.includes('Mnt') || element.path.includes('Sold') || element.path.includes('Cv') || element.path.includes('MntOp');
                    
                    const finalKeyBase = (nextHeader === 'ccy' || isMontant) ? `${key}_Value` : key;
                    const finalKey = seenKeys.has(finalKeyBase) ? `${finalKeyBase}_${index}` : finalKeyBase;
                    
                    const pathParts = element.path.split('_');
                    if (nextHeader === 'ccy' || isMontant) pathParts.push('Value');
                    const fePath = formatFrontendPath(pathParts);

                    tableColumns.push({ key: finalKey, label: header, path: fePath });
                    fields.push({ id: finalKey, name: finalKey, label: header, type: element.type });
                    seenKeys.add(finalKey);
                    lastElement = element;
                } else {
                    const key = `${header}_${index}`;
                    tableColumns.push({ key: key, label: header, path: key });
                    fields.push({ id: key, name: key, label: header, type: 'text' });
                    seenKeys.add(key);
                    lastElement = null;
                }
            });

            finalConfigs[type] = {
                type: type,
                label: `Déclaration ${type}`,
                codeAnnexe: info.excel.split('\\').pop().replace('.xlsx', ''),
                codeIAT: '01',
                apiPath: 'api/periodes/add-data',
                tableColumns: tableColumns,
                fields: fields,
                payloadMapper: `(formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }`
            };
        } catch (err) {
            console.error(`Error processing ${type}: ${err.message}`, err);
        }
    }

    const fePath = path.join(BASE_PATH, 'DEC-FE-main', 'src', 'app', 'config', 'generated-declarations.ts');
    let output = 'export const GENERATED_CONFIGS: any = {\n';
    for (const [type, config] of Object.entries(finalConfigs)) {
        output += `  '${type}': {\n`;
        output += `    type: '${config.type}',\n`;
        output += `    label: '${config.label}',\n`;
        output += `    codeAnnexe: '${config.codeAnnexe}',\n`;
        output += `    codeIAT: '${config.codeIAT}',\n`;
        output += `    apiPath: '${config.apiPath}',\n`;
        output += `    tableColumns: ${JSON.stringify(config.tableColumns, null, 6)},\n`;
        output += `    fields: ${JSON.stringify(config.fields, null, 6)},\n`;
        output += `    payloadMapper: ${config.payloadMapper}\n`;
        output += `  },\n`;
    }
    output += '};\n';
    fs.writeFileSync(fePath, output);
    console.log('generated-declarations.ts updated!');

    const bePath = path.join(BASE_PATH, 'DEC-CORE-dev', 'src', 'main', 'resources', 'backend_mapping.json');
    const backendMapping = {};
    for (const [type, config] of Object.entries(finalConfigs)) {
        backendMapping[type] = {
            codeAnnexe: config.codeAnnexe,
            paths: config.tableColumns
                .filter(col => col.key && col.key !== 'id_display' && col.key !== 'errors')
                .map(col => col.key)
        };
    }
    fs.writeFileSync(bePath, JSON.stringify(backendMapping, null, 2));
    console.log('backend_mapping.json updated!');
}

run();
