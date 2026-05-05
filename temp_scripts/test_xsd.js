const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

function toCamelCase(str) {
    return str.replace(/_([a-z0-9])/g, (g) => g[1].toUpperCase());
}

function parseXsdSchema(xmlObj, isVuc = false) {
    let fields = [];
    function traverse(node, currentPath) {
        if (!node) return;
        let elements = [];
        ['xs:sequence', 'xs:choice', 'xs:all'].forEach(t => {
            if (node[t]) node[t].forEach(seq => { 
                if (seq['xs:element']) elements.push(...seq['xs:element']); 
                // Recursively check for nested common groups if needed, but let's see why Choice is skipped
                ['xs:sequence', 'xs:choice', 'xs:all'].forEach(subT => {
                    if (seq[subT]) {
                         seq[subT].forEach(subBranch => {
                             if (subBranch['xs:element']) elements.push(...subBranch['xs:element']);
                         });
                    }
                });
            });
        });
        if (node['xs:element']) elements.push(...node['xs:element']);
        
        if (node['xs:attribute']) {
            node['xs:attribute'].forEach(attr => {
                let name = attr['$']['name'];
                if (isVuc) name = toCamelCase(name);
                fields.push(currentPath ? currentPath + '_' + name : name);
            });
        }

        if (elements.length > 0) {
            elements.forEach(el => {
                let name = el['$'] ? el['$']['name'] : undefined;
                if (!name) return;
                let type = el['$'] ? el['$']['type'] : undefined;
                let fieldName = isVuc ? toCamelCase(name) : name;
                let newPath = currentPath ? currentPath + '_' + fieldName : fieldName;
                if (!el['xs:complexType']) fields.push(newPath);
                if (el['xs:complexType']) traverse(el['xs:complexType'][0], newPath);
            });
        }
    }
    if (xmlObj['xs:schema']['xs:element']) {
        xmlObj['xs:schema']['xs:element'].forEach(el => { traverse(el['xs:complexType'][0], ''); });
    }
    return fields;
}

const xsd = fs.readFileSync('C:\\Users\\user\\Desktop\\DEC\\G1_V1.0.xsd', 'utf8');
parser.parseString(xsd, (err, result) => {
    const fields = parseXsdSchema(result, true);
    console.log(JSON.stringify(fields, null, 2));
});
