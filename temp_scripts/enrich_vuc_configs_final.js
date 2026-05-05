
const fs = require('fs');
const filePath = 'c:\\Users\\user\\Desktop\\DEC\\DEC-FE-main\\src\\app\\config\\generated-declarations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const vucTypes = ['VUC_G1_S1', 'VUC_G1_S2', 'VUC_G1_A', 'VUC_G2_S1', 'VUC_G2_S2', 'VUC_G2_A'];

const globalColumns = [
  { "key": "vucId", "label": "ID VUC", "path": "vucId" },
  { "key": "declarationType", "label": "Type Déclaration", "path": "declarationType" },
  { "key": "yearDeclaration", "label": "Année", "path": "yearDeclaration" },
  { "key": "groupType", "label": "Type Groupe", "path": "groupType" },
  { "key": "depositorsCount", "label": "Nb Déposants", "path": "depositorsCount" }
];

const globalFields = [
  { "id": "vucId", "name": "vucId", "label": "ID VUC", "type": "text" },
  { "id": "declarationType", "name": "declarationType", "label": "Type Déclaration", "type": "text" },
  { "id": "yearDeclaration", "name": "yearDeclaration", "label": "Année", "type": "text" },
  { "id": "groupType", "name": "groupType", "label": "Type Groupe", "type": "text" },
  { "id": "depositorsCount", "name": "depositorsCount", "label": "Nb Déposants", "type": "number" }
];

vucTypes.forEach(typeName => {
    // Inject columns
    const columnsRegex = new RegExp(`'${typeName}': {[\\s\\S]*?tableColumns: \\[([\\s\\S]*?)\\],`, 'm');
    content = content.replace(columnsRegex, (match, existingCols) => {
        if (existingCols.includes('"key": "vucId"')) return match; 
        const newCols = globalColumns.map(c => `      {\n            "key": "${c.key}",\n            "label": "${c.label}",\n            "path": "${c.path}"\n      },`).join('\n');
        return match.replace('tableColumns: [', `tableColumns: [\n${newCols}`);
    });

    // Inject fields
    const fieldsRegex = new RegExp(`'${typeName}': {[\\s\\S]*?fields: \\[([\\s\\S]*?)\\],`, 'm');
    content = content.replace(fieldsRegex, (match, existingFields) => {
        if (existingFields.includes('"id": "vucId"')) return match;
        const newFields = globalFields.map(f => `      {\n            "id": "${f.id}",\n            "name": "${f.name}",\n            "label": "${f.label}",\n            "type": "${f.type}"\n      },`).join('\n');
        return match.replace('fields: [', `fields: [\n${newFields}`);
    });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully synchronized VUC frontend configurations.');
