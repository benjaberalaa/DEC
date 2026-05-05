
const fs = require('fs');
const path = 'c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\backend_mapping.json';
const mapping = JSON.parse(fs.readFileSync(path, 'utf8'));

const vucTypes = ['VUC_G1_S1', 'VUC_G1_S2', 'VUC_G1_A', 'VUC_G2_S1', 'VUC_G2_S2', 'VUC_G2_A'];

vucTypes.forEach(type => {
  if (mapping[type]) {
    const fields = [
      'vucId', 'declarationType', 'yearDeclaration', 'groupType', 'depositorsCount',
      'depositorId', 'actionType', 'personType', 'firstName', 'lastName', 
      'cinNum', 'companyName', 'rne'
    ];
    
    if (type.startsWith('VUC_G2')) {
      fields.push('accountNum', 'bankName');
    }

    mapping[type].paths = fields.map(f => `transferts_transfert_details_detail_${f}`);
  }
});

fs.writeFileSync(path, JSON.stringify(mapping, null, 2), 'utf8');
console.log('Updated VUC mappings to use transferts_transfert_details_detail_ prefix');
