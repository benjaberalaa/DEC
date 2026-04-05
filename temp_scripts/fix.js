const fs = require('fs');
const align2 = fs.readFileSync('align2.js', 'utf8');

// Replace the last line of align2.js to only run TR_DOMSC
const patched = align2.replace(/function runAll\(\) \{[\s\S]*\}\s+runAll\(\);/m, "['TR_DOMSC'].forEach(processDecl);\n");
fs.writeFileSync('align_domsc.js', patched);
