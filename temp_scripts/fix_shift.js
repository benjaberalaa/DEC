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
        fs.statSync(dirPath).isDirectory() ? walkDir(dirPath, callback) : callback(dirPath);
    });
}
let xsds = []; walkDir(xsdDir, f => { if(f.endsWith('.xsd')) xsds.push(f); });

let backendMapping = JSON.parse(fs.readFileSync(backendMappingPath, 'utf8'));
const parser = new xml2js.Parser();

function parseXsdSchema(xmlObj) {
    let fields = [];
    function traverse(node, currentPath) {
        if (!node) return;
        let elements = [];
        ['xs:sequence', 'xs:choice', 'xs:all'].forEach(t => {
            if (node[t]) node[t].forEach(seq => { if (seq['xs:element']) elements.push(...seq['xs:element']); });
        });
        if (node['xs:element']) elements.push(...node['xs:element']);
        
        if (elements.length > 0) {
            elements.forEach(el => {
                let name = el['$'] ? el['$']['name'] : undefined;
                if (!name) return;
                let type = el['$'] ? el['$']['type'] : undefined;
                let newPath = currentPath ? currentPath + '_' + name : name;
                if (name === 'Document' && !currentPath) newPath = '';
                
                // NO skip here, we'll filter it out reliably later
                if (type === 'T_Montant' || type === 'T_MONTANT') { fields.push(newPath + '_Value'); fields.push(newPath + '_Ccy'); }
                else if (!el['xs:complexType']) fields.push(newPath);
                
                if (el['xs:complexType']) traverse(el['xs:complexType'][0], newPath);
            });
        }
    }
    xmlObj['xs:schema']['xs:element'].forEach(el => { if (el['xs:complexType']) traverse(el['xs:complexType'][0], ''); });
    return fields.map(f => f.startsWith('_') ? f.substring(1) : f);
}

