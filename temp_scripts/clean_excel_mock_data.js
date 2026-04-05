const fs = require('fs');
const _path = require('path');
const xlsx = require('xlsx');

const excelDir = "C:\\Users\\user\\Desktop\\DEC\\SMI-Excels";
const backendMapping = require("C:\\Users\\user\\Desktop\\DEC\\DEC-CORE-dev\\src\\main\\resources\\backend_mapping.json");

const fakeDataDict = {
    // Dates
    DateOuvCpte: '15/03/2026', DateclotureCpte: '15/03/2026', DateGelCpte: '15/03/2026', DateMvt: '15/03/2026', DateSupp: '15/03/2026', DateDecD: '15/03/2026', DateAutBCT: '15/03/2026', DateRetVoy: '15/03/2026', DateFicheInformation: '15/03/2026', DateobtStartup: '15/03/2026', DatDebScol: '15/03/2026', DatFinScol: '15/03/2026', DatDomDosScol: '15/03/2026', DatOuvRen: '15/03/2026', DatDebBours: '15/03/2026', DatFinBours: '15/03/2026', DatClotDosScolIat: '15/03/2026', DateDomDosScol: '15/03/2026', DatTrans: '15/03/2026', DatAutBctSD: '15/03/2026', DatAutBCT: '15/03/2026', DatFichInfo: '15/03/2026', DatOrdMissStage: '15/03/2026', DatDebdMissStage: '15/03/2026', DatFindMissStage: '15/03/2026', DatRetroc: '15/03/2026', DatRetVoy: '15/03/2026', DatDecD: '15/03/2026', DatDomConv: '15/03/2026', DatFichInvt: '15/03/2026', DatDomDosForm: '15/03/2026', DatDebBenifForm: '15/03/2026', DatFinBenifForm: '15/03/2026', DatRetro: '15/03/2026', DatDelivAllocTouris: '15/03/2026', DatAlimCart: '15/03/2026', DatOp: '15/03/2026', DatRefIden: '15/03/2026', DatValOp: '15/03/2026', DatDom: '15/03/2026', DatSusp: '15/03/2026', DebPeriodFon: '15/03/2026', FinPeriodFon: '15/03/2026', DatConcContrat: '15/03/2026', DatEncProdExport: '15/03/2026', DateConcContratMarche: '15/03/2026',
    
    // Numbers
    Value: 1000, MntBoursDev: 1000, MntBoursTnd: 1000, DureBours: '12', MntRetrocDev: 1000, CvMntRetTnd: 1000, ChiffAffaire: 1000, TxPart: '12', CapSocSocNR: 1000, TxPartNonRes: '12', TxInteret: '12', DureRemb: '12', TauxInterets: '12', MntRetroDev: 1000, CVMntRetro: 1000, ChiffrAffHrsTx: 1000, MntImport: 1000, BaseCalDroitTran: 1000, AvanceMarchPourMntMarche: 1000, DureeMarcheMois: '12',
    
    // Constants / Enums
    PeriodDec: '012026', MoisDec: '012026', NbrEcritures: '000001', NbreJrsMissStage: '000010', JrDec: '01',
    Agence: '023', AgenceTrsf: '023', AgenceDom: '023',
    TypeTitul: '1', TypeIdentifiant: 'C', TypeIdenPP: 'C', TypIdentifiantAccomp: 'C', TypeIdentifiantD: 'C', TypeIdenTitu: 'C',
    CodeIdentifiant: '12345678', NumIdenPP: '12345678', CodeIdentifiantAccomp: '12345678', CodIdentifiantD: '12345678', CodIdentifiant: '12345678', CodIdenTitu: '12345678', IdentifiantSocNR: '123456', IdenSysBenif: '123456', IdenEmploy: '123456', IdSysBenifPlatforme: '123456',
    Nom: 'TEST', Prenom: 'TEST', RaisSociale: 'TEST', NomPP: 'TEST', PrenomPP: 'TEST', DenomBenif: 'TEST', NomFourniClient: 'TEST', NomPrenoMed: 'TEST', NomAccomp: 'TEST', PrenomAccomp: 'TEST', RaisSocialInvt: 'TEST', RaisSocialInvtss: 'TEST', RaisSocialSocNr: 'TEST', DenomSocEmp: 'TEST', DenomOrgPret: 'TEST', RaisSocial: 'TEST', DenomD: 'TEST', DenomComplAsso: 'TEST', RaisSocialSoc: 'TEST', DenomDem: 'TEST', DenomTitu: 'TEST', DenomMOR: 'TEST', DenomEntrRCF: 'TEST', DenomEntrCoTitu: 'TEST', RaisSoc: 'TEST', NomOrigPiece: 'TEST', NomPrenomDenomBenif: 'TEST',
    Rib: '12345678901234567890', IbanDonOrd: '12345678901234567890',
    DeviseCpte: '788', Ccy: '788', CodDevMntBourse: '788', DevMntRetroc: '788', DevMntBours: '788', DevMntRetro: '788',
    EtatCpte: '1', NatMvtOp: '1', ModReg: '1', TypeOp: '1', NatCpteRegl: '1', StatutPP: '1', NumFicheInformation: '123456', CodIATClot: '02', LibOp: 1, ModTrans: 1, GroupClass: '1', NatVoy: '1', PrisCharg: 1, NatPrisCharg: 1, MotRetroc: 1, Accomp: 1, CodActInvt: '1', SocExport: 1, PosInvt: 1, FormInvt: 1, MoyenReg: 1, CodSectActInvt: '1', CodClassActInvt: '1', FormPart: 1, CodNatSocEmp: '1', FormEmpExt: 1, AutrFormExt: 1, ModRemb: 1, NiveauForm: 1, TypAlloc: 1, BoursForm: 1, ModTrasn: 1, Age: '25', CadRetro: 1, EcoSalaire: 1, NatBenif: 1, TypOp: '1', CodReg: '1', SousTypAVA: '1', DesgnOp: '1', CodOrigFond: '1', TypeBenifAsso: 1,
    NatOp: '1234', CategBenif: 1, BoursEtude: 1, OuvRenDosScol: 1,
    AnneScol: '2025-2026', AnnScol: '2025-2026', AnneDec: '2026', AnneExercice: '2026', AnneCA: '2026',
    Nationalite: '123', Pays: '123', CodPaysDest: '123', CodPaysForm: '123', PaysFonds: '123', CodPays: '123',
    NumDomDosScol: '1234567890123', NumAutBCT: 'AUTO-123', NumAutBctSD: 'AUTO-123', NumFichInfo: 'FICH-123', NumMsgeSwiftMvt: 'SWIFT-123', SuppOp: '1', NumSupp: 'SUPP-123', NumDecD: 'DEC-123', NumDomConv: 'DOM-123', NumFichInvt: 'INV-123', NumDomDosForm: 'DOM-123', NumMissStage: 'MISS-123', NumVisa: 'VISA-123', NumaAutBCT: 'AUTO-123', NumDosAVA: 'DOS-123', NumActv: 'ACT-123', RefIden: 'REF-123', RefMsgSwift: 'REF-123',
    MatricFiscalInvt: '1234567X', MatFiscalSocEmp: '1234567X', MatFiscalSoc: '1234567X', MatFiscalMOR: '1234567X', MatFiscalEntrRCF: '1234567X', MFIdEntrCoTitul: '1234567X', MatFiscal: '1234567X',
    CodMvt: '1234', CodSwift: 'SWIFT12X', CodInvt: '1', CodOrgNot: '12', CodIdentifiant: '123456', CodTitre: '123', CodRD: '1', CodOp: '1', CodBenif: '1', CodDoc: '1',
    // fallback
    DEFAULT: 'TEST'
};

