const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const xlsx = require('xlsx');

const xsdDir = "C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\xsd\\XSD_V2012";
const excelDir = "C:\\Users\\user\\Desktop\\DEC\\SMI-Excels";
const backendMappingPath = "C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\backend_mapping.json";
const frontendTsPath = "C:\\Users\\user\\Desktop\\DEC\\DEC-FE-main\\src\\app\\config\\generated-declarations.ts";

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let xsds = [];
walkDir(xsdDir, function(filePath) {
    if(filePath.endsWith('.xsd')) {
        xsds.push(filePath);
    }
});
console.log(`Found ${xsds.length} XSD files.`);

let backendMapping = JSON.parse(fs.readFileSync(backendMappingPath, 'utf8'));

// Extract paths from XSD
function parseXsdSchema(xmlObj) {
    let fields = [];
    
    function traverse(node, currentPath) {
        if (!node) return;
        
        // Find elements sequence or choice
        let elements = [];
        const seqMatches = ['xs:sequence', 'xs:choice', 'xs:all'];
        
        for (let t of seqMatches) {
            if (node[t]) {
                node[t].forEach(seq => {
                    if (seq['xs:element']) {
                        elements.push(...seq['xs:element']);
                    }
                });
            }
        }
        
        if (node['xs:element']) { // if top level or directly complexType nested
            elements.push(...node['xs:element']);
        }
        
        if (elements && elements.length > 0) {
            elements.forEach(el => {
                let name = el['$']['name'];
                let type = el['$']['type'];
                
                let newPath = currentPath ? currentPath + '_' + name : name;
                
                // Skip base Document or EnteteDoc inside Document
                if (name === 'Document' && !currentPath) {
                    newPath = ''; // Usually the root is omitted in mapping paths
                }
                
                if (['CodeIAT', 'DateDec', 'CodeAnnexe', 'PeriodDec', 'AnneDec'].includes(name) && !currentPath.includes("Entete") && !currentPath.includes("Detail")) {
                    // Skip these standard non-repetitive headers outside Entete
                    return;
                }
                
                // Handle complex types
                if (type === 'T_Montant' || type === 'T_MONTANT') {
                    fields.push(newPath + '_Value');
                    fields.push(newPath + '_Ccy');
                } else if (!el['xs:complexType']) {
                    fields.push(newPath); // leaf node
                }
                
                if (el['xs:complexType']) {
                    traverse(el['xs:complexType'][0], newPath);
                }
            });
        }
    }
    
    let rootElements = xmlObj['xs:schema']['xs:element'];
    rootElements.forEach(el => {
        let rootName = el['$']['name'];
        if (el['xs:complexType']) {
             traverse(el['xs:complexType'][0], '');
        }
    });
    
    // Clean leading _ 
    return fields.map(f => f.startsWith('_') ? f.substring(1) : f);
}

const parser = new xml2js.Parser();

