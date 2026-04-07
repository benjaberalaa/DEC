const fs = require('fs');

const filePath = 'c:/Users/user/Desktop/DEC/DEC-FE-main/src/app/config/generated-declarations.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const vucG1Models = ['G1_S1', 'G1_S2', 'G1_A'];
const vucG2Models = ['G2_S1', 'G2_S2', 'G2_A'];

const baseColumns = [
  { key: 'depositor_id', label: 'ID Déposant', path: 'depositor_id' },
  { key: 'action_type', label: 'Action', path: 'action_type' },
  { key: 'person_type', label: 'Type Personne', path: 'person_type' },
  { key: 'first_name', label: 'Prénom', path: 'first_name' },
  { key: 'last_name', label: 'Nom', path: 'last_name' },
  { key: 'cin_num', label: 'CIN/Pass', path: 'cin_num' },
  { key: 'company_name', label: 'Entreprise', path: 'company_name' },
  { key: 'rne', label: 'RNE', path: 'rne' }
];

const g2ExtraColumns = [
  { key: 'account_number', label: 'Compte', path: 'account_number' },
  { key: 'account_balance', label: 'Solde', path: 'account_balance' }
];

const baseFields = [
  { id: 'depositor_id', name: 'depositor_id', label: 'ID Déposant', type: 'text', required: true },
  { id: 'action_type', name: 'action_type', label: 'Action', type: 'select', options: [{label:'ADD', value:'ADD'}, {label:'UPDATE', value:'UPDATE'}, {label:'DELETE', value:'DELETE'}], required: true },
  { id: 'person_type', name: 'person_type', label: 'Type Personne', type: 'select', options: [{label:'Physique', value:'PP'}, {label:'Morale', value:'PM'}], required: true },
  { id: 'first_name', name: 'first_name', label: 'Prénom', type: 'text' },
  { id: 'last_name', name: 'last_name', label: 'Nom', type: 'text' },
  { id: 'cin_num', name: 'cin_num', label: 'CIN', type: 'text' },
  { id: 'company_name', name: 'company_name', label: 'Entreprise', type: 'text' },
  { id: 'rne', name: 'rne', label: 'RNE', type: 'text' }
];

const g2ExtraFields = [
  { id: 'account_number', name: 'account_number', label: 'Numéro Compte', type: 'text' },
  { id: 'account_balance', name: 'account_balance', label: 'Solde', type: 'number' }
];

let vucConfigs = '';

vucG1Models.forEach(model => {
  const type = `VUC_${model}`;
  vucConfigs += `
  '${type}': {
    type: '${type}',
    label: 'Déclaration ${type.replace('_', '-')}',
    codeAnnexe: '${type}',
    apiPath: 'api/periodes/add-data',
    tableColumns: ${JSON.stringify(baseColumns, null, 6)},
    fields: ${JSON.stringify(baseFields, null, 6)},
    payloadMapper: (formData: any, contextualData: any) => {
      return { details: formData };
    }
  },`;
});

vucG2Models.forEach(model => {
  const type = `VUC_${model}`;
  vucConfigs += `
  '${type}': {
    type: '${type}',
    label: 'Déclaration ${type.replace('_', '-')}',
    codeAnnexe: '${type}',
    apiPath: 'api/periodes/add-data',
    tableColumns: ${JSON.stringify([...baseColumns, ...g2ExtraColumns], null, 6)},
    fields: ${JSON.stringify([...baseFields, ...g2ExtraFields], null, 6)},
    payloadMapper: (formData: any, contextualData: any) => {
      return { details: formData };
    }
  },`;
});

// Remove existing VUC_... configs if any, or just append before the last };
const lines = content.split('\n');
const filteredLines = lines.filter(line => !line.trim().startsWith("'VUC_"));
let newContent = filteredLines.join('\n');

const lastBraceIndex = newContent.lastIndexOf('};');
if (lastBraceIndex !== -1) {
  newContent = newContent.substring(0, lastBraceIndex) + vucConfigs + '\n};\n';
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log('Successfully enriched VUC configs in generated-declarations.ts');
} else {
  console.error('Could not find closing brace in generated-declarations.ts');
}
