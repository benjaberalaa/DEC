const XLSX = require('xlsx');
const path = require('path');

const filePath = 'c:/Users/user/Desktop/DEC/SMI-Excels/TR/TR-DON.xlsx';
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

for (let i = 0; i < 2; i++) {
    console.log(`Row ${i}:`, JSON.stringify(jsonData[i]));
}
