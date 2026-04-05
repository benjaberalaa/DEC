const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let xsds = [];
walkDir("C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\xsd\\XSD_V2012", function(filePath) {
    if(filePath.endsWith('.xsd')) {
        xsds.push(filePath);
    }
});
console.log(`Found ${xsds.length} XSDs`);

// Function to find complex type or elements recursively
function parseXsdSchema(xmlObj) {
    let fields = [];
    
    function traverse(node, currentPath) {
        if (!node) return;
        
        let elements = [];
        if (node['xs:sequence'] && node['xs:sequence'][0]['xs:element']) {
            elements = node['xs:sequence'][0]['xs:element'];
        } else if (node['xs:element']) {
            elements = node['xs:element'];
        }
        
        if (elements && elements.length > 0) {
            elements.forEach(el => {
                let name = el['$']['name'];
                let type = el['$']['type'];
                let newPath = currentPath ? currentPath + '_' + name : name;
                
                // Skip EnteteDoc fields like CodeIAT, DateDec, CodeAnnexe, PeriodDec (Wait, are they needed? In some Yes, in some No)
                // Actually the mappings usually start from Extraits_Extrait_Entete or Transferts_Transfert_Entete
                if (['CodeIAT', 'DateDec', 'CodeAnnexe', 'EnteteDoc', 'AnneDec'].includes(name) && !currentPath.includes("Entete") && !currentPath.includes("Detail")) {
                    // But wait TR_DOM_EE has AnneDec inside Entete!
                }
                
                if (type === 'T_Montant' || type === 'T_MONTANT') {
                    fields.push(newPath + '_Value');
                    fields.push(newPath + '_Ccy');
                } else if (!el['xs:complexType']) {
                    fields.push(newPath);
                }
                
                if (el['xs:complexType']) {
                    traverse(el['xs:complexType'][0], newPath);
                }
            });
        }
    }
    
    let rootElements = xmlObj['xs:schema']['xs:element'];
    rootElements.forEach(el => {
        traverse(el['xs:complexType'][0], el['$']['name']); // 'Document'
    });
    
    return fields;
}

const parser = new xml2js.Parser();
let file = xsds.find(x => x.includes('MAJ_CRS-CPD-OSM_0912'));
let xml = fs.readFileSync(file, 'utf8');
parser.parseString(xml, (err, result) => {
    let fields = parseXsdSchema(result);
    // Filter to only what typically appears in mapping:
    let filtered = fields.filter(f => f.includes('Entete') || f.includes('Detail'));
    console.log(filtered);
});