function getFakeData(key) {
    let specific = fakeDataDict[key];
    if (specific !== undefined) return specific;
    
    // Heuristics
    if (key.includes('Date') || key.includes('Dat')) return '15/03/2026';
    if (key.includes('Num')) return '12345678';
    if (key.includes('Value') || key.includes('Mnt')) return 1000;
    if (key.includes('Ccy') || key.includes('Devise')) return '788';
    if (key.includes('Cod')) return '123';
    return fakeDataDict.DEFAULT;
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = _path.join(dir, f);
        if(!dirPath.includes('~')) fs.statSync(dirPath).isDirectory() ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

let excelFiles = [];
walkDir(excelDir, f => { if(f.endsWith('.xlsx')) excelFiles.push(f); });

Object.keys(backendMapping).forEach(declKey => {
    let excelFile = excelFiles.find(x => {
        let bn = _path.basename(x).toLowerCase().replace('_v2','').replace('_v3','').replace('_fixed','');
        let s = declKey.replace(/_/g, '-').toLowerCase();
        if(declKey === 'DC_AVA') return bn.includes('dc_ava');
        if(declKey === 'DC_MAR') return bn.includes('dc_mar');
        if(declKey === 'DS_IETR') return bn.includes('ds_ietr');
        if(declKey === 'DS_IESuivi') return bn.includes('ds_iesuivi');
        if(declKey === 'TR_R_CNR') return bn.includes('tr-r_cnr');
        if(declKey === 'TR_RETALL') return bn.includes('tr-retall'); 
        if(declKey === 'DS_Startup_IE_TR') return bn.includes('startup-ie-tr');
        if(declKey === 'DS_Startup_IE_SUIVI') return bn.includes('startup-ie-suivi');
        return bn.includes(s) || (declKey === 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV' && bn.includes('ttee')) || (declKey === 'TR_CESSLI\u01EA' && bn.includes('cessliq'));
    });

    if (excelFile) {
        let paths = backendMapping[declKey].paths;
        let shortHeaders = paths.map(p => p.split('_').pop());
        
        let mockRow = {};
        for(let i=0; i<paths.length; i++) {
            mockRow[shortHeaders[i]] = getFakeData(shortHeaders[i]);
        }
        
        try {
            let workbook = xlsx.readFile(excelFile, { cellFormula: true, cellStyles: true });
            let ws = xlsx.utils.json_to_sheet([mockRow], { header: shortHeaders });
            workbook.Sheets[workbook.SheetNames[0]] = ws;
            
            xlsx.writeFile(workbook, excelFile);
            console.log('Successfully updated ' + _path.basename(excelFile));
        } catch(e) {
            if(e.code === 'EBUSY') {
                let newFile = excelFile.replace('.xlsx', '_fixed.xlsx');
                let ws = xlsx.utils.json_to_sheet([mockRow], { header: shortHeaders });
                let workbook = xlsx.utils.book_new();
                xlsx.utils.book_append_sheet(workbook, ws, 'Data');
                xlsx.writeFile(workbook, newFile);
                console.log('Created ' + _path.basename(newFile) + ' because original was locked');
            } else {
                console.error('Failed to update ' + excelFile, e);
            }
        }
    }
});