function processAll() {
    let tsContent = fs.readFileSync(frontendTsPath, 'utf8');

    for (const [declKey, mappingData] of Object.entries(backendMapping)) {
        console.log(`Processing ${declKey}...`);
        
        // Find corresponding XSD
        let matchName = declKey.replace(/_/g, '-').replace('CRS-', 'CRS').replace('TR-', 'TR');
        if (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV') matchName = 'CRS-E-TNDCVE-ENDCV-TTEE-DEV';
        if (declKey === 'DC_MAR') matchName = 'DC-MAR';
        if (declKey === 'DC_AVA') matchName = 'DC-AVA';
        if (declKey === 'DS_IETR') matchName = 'DS-IETR';
        if (declKey === 'DS_IESuivi') matchName = 'DS-IESuivi';
        if (declKey === 'DS_Startup_IE_TR') matchName = 'DS-Startup-IE-TR';
        if (declKey === 'DS_Startup_IE_SUIVI') matchName = 'DS-Startup-IE-SUIVI';
        if (declKey === 'TR_CESSLI\u01EA') matchName = 'TR-CESSLIQ';
        
        // Find xsd file that loosely matches. E.g. _V2 or _0912
        let searchString = declKey.replace(/_/g, '-');
        let xsdFile = xsds.find(x => x.toLowerCase().includes(searchString.toLowerCase()) || 
                             (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV' && x.includes('TTEE')) ||
                             (declKey === 'TR_CESSLI\u01EA' && x.toLowerCase().includes('cessliq')) ||
                             (declKey === 'DS_Startup_IE_TR' && x.toLowerCase().includes('startup-ie-tr')) ||
                             (declKey === 'DS_Startup_IE_SUIVI' && x.toLowerCase().includes('startup-ie-suivi')) );

        if (!xsdFile) {
            console.warn(`COULD NOT FIND XSD FOR ${declKey}`);
            continue;
        }

        let xml = fs.readFileSync(xsdFile, 'utf8');
        parser.parseString(xml, (err, result) => {
            if (err) {
                console.error("XML parse error on ", xsdFile, err);
                return;
            }
            let xsdPaths = parseXsdSchema(result);
            
            // Filter to only what typically appears in mapping (Entete, Details)
            let fields = xsdPaths.filter(f => f.includes('Entete') || f.includes('Detail') || f.includes('Agence') || f.includes('NbrEcritures'));
            
            // Fix prefixes (remove 'Document_' if present)
            fields = fields.map(f => f.startsWith('Document_') ? f.replace('Document_', '') : f);
            
            // 1. Update JSON Backend Mapping
            backendMapping[declKey].paths = fields;
            
            // 2. Update Excel templates
            let excelFiles = [];
            walkDir(excelDir, function(f) { if (f.endsWith('.xlsx') && !f.includes('~')) excelFiles.push(f); });
            
            let excelFile = excelFiles.find(x => 
                path.basename(x).toLowerCase().replace('_v2','').replace('_v3','')
                .includes(searchString.toLowerCase()) ||
                (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV' && x.includes('TTEE')) ||
                (declKey === 'TR_CESSLI\u01EA' && x.toLowerCase().includes('cessliq'))
            );
            
            if (excelFile) {
                try {
                    let workbook = xlsx.readFile(excelFile, { cellFormula: true, cellStyles: true });
                    let firstSheetName = workbook.SheetNames[0];
                    let worksheet = workbook.Sheets[firstSheetName];
                    
                    // We overwrite the first row explicitly
                    // Be careful not to destroy everything, just overwrite A1, B1, etc.
                    for (let i = 0; i < fields.length; i++) {
                        let cellRef = xlsx.utils.encode_cell({c: i, r: 0});
                        worksheet[cellRef] = { t: 's', v: fields[i] };
                    }
                    
                    // update !ref
                    let range = xlsx.utils.decode_range(worksheet['!ref'] || "A1:A1");
                    if (range.e.c < fields.length - 1) {
                        range.e.c = fields.length - 1;
                        if (range.e.r === 0) range.e.r = 1; // ensure at least 2 rows for the range
                        worksheet['!ref'] = xlsx.utils.encode_range(range);
                    }
                    
                    xlsx.writeFile(workbook, excelFile);
                    console.log(`Updated Excel: ${path.basename(excelFile)} (${fields.length} columns)`);
                } catch(e) {
                     console.error(`Error writing excel ${excelFile}:`, e);
                }
            } else {
                console.warn(`COULD NOT FIND EXCEL FOR ${declKey}`);
            }
            
            // 3. Update Frontend mapping payload
            // This is complex because it's replacing block inside TS file
            // Let's generate the array block and regex replace it.
            let tableColsStr = fields.map(k => {
                // Generate path like `_entete.RefCompte.SoldDebMois.Value` vs `RefOperation.ModReg`
                // We know from the code that Entete is _entete, and Details is direct or we can just leave path as it is, or use a heuristic. 
                // Let's recreate the heuristic the UI needs:
                let guiPath = k;
                if (k.includes('_Entete_')) {
                    guiPath = '_entete.' + k.split('_Entete_')[1].replace(/_/g, '.');
                } else if (k.includes('_Detail_')) {
                    guiPath = k.split('_Detail_')[1].replace(/_/g, '.');
                }
                
                let label = k.split('_').pop();
                if(label === 'Ccy') {
                    label = "Ccy";
                }
                
                return `      {\n            "key": "${k}",\n            "label": "${label}",\n            "path": "${guiPath}"\n      }`;
            }).join(',\n');
            
            let fieldsStr = fields.map(k => {
                let label = k.split('_').pop();
                let type = 'text';
                if(label.includes('Date')) type = 'date';
                if(label === 'Value') type = 'number';
                return `      {\n            "id": "${k}",\n            "name": "${k}",\n            "label": "${label}",\n            "type": "${type}"\n      }`;
            }).join(',\n');
            
            let regex = new RegExp(`('${declKey}': \{[\\s\\S]*?tableColumns:\\s*\\[)([\\s\\S]*?)(\\],[\\s\\S]*?fields:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
            
            if(tsContent.match(regex)) {
                tsContent = tsContent.replace(regex, `$1\n${tableColsStr}\n$3\n${fieldsStr}\n$5`);
                console.log(`Updated Frontend TS for ${declKey}`);
            } else {
                 console.warn(`Could not match Regex for ${declKey} in TS file.`);
            }
        });
    }

    // Write back files
    setTimeout(() => {
        fs.writeFileSync(backendMappingPath, JSON.stringify(backendMapping, null, 2), 'utf8');
        console.log("Updated backend_mapping.json");
        
        fs.writeFileSync(frontendTsPath, tsContent, 'utf8');
        console.log("Updated generated-declarations.ts");
    }, 5000);
}

processAll();
