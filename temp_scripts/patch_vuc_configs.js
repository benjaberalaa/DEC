const fs = require('fs');

const filePath = 'c:/Users/user/Desktop/DEC/DEC-FE-main/src/app/config/generated-declarations.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const vucModels = ['G1_S1', 'G1_S2', 'G1_A', 'G2_S1', 'G2_S2', 'G2_A'];

let vucConfigs = '';
vucModels.forEach(model => {
  const type = `VUC_${model}`;
  vucConfigs += `
  '${type}': {
    type: '${type}',
    label: 'Déclaration ${type.replace('_', '-')}',
    codeAnnexe: '${type}',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      { key: 'depositor_id', label: 'ID Déposant', path: 'depositor_id' },
      { key: 'action_type', label: 'Action', path: 'action_type' },
      { key: 'person_type', label: 'Type Personne', path: 'person_type' }
    ],
    fields: [
      { id: 'depositor_id', name: 'depositor_id', label: 'ID Déposant', type: 'text' },
      { id: 'action_type', name: 'action_type', label: 'Action', type: 'text' },
      { id: 'person_type', name: 'person_type', label: 'Type Personne', type: 'text' }
    ],
    payloadMapper: (formData: any, contextualData: any) => {
      return { details: formData };
    }
  },`;
});

// Remove the very last `};`
const lastBraceIndex = content.lastIndexOf('};');
if (lastBraceIndex !== -1) {
  content = content.substring(0, lastBraceIndex) + vucConfigs + '\n};\n';
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully added VUC configs to generated-declarations.ts');
} else {
  console.error('Could not find closing brace in generated-declarations.ts');
}
