const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const xlsx = require('xlsx');

const xsdDir = "C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\xsd\\XSD_V2012";
const excelDir = "C:\\Users\\user\\Desktop\\DEC\\SMI-Excels";
const backendMappingPath = "C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\backend_mapping.json";
const frontendTsPath = "C:\\Users\\user\\Desktop\\DEC\\DEC-FE-main\\src\\app\\config\\generated-declarations.ts";

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath, callback);
        else callback(dirPath);
    });
}
let xsds = []; walkDir(xsdDir, f => { if(f.endsWith('.xsd')) xsds.push(f); });
fs.readdirSync("C:\\Users\\user\\Desktop\\DEC").forEach(f => {
    if ((f.startsWith('G1_') || f.startsWith('G2_')) && f.endsWith('.xsd')) xsds.push(path.join("C:\\Users\\user\\Desktop\\DEC", f));
});

let backendMapping = JSON.parse(fs.readFileSync(backendMappingPath, 'utf8'));
const parser = new xml2js.Parser();

function toCamelCase(str) {
    // Better camelCase logic for VUC fields
    return str.replace(/_([a-z0-9])/g, (_, p1) => p1.toUpperCase());
}

function parseXsdSchema(xmlObj, isVuc = false) {
    let fields = [];
    function traverse(node, currentPath) {
        if (!node) return;
        let elements = [];
        ['xs:sequence', 'xs:choice', 'xs:all'].forEach(t => {
            if (node[t]) node[t].forEach(seq => { 
                if (seq['xs:element']) elements.push(...seq['xs:element']); 
                ['xs:sequence', 'xs:choice', 'xs:all'].forEach(subT => {
                    if (seq[subT]) seq[subT].forEach(sub => {
                        if (sub['xs:element']) elements.push(...sub['xs:element']);
                    });
                });
            });
        });
        if (node['xs:element']) elements.push(...node['xs:element']);
        
        if (node['xs:attribute']) {
            node['xs:attribute'].forEach(attr => {
                let name = attr['$']['name'];
                if (isVuc) name = toCamelCase(name);
                fields.push(currentPath ? currentPath + '_' + name : name);
            });
        }

        if (elements.length > 0) {
            elements.forEach(el => {
                let name = el['$'] ? el['$']['name'] : undefined;
                if (!name) return;
                let fieldName = isVuc ? toCamelCase(name) : name;
                
                // FLATTEN Identity branches for VUC Excel/Front ease-of-use
                let newPath = currentPath;
                if (isVuc && (fieldName.includes('depositorIdentification') || fieldName.includes('contactDetails'))) {
                    newPath = currentPath;
                } else {
                    newPath = currentPath ? currentPath + '_' + fieldName : fieldName;
                }
                
                if (fieldName === 'Document' && !currentPath) newPath = '';
                if (!isVuc && ['CodeIAT', 'DateDec', 'CodeAnnexe', 'PeriodDec', 'AnneDec'].includes(fieldName) && !currentPath.includes('Entete') && !currentPath.includes('Detail')) return;
                
                let type = el['$'] ? el['$']['type'] : undefined;
                if (type === 'T_Montant' || type === 'T_MONTANT' || type === 'TMontant') { 
                    fields.push(newPath + '_Value'); 
                    fields.push(newPath + '_Ccy'); 
                }
                else if (!el['xs:complexType']) fields.push(newPath);
                
                if (el['xs:complexType']) traverse(el['xs:complexType'][0], newPath);
            });
        }
    }
    
    if (xmlObj['xs:schema'] && xmlObj['xs:schema']['xs:element']) {
        xmlObj['xs:schema']['xs:element'].forEach(el => { 
            if (el['xs:complexType']) traverse(el['xs:complexType'][0], isVuc ? '' : el['$']['name']); 
        });
    }
    return fields.map(f => f.startsWith('_') ? f.substring(1) : f);
}

function generateLabel(key) {
    let lastPart = key.split('_').pop();
    const custom = {
        'vucId': 'ID VUC', 'declarationType': 'Type Declaration', 'yearDeclaration': 'Annee', 'groupType': 'Type Groupe',
        'depositorId': 'ID Deposant', 'actionType': 'Action', 'personType': 'Type Personne', 'firstName': 'Prenom',
        'lastName': 'Nom', 'cinNum': 'CIN/Pass', 'companyName': 'Entreprise', 'rne': 'RNE', 'accountsCount': 'Nb Deposants',
        'accountNumber': 'Numero Compte', 'currency': 'Devise', 'Value': 'Valeur', 'Ccy': 'Devise'
    };
    if (custom[lastPart]) return custom[lastPart];
    return lastPart.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase());
}

