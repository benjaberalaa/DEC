const ExcelJS = require('exceljs');

// Expected headers per VUC type (must match last segment of backend_mapping.json paths)
const vucHeaders = {
  'template_G1-S1': ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne'],
  'template_G1-S2': ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne'],
  'template_G1-A':  ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne'],
  'template_G2-S1': ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne','accountNumber','accountBalance'],
  'template_G2-S2': ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne','accountNumber','accountBalance'],
  'template_G2-A':  ['vucId','declarationType','yearDeclaration','groupType','depositorsCount','depositorId','actionType','personType','firstName','lastName','cinNum','companyName','rne','accountNumber','accountBalance'],
};

const baseDir = 'C:\\Users\\user\\Desktop\\DEC\\SMI-Excels\\VUC\\';

async function updateHeaders() {
  for (const [name, headers] of Object.entries(vucHeaders)) {
    const filePath = baseDir + name + '.xlsx';
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(filePath);
    const ws = wb.getWorksheet(1);

    // Print old headers
    const oldHeaders = [];
    ws.getRow(1).eachCell(c => oldHeaders.push(c.value));
    console.log(`\n${name} OLD: ${oldHeaders.join(' | ')}`);

    // Set new headers
    const row1 = ws.getRow(1);
    headers.forEach((h, i) => {
      row1.getCell(i + 1).value = h;
    });
    row1.commit();

    await wb.xlsx.writeFile(filePath);
    console.log(`${name} NEW: ${headers.join(' | ')} ✓`);
  }
}

updateHeaders().catch(console.error);