function processDecl(declKey) {
    console.log(`Processing ${declKey}...`);
    let tsContent = fs.readFileSync(frontendTsPath, 'utf8');
    
    let xsdFile = xsds.find(x => {
        let name = path.basename(x).toLowerCase();
        let s = declKey.toLowerCase();
        if(declKey === 'DC_AVA') return name.includes('dc_ava');
        if(declKey === 'DC_MAR') return name.includes('dc_mar');
        if(declKey === 'DS_IETR') return name.includes('ds_ietr');
        if(declKey === 'DS_IESuivi') return name.includes('ds_iesuivi');
        if(declKey === 'TR_R_CNR') return name.includes('tr-r_cnr');
        if(declKey === 'TR_RETALL') return name.includes('tr-retail');
        if(declKey === 'TR_DOMSC') return name.includes('tr-domsc');
        if(declKey === 'DS_Startup_IE_TR') return name.includes('startup-ie-tr');
        if(declKey === 'DS_Startup_IE_SUIVI') return name.includes('startup-ie-suivi');
        
        let altSearch = declKey.replace(/_/g, '-').toLowerCase();
        return name.includes(s) || name.includes(altSearch) || 
               (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV' && name.includes('ttee')) ||
               (declKey === 'TR_CESSLI\u01EA' && name.includes('cessliq'));
    });

    if (!xsdFile) { console.warn(`COULD NOT FIND XSD FOR ${declKey}`); return; }

    let xml = fs.readFileSync(xsdFile, 'utf8');
    parser.parseString(xml, (err, result) => {
        let rawFields = parseXsdSchema(result);
        
        let fields = rawFields
                     .map(f => f.startsWith('Document_') ? f.replace('Document_', '') : f)
                     .filter(f => !f.startsWith('EnteteDoc'))
                     .filter(f => f.includes('Entete') || f.includes('Detail') || f.includes('Agence') || f.includes('NbrEcritures') || f.includes('DecDouane'));
        
        backendMapping[declKey].paths = fields;
        
        // excel
        let excelFiles = [];
        walkDir(excelDir, f => { if(f.endsWith('.xlsx') && !f.includes('~')) excelFiles.push(f); });
        let excelFile = excelFiles.find(x => {
            let bn = path.basename(x).toLowerCase().replace('_v2','').replace('_v3','');
            let s = declKey.replace(/_/g, '-').toLowerCase();
            if(declKey === 'DC_AVA') return bn.includes('dc_ava');
            if(declKey === 'DC_MAR') return bn.includes('dc_mar');
            if(declKey === 'DS_IETR') return bn.includes('ds_ietr');
            if(declKey === 'DS_IESuivi') return bn.includes('ds_iesuivi');
            if(declKey === 'TR_R_CNR') return bn.includes('tr-r_cnr');
            if(declKey === 'TR_RETALL') return bn.includes('tr-retall'); // retail in xsd, retall in excel
            if(declKey === 'TR_DOMSC') return bn.includes('tr-domsc');
            if(declKey === 'DS_Startup_IE_TR') return bn.includes('startup-ie-tr');
            if(declKey === 'DS_Startup_IE_SUIVI') return bn.includes('startup-ie-suivi');
            return bn.includes(s) || (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV' && bn.includes('ttee')) || (declKey === 'TR_CESSLI\u01EA' && bn.includes('cessliq'));
        });

        if (excelFile) {
            try {
                let workbook = xlsx.readFile(excelFile, { cellFormula: true, cellStyles: true });
                let ws = workbook.Sheets[workbook.SheetNames[0]];
                
                // We MUST clear the row entirely because the new path length is smaller (by 3 fields).
                // Or rather we just overwrite the row up to fields.length, and CLEAR the remaining cells in row 1!
                let refObj = xlsx.utils.decode_range(ws['!ref'] || 'A1:A1');
                for (let c = 0; c <= refObj.e.c; c++) {
                    let cellRef = xlsx.utils.encode_cell({c: c, r: 0});
                    if (c < fields.length) {
                        ws[cellRef] = { t: 's', v: fields[c] };
                    } else {
                        delete ws[cellRef]; // remove leftover columns
                    }
                }
                
                let range = xlsx.utils.decode_range(ws['!ref'] || 'A1:A1');
                if (range.e.c !== fields.length - 1) { 
                    range.e.c = fields.length - 1; 
                    if(range.e.r === 0) range.e.r = 1; 
                    ws['!ref'] = xlsx.utils.encode_range(range); 
                }
                xlsx.writeFile(workbook, excelFile);
                console.log('Updated EXCEL for ' + declKey + ' (New cols: ' + fields.length + ')');
            } catch(e) { console.error('Failed to write ' + excelFile, e.message); }
        } else { console.warn('COULD NOT FIND EXCEL FOR ' + declKey); }

        // frontend
        let tableColsStr = fields.map(k => {
            let guiPath = k;
            if (k.includes('_Entete_')) guiPath = '_entete.' + k.split('_Entete_')[1].replace(/_/g, '.');
            else if (k.includes('_Detail_')) guiPath = k.split('_Detail_')[1].replace(/_/g, '.');
            let label = k.split('_').pop(); if(label==='Ccy') label='Ccy';
            return `      {\n            "key": "${k}",\n            "label": "${label}",\n            "path": "${guiPath}"\n      }`;
        }).join(',\n');
        
        let fieldsStr = fields.map(k => {
            let label = k.split('_').pop(); let type = 'text';
            if(label.includes('Date') || label.includes('Dat')) type = 'date'; if(label === 'Value') type = 'number';
            return `      {\n            "id": "${k}",\n            "name": "${k}",\n            "label": "${label}",\n            "type": "${type}"\n      }`;
        }).join(',\n');
        
        let regex = new RegExp(`('${declKey}': \\{[\\s\\S]*?tableColumns:\\s*\\[)([\\s\\S]*?)(\\],[\\s\\S]*?fields:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
        if (tsContent.match(regex)) {
             tsContent = tsContent.replace(regex, `$1\n${tableColsStr}\n$3\n${fieldsStr}\n$5`);
             fs.writeFileSync(frontendTsPath, tsContent, 'utf8');
             console.log('Updated TS for ' + declKey);
        } else {
             console.log('Could not match regex for TS ' + declKey);
        }
    });
}

function runAll() {
    Object.keys(backendMapping).forEach(processDecl);
    setTimeout(() => {
        fs.writeFileSync(backendMappingPath, JSON.stringify(backendMapping, null, 2));
        console.log("Updated backend_mapping.json globally.");
    }, 5000);
}
runAll();
