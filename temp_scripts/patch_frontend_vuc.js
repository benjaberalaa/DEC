const fs = require('fs');
const path = 'c:/Users/user/Desktop/DEC/DEC-FE-main/src/app/config/generated-declarations.ts';
let content = fs.readFileSync(path, 'utf8');

// List of snake_case to camelCase mappings for VUC
const mappings = {
  'depositor_id': 'depositorId',
  'action_type': 'actionType',
  'person_type': 'personType',
  'first_name': 'firstName',
  'last_name': 'lastName',
  'cin_num': 'cinNum',
  'company_name': 'companyName',
  'account_number': 'accountNumber',
  'account_balance': 'accountBalance',
  'vuc_id': 'vucId',
  'declaration_type': 'declarationType',
  'year_declaration': 'yearDeclaration',
  'group_type': 'groupType',
  'depositors_count': 'depositorsCount'
};

// We only want to replace these inside VUC configs.
// A simpler way is to replace them globally if they only appearing in VUC, 
// but it's safer to target the VUC section.
const vucSectionStart = content.indexOf("'VUC_G1_S1':");
const vucSectionEnd = content.lastIndexOf("'VUC_G2_A':") + 1000; // rough estimate

if (vucSectionStart !== -1) {
  let vucSection = content.substring(vucSectionStart); // till the end is fine usually
  
  for (const [snake, camel] of Object.entries(mappings)) {
    const regex = new RegExp(`"${snake}"`, 'g');
    vucSection = vucSection.replace(regex, `"${camel}"`);
    const regex2 = new RegExp(`'${snake}'`, 'g');
    vucSection = vucSection.replace(regex2, `'${camel}'`);
    const regex3 = new RegExp(` ${snake}:`, 'g'); // for object keys if any
    vucSection = vucSection.replace(regex3, ` ${camel}:`);
  }
  
  content = content.substring(0, vucSectionStart) + vucSection;
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully patched generated-declarations.ts with camelCase keys');
} else {
  console.error('Could not find VUC section in generated-declarations.ts');
}
