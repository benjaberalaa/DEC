const ExcelJS = require('exceljs');
const path = require('path');

const files = [
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G1-S1.xlsx',
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G1-S2.xlsx',
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G1-A.xlsx',
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G2-S1.xlsx',
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G2-S2.xlsx',
  'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\template_G2-A.xlsx',
];

async function readHeaders() {
  for (const f of files) {
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(f);
    const ws = wb.getWorksheet(1);
    const row1 = ws.getRow(1);
    const headers = [];
    row1.eachCell((cell) => headers.push(cell.value));
    console.log(path.basename(f) + ':', headers.join(' | '));
  }
}
readHeaders().catch(console.error);
