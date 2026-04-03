const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/user/Desktop/DEC/SMI-EXCELS';
const subDirs = ['CRS', 'DC', 'DS', 'TR'];
const results = {};

subDirs.forEach(sub => {
    const dirPath = path.join(baseDir, sub);
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.xlsx'));
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        try {
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0]; // Sheet 1
            const worksheet = workbook.Sheets[sheetName];
            const headers = [];
            const range = XLSX.utils.decode_range(worksheet['!ref']);
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = worksheet[XLSX.utils.encode_cell({ r: range.s.r, c: C })];
                headers.push(cell ? cell.v : `EMPTY_${C}`);
            }
            results[file] = headers;
        } catch (e) {
            results[file] = `ERROR: ${e.message}`;
        }
    });
});

console.log(JSON.stringify(results, null, 2));
