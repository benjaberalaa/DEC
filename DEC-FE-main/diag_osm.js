const XLSX = require('xlsx');
const path = require('path');

const filePath = 'c:/Users/user/Desktop/DEC/SMI-EXCELS/CRS/CRS-CPD-OSM.xlsx';
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log("Headers:", JSON.stringify(jsonData[0]));
console.log("Row 1:", JSON.stringify(jsonData[1]));
console.log("Row 2:", JSON.stringify(jsonData[2]));
