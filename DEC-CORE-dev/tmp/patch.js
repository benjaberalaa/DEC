const fs = require('fs');
let code = fs.readFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', 'utf8');

code = code.replace(/\\/g, '/'); // replace all backslashes
code = code.replace(/xsd\/XSD_V2012\/TR_V2012\/MAJC_TR-DON_0312_1812\.xsd"; \/\/ fallback/g, 'xsd/XSD_V2012/TR_V2012/TR-RETAIL.xsd";');
code = code.replace(/com\.smi\.generated\.majc_tr_don_0312\.Document\.class; \/\/ TODO fallback/g, 'com.smi.generated.tr_retail.Document.class;');

code = code.replace(/}\s*$/g, `
    public String mergeJsonDynamic(String existingJson, String newJson) throws Exception {
        com.fasterxml.jackson.databind.ObjectMapper objectMapper = new com.fasterxml.jackson.databind.ObjectMapper();
        com.fasterxml.jackson.databind.JsonNode existingNode = objectMapper.readTree(existingJson);
        com.fasterxml.jackson.databind.JsonNode newNode = objectMapper.readTree(newJson);

        String[] containers = {"transferts", "extraits", "decomptes", "dossiers", "Transferts", "Extraits", "Decomptes", "Dossiers"};
        
        for (String c : containers) {
            if (newNode.has(c) && existingNode.has(c)) {
                com.fasterxml.jackson.databind.JsonNode newArrayContainer = newNode.get(c);
                com.fasterxml.jackson.databind.node.ObjectNode existingArrayContainer = (com.fasterxml.jackson.databind.node.ObjectNode) existingNode.get(c);
                
                // Find inner array key
                java.util.Iterator<String> fieldNames = newArrayContainer.fieldNames();
                if(fieldNames.hasNext()) {
                    String arrayKey = fieldNames.next();
                    com.fasterxml.jackson.databind.JsonNode newItems = newArrayContainer.get(arrayKey);
                    
                    com.fasterxml.jackson.databind.node.ArrayNode existingArray;
                    if(existingArrayContainer.has(arrayKey) && existingArrayContainer.get(arrayKey).isArray()) {
                        existingArray = (com.fasterxml.jackson.databind.node.ArrayNode) existingArrayContainer.get(arrayKey);
                    } else {
                        existingArray = objectMapper.createArrayNode();
                        existingArrayContainer.set(arrayKey, existingArray);
                    }
                    
                    if(newItems.isArray()) {
                        for(com.fasterxml.jackson.databind.JsonNode item : newItems) {
                            existingArray.add(item);
                        }
                    } else {
                        existingArray.add(newItems);
                    }
                }
                return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingNode);
            }
        }
        
        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingNode);
    }
}
`);
fs.writeFileSync('c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/java/com/smi/declarations/services/GenericDeclarationService.java', code);