function vucFieldPriority(path) {
    const key = path.split('_').pop().toLowerCase();
    const priorities = {
        'vucid': 10, 'declarationtype': 20, 'yeardeclaration': 30, 'grouptype': 40,
        'depositorid': 50, 'actiontype': 60, 'persontype': 70,
        'firstname': 80, 'lastname': 90, 'cinnum': 100, 'companyname': 110, 'rne': 120,
        'accountscount': 130, 'accountnumber': 140
    };
    return priorities[key] || 1000;
}

function processDecl(declKey) {
    const isVuc = declKey.startsWith('VUC_');
    if (!isVuc) return; // NEVER TOUCH NON-VUC
    
    console.log(`Processing ${declKey}...`);
    let tsContent = fs.readFileSync(frontendTsPath, 'utf8');

    let xsdFile = xsds.find(x => {
        let name = path.basename(x).toLowerCase();
        if (isVuc) {
            if (declKey.includes('_G1_')) return name.startsWith('g1_');
            if (declKey.includes('_G2_')) return name.startsWith('g2_');
        }
        return false;
    });
    if (!xsdFile) return;

    let xml = fs.readFileSync(xsdFile, 'utf8');
    xml = xml.substring(xml.indexOf('<')); 

    parser.parseString(xml, (err, result) => {
        if (err || !result) return;
        let rawFields = parseXsdSchema(result, isVuc);
        let fields = [];
        
        rawFields = rawFields.filter(f => !['depositors', 'depositor', 'accountsIdentification', 'account', 'contactDetails', 'depositorIdentificationPp', 'depositorIdentificationPm'].some(c => f.endsWith('_' + c) || f === c));
        rawFields.sort((a,b) => vucFieldPriority(a) - vucFieldPriority(b));
        
        let seen = new Set();
        rawFields.forEach(f => {
            let key = f.split('_').pop();
            if (!seen.has(key)) { seen.add(key); fields.push(f); }
        });
        
        fields = fields.map(f => 'transferts_transfert_details_detail_' + f);
        backendMapping[declKey].paths = fields;
        
        // excel
        let excelFiles = []; walkDir(excelDir, f => { if(f.endsWith('.xlsx') && !f.includes('~')) excelFiles.push(f); });
        let excelFile = excelFiles.find(x => {
            let bn = path.basename(x).toLowerCase().replace(/_v2/g,'').replace(/_v3/g,'').replace(/-/g,'_');
            let suffix = declKey.split('_').slice(1).join('_').toLowerCase(); 
            return bn.includes(suffix) || bn.includes(suffix.replace(/_/g, '-'));
        });

        if (excelFile) {
            try {
                let workbook = xlsx.readFile(excelFile);
                let ws = workbook.Sheets[workbook.SheetNames[0]];
                let excelHeaders = fields.map(f => f.split('_').pop());
                for (let i = 0; i < excelHeaders.length; i++) ws[xlsx.utils.encode_cell({c: i, r: 0})] = { t: 's', v: excelHeaders[i] };
                xlsx.writeFile(workbook, excelFile);
                console.log('Updated EXCEL for ' + declKey);
            } catch(e) { console.error('Failed to write ' + excelFile, e.message); }
        }

        // frontend
        let tableColsStr = fields.map(k => {
            let guiPath = k.split('_').pop();
            return `      {\n            "key": "${k}",\n            "label": "${generateLabel(k)}",\n            "path": "${guiPath}"\n      }`;
        }).join(',\n');
        
        let fieldsStr = fields.map(k => {
            let label = generateLabel(k);
            let type = (label.toLowerCase().includes('date') ? 'date' : (['Valeur', 'Solde', 'Nb'].some(w => label.includes(w)) ? 'number' : 'text'));
            return `      {\n            "id": "${k}",\n            "name": "${k}",\n            "label": "${label}",\n            "type": "${type}"\n      }`;
        }).join(',\n');
        
        let regex = new RegExp(`('${declKey}': \\{[\\s\\S]*?tableColumns:\\s*\\[)([\\s\\S]*?)(\\],[\\s\\S]*?fields:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
        if (tsContent.match(regex)) {
             tsContent = tsContent.replace(regex, `$1\n${tableColsStr}\n$3\n${fieldsStr}\n$5`);
             fs.writeFileSync(frontendTsPath, tsContent, 'utf8');
             console.log('Updated TS for ' + declKey);
        }
    });
}

function runAll() {
    Object.keys(backendMapping).forEach(processDecl);
    setTimeout(() => {
        fs.writeFileSync(backendMappingPath, JSON.stringify(backendMapping, null, 2));
        console.log("Updated backend_mapping.json for VUC.");
    }, 5000);
}
runAll();
