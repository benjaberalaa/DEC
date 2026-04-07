const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

const models = ['G1-S1', 'G1-S2', 'G1-A', 'G2-S1', 'G2-S2', 'G2-A'];
const headers = [
  "vuc_id",
  "declaration_type",
  "year_declaration",
  "group_type",
  "depositors_count",
  "Detail.depositor_id",
  "Detail.action_type",
  "Detail.person_type"
];

const outputDir = path.join(__dirname, '..', 'SMI-Excels', 'VUC');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

models.forEach(model => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const filePath = path.join(outputDir, `template_${model}.xlsx`);
    XLSX.writeFile(wb, filePath);
    console.log(`Generated ${filePath}`);
});
