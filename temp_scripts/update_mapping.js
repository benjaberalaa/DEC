const fs = require('fs');
const path = 'c:/Users/user/Desktop/DEC/DEC-CORE-dev/src/main/resources/backend_mapping.json';
const mapping = JSON.parse(fs.readFileSync(path, 'utf8'));

const vucG1Models = ['G1_S1', 'G1_S2', 'G1_A'];
const vucG2Models = ['G2_S1', 'G2_S2', 'G2_A'];

const basePaths = [
  "Details_Detail_VucId",
  "Details_Detail_DeclarationType",
  "Details_Detail_YearDeclaration",
  "Details_Detail_GroupType",
  "Details_Detail_DepositorsCount",
  "Details_Detail_DepositorId",
  "Details_Detail_ActionType",
  "Details_Detail_PersonType",
  "Details_Detail_FirstName",
  "Details_Detail_LastName",
  "Details_Detail_CinNum",
  "Details_Detail_CompanyName",
  "Details_Detail_Rne"
];

const g2Paths = [
  ...basePaths,
  "Details_Detail_AccountNumber",
  "Details_Detail_AccountBalance"
];

vucG1Models.forEach(m => {
  mapping[`VUC_${m}`] = {
    codeAnnexe: `VUC-${m.replace('_', '-')}`,
    paths: basePaths
  };
});

vucG2Models.forEach(m => {
  mapping[`VUC_${m}`] = {
    codeAnnexe: `VUC-${m.replace('_', '-')}`,
    paths: g2Paths
  };
});

fs.writeFileSync(path, JSON.stringify(mapping, null, 2), 'utf8');
console.log('Successfully updated backend_mapping.json');
