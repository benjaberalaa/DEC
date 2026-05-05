
const fs = require('fs');
const path = 'c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\backend_mapping.json';
const mapping = JSON.parse(fs.readFileSync(path, 'utf8'));

const vucMapping = {
  'VUC_G1_S1': 'VC-111',
  'VUC_G1_S2': 'VC-112',
  'VUC_G1_A':  'VC-113',
  'VUC_G2_S1': 'VC-221',
  'VUC_G2_S2': 'VC-222',
  'VUC_G2_A':  'VC-223'
};

for (const [type, code] of Object.entries(vucMapping)) {
  if (mapping[type]) {
    mapping[type].codeAnnexe = code;
  }
}

fs.writeFileSync(path, JSON.stringify(mapping, null, 2), 'utf8');
console.log('Updated VUC codeAnnexe values for XSD compliance');
