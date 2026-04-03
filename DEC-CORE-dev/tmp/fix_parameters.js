const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.java')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // Fix @PathVariable Type name -> @PathVariable("name") Type name
            content = content.replace(/@PathVariable\s+([A-Za-z0-9_<>\[\]]+)\s+([A-Za-z0-9_]+)(\s*[,)])/g, (match, p1, p2, p3) => {
                return `@PathVariable("${p2}") ${p1} ${p2}${p3}`;
            });

            // Fix @RequestParam Type name
            // Ensure we don't accidentally match @RequestParam("name") by only matching when it's just spaces after @RequestParam
            content = content.replace(/@RequestParam\s+([A-Za-z0-9_<>\[\]]+)\s+([A-Za-z0-9_]+)(\s*[,)])/g, (match, p1, p2, p3) => {
                return `@RequestParam("${p2}") ${p1} ${p2}${p3}`;
            });

            // Fix @RequestParam(required = ...) without explicit value
            content = content.replace(/@RequestParam\s*\(\s*required\s*=\s*(true|false)\s*\)\s+([A-Za-z0-9_<>\[\]]+)\s+([A-Za-z0-9_]+)(\s*[,)])/g, (match, req, type, name, suffix) => {
                return `@RequestParam(value = "${name}", required = ${req}) ${type} ${name}${suffix}`;
            });

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`Fixed: ${fullPath}`);
            }
        }
    });
}

processDir('c:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\java\\com\\smi\\declarations\\controllers');
