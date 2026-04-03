export const GENERATED_CONFIGS: any = {
  'CRS_CPD_OSM': {
    type: 'CRS_CPD_OSM',
    label: 'Déclaration CRS_CPD_OSM',
    codeAnnexe: 'CRS-CPD-OSM',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_Agence",
            "label": "Agence",
            "path": "_entete.Agence"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "path": "_entete.Titulaire.TypeTitul"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "path": "_entete.RefCompte.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "path": "_entete.RefCompte.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "label": "SuppOp",
            "path": "RefSupport.SuppOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "label": "NumSupp",
            "path": "RefSupport.NumSupp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "label": "DateSupp",
            "path": "RefSupport.DateSupp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "path": "DecDouane.NumDecD"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "label": "DateDecD",
            "path": "DecDouane.DateDecD"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_Agence",
            "name": "Extraits_Extrait_Entete_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "label": "SuppOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "label": "NumSupp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "label": "DateSupp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "name": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "name": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "label": "DateDecD",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_CPD_VDPL': {
    type: 'CRS_CPD_VDPL',
    label: 'Déclaration CRS_CPD_VDPL',
    codeAnnexe: 'CRS-CPD-VDPL',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_TypeOp",
            "label": "TypeOp",
            "path": "Operateur.TypeOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Operateur.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "Operateur.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_Nom",
            "label": "Nom",
            "path": "Operateur.Nom"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_Prenom",
            "label": "Prenom",
            "path": "Operateur.Prenom"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Operateur_RaisSociale",
            "label": "RaisSociale",
            "path": "Operateur.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_EncoursPlac",
            "label": "EncoursPlac",
            "path": "RefOperation.EncoursPlac"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "label": "SuppOp",
            "path": "RefSupport.SuppOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "label": "NumSupp",
            "path": "RefSupport.NumSupp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "label": "DateSupp",
            "path": "RefSupport.DateSupp"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Agence",
            "name": "Extraits_Extrait_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_TypeOp",
            "name": "Extraits_Extrait_Details_Detail_Operateur_TypeOp",
            "label": "TypeOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_TypeIdentifiant",
            "name": "Extraits_Extrait_Details_Detail_Operateur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_CodeIdentifiant",
            "name": "Extraits_Extrait_Details_Detail_Operateur_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_Nom",
            "name": "Extraits_Extrait_Details_Detail_Operateur_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_Prenom",
            "name": "Extraits_Extrait_Details_Detail_Operateur_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Operateur_RaisSociale",
            "name": "Extraits_Extrait_Details_Detail_Operateur_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_EncoursPlac",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_EncoursPlac",
            "label": "EncoursPlac",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_SuppOp",
            "label": "SuppOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_NumSupp",
            "label": "NumSupp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "name": "Extraits_Extrait_Details_Detail_RefSupport_DateSupp",
            "label": "DateSupp",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_DEVPPLTNDPPL': {
    type: 'CRS_DEVPPLTNDPPL',
    label: 'Déclaration CRS_DEVPPLTNDPPL',
    codeAnnexe: 'CRS-DEVPPLTNDPPL',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceTrsf",
            "label": "AgenceTrsf",
            "path": "_entete.AgenceTrsf"
      },
      {
            "key": "Extraits_Extrait_Entete_NatCpteRegl",
            "label": "NatCpteRegl",
            "path": "_entete.NatCpteRegl"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefPersPhysique_TypeIdenPP",
            "label": "TypeIdenPP",
            "path": "RefPersPhysique.TypeIdenPP"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefPersPhysique_NumIdenPP",
            "label": "NumIdenPP",
            "path": "RefPersPhysique.NumIdenPP"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefPersPhysique_NomPP",
            "label": "NomPP",
            "path": "RefPersPhysique.NomPP"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefPersPhysique_PrenomPP",
            "label": "PrenomPP",
            "path": "RefPersPhysique.PrenomPP"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefPersPhysique_StatutPP",
            "label": "StatutPP",
            "path": "RefPersPhysique.StatutPP"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceTrsf",
            "name": "Extraits_Extrait_Entete_AgenceTrsf",
            "label": "AgenceTrsf",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NatCpteRegl",
            "name": "Extraits_Extrait_Entete_NatCpteRegl",
            "label": "NatCpteRegl",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefPersPhysique_TypeIdenPP",
            "name": "Extraits_Extrait_Details_Detail_RefPersPhysique_TypeIdenPP",
            "label": "TypeIdenPP",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefPersPhysique_NumIdenPP",
            "name": "Extraits_Extrait_Details_Detail_RefPersPhysique_NumIdenPP",
            "label": "NumIdenPP",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefPersPhysique_NomPP",
            "name": "Extraits_Extrait_Details_Detail_RefPersPhysique_NomPP",
            "label": "NomPP",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefPersPhysique_PrenomPP",
            "name": "Extraits_Extrait_Details_Detail_RefPersPhysique_PrenomPP",
            "label": "PrenomPP",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefPersPhysique_StatutPP",
            "name": "Extraits_Extrait_Details_Detail_RefPersPhysique_StatutPP",
            "label": "StatutPP",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_SM_TND': {
    type: 'CRS_SM_TND',
    label: 'Déclaration CRS_SM_TND',
    codeAnnexe: 'CRS-SM-TND',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "path": "_entete.RefCompte.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "path": "_entete.RefCompte.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_INR': {
    type: 'CRS_INR',
    label: 'Déclaration CRS_INR',
    codeAnnexe: 'CRS-INR_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_ALL_TNDCV': {
    type: 'CRS_ALL_TNDCV',
    label: 'Déclaration CRS_ALL_TNDCV',
    codeAnnexe: 'CRS-ALL-TNDCV',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateRetVoy",
            "label": "DateRetVoy",
            "path": "RefOperation.DateRetVoy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateRetVoy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateRetVoy",
            "label": "DateRetVoy",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_ATT': {
    type: 'CRS_ATT',
    label: 'Déclaration CRS_ATT',
    codeAnnexe: 'CRS-ATT',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "path": "_entete.Titulaire.TypeTitul"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "DateRetVoy_22",
            "label": "DateRetVoy",
            "path": "DateRetVoy_22"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "DateRetVoy_22",
            "name": "DateRetVoy_22",
            "label": "DateRetVoy",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_E_TNDCVE_ENDCV_TTE_E_DEV': {
    type: 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV',
    label: 'Déclaration CRS_E_TNDCVE_ENDCV_TTE_E_DEV',
    codeAnnexe: 'CRS-E-TNDCVE-ENDCV-TTEE-DEV',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_NatCpteRegl",
            "label": "NatCpteRegl",
            "path": "_entete.NatCpteRegl"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NatCpteRegl",
            "name": "Extraits_Extrait_Entete_NatCpteRegl",
            "label": "NatCpteRegl",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_PPR': {
    type: 'CRS_PPR',
    label: 'Déclaration CRS_PPR',
    codeAnnexe: 'CRS-PPR_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "path": "_entete.RefCompte.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "path": "_entete.RefCompte.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefFicheInformation_NumFicheInformation",
            "label": "NumFicheInformation",
            "path": "RefFicheInformation.NumFicheInformation"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefFicheInformation_DateFicheInformation",
            "label": "DateFicheInformation",
            "path": "RefFicheInformation.DateFicheInformation"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "path": "DecDouane.NumDecD"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "label": "DateDecD",
            "path": "DecDouane.DateDecD"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefFicheInformation_NumFicheInformation",
            "name": "Extraits_Extrait_Details_Detail_RefFicheInformation_NumFicheInformation",
            "label": "NumFicheInformation",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefFicheInformation_DateFicheInformation",
            "name": "Extraits_Extrait_Details_Detail_RefFicheInformation_DateFicheInformation",
            "label": "DateFicheInformation",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "name": "Extraits_Extrait_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "name": "Extraits_Extrait_Details_Detail_DecDouane_DateDecD",
            "label": "DateDecD",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_Startup': {
    type: 'CRS_Startup',
    label: 'Déclaration CRS_Startup',
    codeAnnexe: 'CRS-STARTUP',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateobtStartup",
            "label": "DateobtStartup",
            "path": "_entete.RefCompte.DateobtStartup"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateobtStartup",
            "name": "Extraits_Extrait_Entete_RefCompte_DateobtStartup",
            "label": "DateobtStartup",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'CRS_NEG': {
    type: 'CRS_NEG',
    label: 'Déclaration CRS_NEG',
    codeAnnexe: 'CRS-NEG_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "path": "_entete.AgenceDom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "path": "_entete.Titulaire.TypeTitul"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "_entete.Titulaire.TypeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "_entete.Titulaire.CodeIdentifiant"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "path": "_entete.Titulaire.Nationalite"
      },
      {
            "key": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "path": "_entete.Titulaire.RaisSociale"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "path": "_entete.RefCompte.Rib"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "path": "_entete.RefCompte.DeviseCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "path": "_entete.RefCompte.DateOuvCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "path": "_entete.RefCompte.EtatCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "path": "_entete.RefCompte.DateclotureCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "path": "_entete.RefCompte.DateGelCpte"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "path": "_entete.RefCompte.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "path": "_entete.RefCompte.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "path": "_entete.RefCompte.SoldDebMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldDebMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "path": "_entete.RefCompte.SoldfinMois.Value"
      },
      {
            "key": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "path": "_entete.RefCompte.SoldfinMois.Ccy"
      },
      {
            "key": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "path": "RefOperation.NatMvtOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "path": "RefOperation.MntOpDev.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "path": "RefOperation.MntOpDev.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "path": "RefOperation.MntOpDin.Value"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "path": "RefOperation.MntOpDin.Ccy"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "path": "RefOperation.DateMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_TypeOp",
            "label": "TypeOp",
            "path": "RefOperation.TypeOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "path": "RefOperation.NatOp"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "path": "RefOperation.CodMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "path": "RefOperation.ModReg"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "path": "RefOperation.NumMsgeSwiftMvt"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "path": "RefAutorisationBct.DateAutBCT"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_NomFourniClient",
            "label": "NomFourniClient",
            "path": "NomFourniClient"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "path": "DenomBenif"
      },
      {
            "key": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "path": "Pays"
      }
],
    fields: [
      {
            "id": "Extraits_Extrait_Entete_AgenceDom",
            "name": "Extraits_Extrait_Entete_AgenceDom",
            "label": "AgenceDom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeTitul",
            "label": "TypeTitul",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "name": "Extraits_Extrait_Entete_Titulaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nom",
            "name": "Extraits_Extrait_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "name": "Extraits_Extrait_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "name": "Extraits_Extrait_Entete_Titulaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "name": "Extraits_Extrait_Entete_Titulaire_RaisSociale",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_Rib",
            "name": "Extraits_Extrait_Entete_RefCompte_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DeviseCpte",
            "label": "DeviseCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateOuvCpte",
            "label": "DateOuvCpte",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_EtatCpte",
            "label": "EtatCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateclotureCpte",
            "label": "DateclotureCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "name": "Extraits_Extrait_Entete_RefCompte_DateGelCpte",
            "label": "DateGelCpte",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "name": "Extraits_Extrait_Entete_RefCompte_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Value",
            "label": "SoldDebMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldDebMois_Ccy",
            "label": "Ccy (le solde début du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Value",
            "label": "SoldfinMois",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "name": "Extraits_Extrait_Entete_RefCompte_SoldfinMois_Ccy",
            "label": "Ccy (le solde fin du mois objet de déclaration)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Entete_NbrEcritures",
            "name": "Extraits_Extrait_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Rib",
            "name": "Extraits_Extrait_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatMvtOp",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Value",
            "label": "MntOpDev",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDev_Ccy",
            "label": "Ccy (Montant de l’opération en devises)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Value",
            "label": "MntOpDin",
            "type": "number"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_MntOpDin_Ccy",
            "label": "Ccy (la CV en TND du montant de l’opération)",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_DateMvt",
            "label": "DateMvt",
            "type": "date"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_TypeOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_TypeOp",
            "label": "TypeOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_CodMvt",
            "label": "CodMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "name": "Extraits_Extrait_Details_Detail_RefOperation_NumMsgeSwiftMvt",
            "label": "NumMsgeSwiftMvt",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "name": "Extraits_Extrait_Details_Detail_RefAutorisationBct_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_NomFourniClient",
            "name": "Extraits_Extrait_Details_Detail_NomFourniClient",
            "label": "NomFourniClient",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_DenomBenif",
            "name": "Extraits_Extrait_Details_Detail_DenomBenif",
            "label": "DenomBenif",
            "type": "text"
      },
      {
            "id": "Extraits_Extrait_Details_Detail_Pays",
            "name": "Extraits_Extrait_Details_Detail_Pays",
            "label": "Pays",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_DOMSC': {
    type: 'TR_DOMSC',
    label: 'Déclaration TR_DOMSC',
    codeAnnexe: 'TR-DOMSC',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "Benificiaire.CodeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "path": "Benificiaire.CategBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_AnneScol",
            "label": "AnneScol",
            "path": "DomScolarite.AnneScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DatDebScol",
            "label": "DatDebScol",
            "path": "DomScolarite.DatDebScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DatFinScol",
            "label": "DatFinScol",
            "path": "DomScolarite.DatFinScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "label": "NumDomDosScol",
            "path": "DomScolarite.NumDomDosScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DatDomDosScol",
            "label": "DatDomDosScol",
            "path": "DomScolarite.DatDomDosScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_OuvRenDosScol",
            "label": "OuvRenDosScol",
            "path": "DomScolarite.OuvRenDosScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DatOuvRen",
            "label": "DatOuvRen",
            "path": "DomScolarite.DatOuvRen"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_NumAutBCT",
            "label": "NumAutBCT",
            "path": "DomScolarite.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DateAutBCT",
            "label": "DateAutBCT",
            "path": "DomScolarite.DateAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_BoursEtude",
            "label": "BoursEtude",
            "path": "Bourse.BoursEtude"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_MntBoursDev_Value",
            "label": "MntBoursDev",
            "path": "Bourse.MntBoursDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_CodDevMntBourse_Value",
            "label": "CodDevMntBourse",
            "path": "Bourse.CodDevMntBourse.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_MntBoursTnd_Value",
            "label": "MntBoursTnd",
            "path": "Bourse.MntBoursTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_DureBours",
            "label": "DureBours",
            "path": "Bourse.DureBours"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_DatDebBours",
            "label": "DatDebBours",
            "path": "Bourse.DatDebBours"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Bourse_DatFinBours",
            "label": "DatFinBours",
            "path": "Bourse.DatFinBours"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_AnneScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_AnneScol",
            "label": "AnneScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DatDebScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DatDebScol",
            "label": "DatDebScol",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DatFinScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DatFinScol",
            "label": "DatFinScol",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "label": "NumDomDosScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DatDomDosScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DatDomDosScol",
            "label": "DatDomDosScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_OuvRenDosScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_OuvRenDosScol",
            "label": "OuvRenDosScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DatOuvRen",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DatOuvRen",
            "label": "DatOuvRen",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DateAutBCT",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DateAutBCT",
            "label": "DateAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_BoursEtude",
            "name": "Transferts_Transfert_Details_Detail_Bourse_BoursEtude",
            "label": "BoursEtude",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_MntBoursDev_Value",
            "name": "Transferts_Transfert_Details_Detail_Bourse_MntBoursDev_Value",
            "label": "MntBoursDev",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_CodDevMntBourse_Value",
            "name": "Transferts_Transfert_Details_Detail_Bourse_CodDevMntBourse_Value",
            "label": "CodDevMntBourse",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_MntBoursTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_Bourse_MntBoursTnd_Value",
            "label": "MntBoursTnd",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_DureBours",
            "name": "Transferts_Transfert_Details_Detail_Bourse_DureBours",
            "label": "DureBours",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_DatDebBours",
            "name": "Transferts_Transfert_Details_Detail_Bourse_DatDebBours",
            "label": "DatDebBours",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Bourse_DatFinBours",
            "name": "Transferts_Transfert_Details_Detail_Bourse_DatFinBours",
            "label": "DatFinBours",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_SC': {
    type: 'TR_SC',
    label: 'Déclaration TR_SC',
    codeAnnexe: 'TR-SC',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "label": "NumDomDosScol",
            "path": "DomScolarite.NumDomDosScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DomScolarite_DateDomDosScol",
            "label": "DateDomDosScol",
            "path": "DomScolarite.DateDomDosScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "label": "LibOp",
            "path": "OperationTransf.LibOp"
      },
      {
            "key": "MntTransDev Ccy_7",
            "label": "MntTransDev Ccy",
            "path": "MntTransDev Ccy_7"
      },
      {
            "key": "CvMntTnd Ccy_8",
            "label": "CvMntTnd Ccy",
            "path": "CvMntTnd Ccy_8"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "path": "OperationTransf.DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "label": "ModTrans",
            "path": "OperationTransf.ModTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "path": "OperationTransf.CodPaysDest"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "label": "NumAutBctSD",
            "path": "OperationTransf.NumAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "label": "DatAutBctSD",
            "path": "OperationTransf.DatAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_NumDomDosScol",
            "label": "NumDomDosScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DomScolarite_DateDomDosScol",
            "name": "Transferts_Transfert_Details_Detail_DomScolarite_DateDomDosScol",
            "label": "DateDomDosScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "label": "LibOp",
            "type": "text"
      },
      {
            "id": "MntTransDev Ccy_7",
            "name": "MntTransDev Ccy_7",
            "label": "MntTransDev Ccy",
            "type": "text"
      },
      {
            "id": "CvMntTnd Ccy_8",
            "name": "CvMntTnd Ccy_8",
            "label": "CvMntTnd Ccy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "label": "ModTrans",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "label": "NumAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "label": "DatAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_MS': {
    type: 'TR_MS',
    label: 'Déclaration TR_MS',
    codeAnnexe: 'TR-MS_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "Benificiaire.CodeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Employeur_GroupClass",
            "label": "GroupClass",
            "path": "Employeur.GroupClass"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Employeur_IdenEmploy",
            "label": "IdenEmploy",
            "path": "Employeur.IdenEmploy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Employeur_DenomEmploy",
            "label": "DenomEmploy",
            "path": "Employeur.DenomEmploy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_NatVoy",
            "label": "NatVoy",
            "path": "MissionStage.NatVoy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_NumMissStage",
            "label": "NumMissStage",
            "path": "MissionStage.NumMissStage"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_DatOrdMissStage",
            "label": "DatOrdMissStage",
            "path": "MissionStage.DatOrdMissStage"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_DatDebdMissStage",
            "label": "DatDebdMissStage",
            "path": "MissionStage.DatDebdMissStage"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_DatFindMissStage",
            "label": "DatFindMissStage",
            "path": "MissionStage.DatFindMissStage"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_NbreJrsMissStage",
            "label": "NbreJrsMissStage",
            "path": "MissionStage.NbreJrsMissStage"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_PrisCharg",
            "label": "PrisCharg",
            "path": "MissionStage.PrisCharg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_NatPrisCharg",
            "label": "NatPrisCharg",
            "path": "MissionStage.NatPrisCharg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_MissionStage_TauxJr",
            "label": "TauxJr",
            "path": "MissionStage.TauxJr"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "label": "ModTrans",
            "path": "OperationTransf.ModTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "path": "OperationTransf.DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant du transfert en devises)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Employeur_GroupClass",
            "name": "Transferts_Transfert_Details_Detail_Employeur_GroupClass",
            "label": "GroupClass",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Employeur_IdenEmploy",
            "name": "Transferts_Transfert_Details_Detail_Employeur_IdenEmploy",
            "label": "IdenEmploy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Employeur_DenomEmploy",
            "name": "Transferts_Transfert_Details_Detail_Employeur_DenomEmploy",
            "label": "DenomEmploy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_NatVoy",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_NatVoy",
            "label": "NatVoy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_NumMissStage",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_NumMissStage",
            "label": "NumMissStage",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_DatOrdMissStage",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_DatOrdMissStage",
            "label": "DatOrdMissStage",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_DatDebdMissStage",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_DatDebdMissStage",
            "label": "DatDebdMissStage",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_DatFindMissStage",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_DatFindMissStage",
            "label": "DatFindMissStage",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_NbreJrsMissStage",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_NbreJrsMissStage",
            "label": "NbreJrsMissStage",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_PrisCharg",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_PrisCharg",
            "label": "PrisCharg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_NatPrisCharg",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_NatPrisCharg",
            "label": "NatPrisCharg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_MissionStage_TauxJr",
            "name": "Transferts_Transfert_Details_Detail_MissionStage_TauxJr",
            "label": "TauxJr",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrans",
            "label": "ModTrans",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant du transfert en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_SM': {
    type: 'TR_SM',
    label: 'Déclaration TR_SM',
    codeAnnexe: 'TR-SM',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefPatient_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "RefPatient.TypeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefPatient_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "RefPatient.CodeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefPatient_Nom",
            "label": "Nom",
            "path": "RefPatient.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefPatient_Prenom",
            "label": "Prenom",
            "path": "RefPatient.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_NomPrenoMed",
            "label": "NomPrenoMed",
            "path": "NomPrenoMed"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "path": "CodPaysDest"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_PrisCharg",
            "label": "PrisCharg",
            "path": "PrisCharg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Accomp",
            "label": "Accomp",
            "path": "Accomp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAccompagnateur_TypIdentifiantAccomp",
            "label": "TypIdentifiantAccomp",
            "path": "RefAccompagnateur.TypIdentifiantAccomp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAccompagnateur_CodeIdentifiantAccomp",
            "label": "CodeIdentifiantAccomp",
            "path": "RefAccompagnateur.CodeIdentifiantAccomp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAccompagnateur_NomAccomp",
            "label": "NomAccomp",
            "path": "RefAccompagnateur.NomAccomp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAccompagnateur_PrenomAccomp",
            "label": "PrenomAccomp",
            "path": "RefAccompagnateur.PrenomAccomp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "MntTransDev Ccy_17",
            "label": "MntTransDev Ccy",
            "path": "MntTransDev Ccy_17"
      },
      {
            "key": "CvMntTnd Ccy_18",
            "label": "CvMntTnd Ccy",
            "path": "CvMntTnd Ccy_18"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefPatient_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_RefPatient_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefPatient_CodeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_RefPatient_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefPatient_Nom",
            "name": "Transferts_Transfert_Details_Detail_RefPatient_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefPatient_Prenom",
            "name": "Transferts_Transfert_Details_Detail_RefPatient_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_NomPrenoMed",
            "name": "Transferts_Transfert_Details_Detail_NomPrenoMed",
            "label": "NomPrenoMed",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_PrisCharg",
            "name": "Transferts_Transfert_Details_Detail_PrisCharg",
            "label": "PrisCharg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Accomp",
            "name": "Transferts_Transfert_Details_Detail_Accomp",
            "label": "Accomp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAccompagnateur_TypIdentifiantAccomp",
            "name": "Transferts_Transfert_Details_Detail_RefAccompagnateur_TypIdentifiantAccomp",
            "label": "TypIdentifiantAccomp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAccompagnateur_CodeIdentifiantAccomp",
            "name": "Transferts_Transfert_Details_Detail_RefAccompagnateur_CodeIdentifiantAccomp",
            "label": "CodeIdentifiantAccomp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAccompagnateur_NomAccomp",
            "name": "Transferts_Transfert_Details_Detail_RefAccompagnateur_NomAccomp",
            "label": "NomAccomp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAccompagnateur_PrenomAccomp",
            "name": "Transferts_Transfert_Details_Detail_RefAccompagnateur_PrenomAccomp",
            "label": "PrenomAccomp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "MntTransDev Ccy_17",
            "name": "MntTransDev Ccy_17",
            "label": "MntTransDev Ccy",
            "type": "text"
      },
      {
            "id": "CvMntTnd Ccy_18",
            "name": "CvMntTnd Ccy_18",
            "label": "CvMntTnd Ccy",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_IE': {
    type: 'TR_IE',
    label: 'Déclaration TR_IE',
    codeAnnexe: 'TR-IE_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_MatricFiscalInvt",
            "label": "MatricFiscalInvt",
            "path": "RefInvestisseur.MatricFiscalInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "label": "RaisSocialInvt",
            "path": "RefInvestisseur.RaisSocialInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodActInvt",
            "label": "CodActInvt",
            "path": "CodActInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_SocExport",
            "label": "SocExport",
            "path": "SocExport"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_ChiffAffaire",
            "label": "ChiffAffaire",
            "path": "ChiffAffaire"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_PosInvt",
            "label": "PosInvt",
            "path": "PosInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_FormInvt",
            "label": "FormInvt",
            "path": "FormInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_TxPart",
            "label": "TxPart",
            "path": "TxPart"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de l'opération en devises)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (Contre valeur en dinars du Montant du transfert)",
            "path": "OperationTransf.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "path": "OperationTransf.MoyenReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_RaisSocialInvtss",
            "label": "RaisSocialInvtss",
            "path": "OperationTransf.RaisSocialInvtss"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodSectActInvt",
            "label": "CodSectActInvt",
            "path": "OperationTransf.CodSectActInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodClassActInvt",
            "label": "CodClassActInvt",
            "path": "OperationTransf.CodClassActInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "path": "OperationTransf.CodPaysDest"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "path": "CodSwift"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_MatricFiscalInvt",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_MatricFiscalInvt",
            "label": "MatricFiscalInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "label": "RaisSocialInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodActInvt",
            "name": "Transferts_Transfert_Details_Detail_CodActInvt",
            "label": "CodActInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_SocExport",
            "name": "Transferts_Transfert_Details_Detail_SocExport",
            "label": "SocExport",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_ChiffAffaire",
            "name": "Transferts_Transfert_Details_Detail_ChiffAffaire",
            "label": "ChiffAffaire",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_PosInvt",
            "name": "Transferts_Transfert_Details_Detail_PosInvt",
            "label": "PosInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_FormInvt",
            "name": "Transferts_Transfert_Details_Detail_FormInvt",
            "label": "FormInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_TxPart",
            "name": "Transferts_Transfert_Details_Detail_TxPart",
            "label": "TxPart",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de l'opération en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (Contre valeur en dinars du Montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_RaisSocialInvtss",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_RaisSocialInvtss",
            "label": "RaisSocialInvtss",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodSectActInvt",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodSectActInvt",
            "label": "CodSectActInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodClassActInvt",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodClassActInvt",
            "label": "CodClassActInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodSwift",
            "name": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_R_CNR': {
    type: 'TR_R_CNR',
    label: 'Déclaration TR_R_CNR',
    codeAnnexe: 'TR-R_CNR',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "RefInvestisseur.TypeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "RefInvestisseur.CodeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_Nom",
            "label": "Nom",
            "path": "RefInvestisseur.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_Prenom",
            "label": "Prenom",
            "path": "RefInvestisseur.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "label": "RaisSocialInvt",
            "path": "RefInvestisseur.RaisSocialInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_FormPart",
            "label": "FormPart",
            "path": "FormPart"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_TxPart",
            "label": "TxPart",
            "path": "TxPart"
      },
      {
            "key": "MntTrsf_11",
            "label": "MntTrsf",
            "path": "MntTrsf_11"
      },
      {
            "key": "Ccy_12",
            "label": "Ccy",
            "path": "Ccy_12"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CvMntTnd_Ccy",
            "label": "Ccy (Contre valeur en dinars du Montant du transfert)",
            "path": "CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSocietetNR_IdentifiantSocNR",
            "label": "IdentifiantSocNR",
            "path": "RefSocietetNR.IdentifiantSocNR"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSocietetNR_RaisSocialSocNr",
            "label": "RaisSocialSocNr",
            "path": "RefSocietetNR.RaisSocialSocNr"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodInvt",
            "label": "CodInvt",
            "path": "CodInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_SuppActiv",
            "label": "SuppActiv",
            "path": "SuppActiv"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CapSocSocNR",
            "label": "CapSocSocNR",
            "path": "CapSocSocNR"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_TxPartNonRes",
            "label": "TxPartNonRes",
            "path": "TxPartNonRes"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_CodeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_Nom",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_Prenom",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "name": "Transferts_Transfert_Details_Detail_RefInvestisseur_RaisSocialInvt",
            "label": "RaisSocialInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_FormPart",
            "name": "Transferts_Transfert_Details_Detail_FormPart",
            "label": "FormPart",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_TxPart",
            "name": "Transferts_Transfert_Details_Detail_TxPart",
            "label": "TxPart",
            "type": "text"
      },
      {
            "id": "MntTrsf_11",
            "name": "MntTrsf_11",
            "label": "MntTrsf",
            "type": "text"
      },
      {
            "id": "Ccy_12",
            "name": "Ccy_12",
            "label": "Ccy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_CvMntTnd_Ccy",
            "label": "Ccy (Contre valeur en dinars du Montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSocietetNR_IdentifiantSocNR",
            "name": "Transferts_Transfert_Details_Detail_RefSocietetNR_IdentifiantSocNR",
            "label": "IdentifiantSocNR",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSocietetNR_RaisSocialSocNr",
            "name": "Transferts_Transfert_Details_Detail_RefSocietetNR_RaisSocialSocNr",
            "label": "RaisSocialSocNr",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodInvt",
            "name": "Transferts_Transfert_Details_Detail_CodInvt",
            "label": "CodInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_SuppActiv",
            "name": "Transferts_Transfert_Details_Detail_SuppActiv",
            "label": "SuppActiv",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CapSocSocNR",
            "name": "Transferts_Transfert_Details_Detail_CapSocSocNR",
            "label": "CapSocSocNR",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_TxPartNonRes",
            "name": "Transferts_Transfert_Details_Detail_TxPartNonRes",
            "label": "TxPartNonRes",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_DOM_EE': {
    type: 'TR_DOM_EE',
    label: 'Déclaration TR_DOM_EE',
    codeAnnexe: 'TR-DOM-EE_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDomConvention_NumDomConv",
            "label": "NumDomConv",
            "path": "RefDomConvention.NumDomConv"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDomConvention_DatDomConv",
            "label": "DatDomConv",
            "path": "RefDomConvention.DatDomConv"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_MatFiscalSocEmp",
            "label": "MatFiscalSocEmp",
            "path": "RefSocEmprunteuse.MatFiscalSocEmp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_DenomSocEmp",
            "label": "DenomSocEmp",
            "path": "RefSocEmprunteuse.DenomSocEmp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_CodNatSocEmp",
            "label": "CodNatSocEmp",
            "path": "RefSocEmprunteuse.CodNatSocEmp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodOrgNot",
            "label": "CodOrgNot",
            "path": "CodOrgNot"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DenomOrgPret",
            "label": "DenomOrgPret",
            "path": "DenomOrgPret"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Value",
            "label": "MntEmp",
            "path": "RefEmprunt.MntEmp.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Ccy",
            "label": "Ccy (Montant de l’emprunt)",
            "path": "RefEmprunt.MntEmp.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "RefEmprunt.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Ccy",
            "label": "Ccy (Contre-valeur en dinars du montant de l’emprunt)",
            "path": "RefEmprunt.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_FormEmpExt",
            "label": "FormEmpExt",
            "path": "RefEmprunt.FormEmpExt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_AutrFormExt",
            "label": "AutrFormExt",
            "path": "RefEmprunt.AutrFormExt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_TxInteret",
            "label": "TxInteret",
            "path": "RefEmprunt.TxInteret"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_DureRemb",
            "label": "DureRemb",
            "path": "RefEmprunt.DureRemb"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefEmprunt_ModRemb",
            "label": "ModRemb",
            "path": "RefEmprunt.ModRemb"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFicheInvest_NumFichInvt",
            "label": "NumFichInvt",
            "path": "RefFicheInvest.NumFichInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFicheInvest_DatFichInvt",
            "label": "DatFichInvt",
            "path": "RefFicheInvest.DatFichInvt"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_AnneDec",
            "name": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_AnneDec_3",
            "name": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_4",
            "name": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDomConvention_NumDomConv",
            "name": "Transferts_Transfert_Details_Detail_RefDomConvention_NumDomConv",
            "label": "NumDomConv",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDomConvention_DatDomConv",
            "name": "Transferts_Transfert_Details_Detail_RefDomConvention_DatDomConv",
            "label": "DatDomConv",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_MatFiscalSocEmp",
            "name": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_MatFiscalSocEmp",
            "label": "MatFiscalSocEmp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_DenomSocEmp",
            "name": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_DenomSocEmp",
            "label": "DenomSocEmp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_CodNatSocEmp",
            "name": "Transferts_Transfert_Details_Detail_RefSocEmprunteuse_CodNatSocEmp",
            "label": "CodNatSocEmp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodOrgNot",
            "name": "Transferts_Transfert_Details_Detail_CodOrgNot",
            "label": "CodOrgNot",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DenomOrgPret",
            "name": "Transferts_Transfert_Details_Detail_DenomOrgPret",
            "label": "DenomOrgPret",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Value",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Value",
            "label": "MntEmp",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Ccy",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_MntEmp_Ccy",
            "label": "Ccy (Montant de l’emprunt)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_CvMntTnd_Ccy",
            "label": "Ccy (Contre-valeur en dinars du montant de l’emprunt)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_FormEmpExt",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_FormEmpExt",
            "label": "FormEmpExt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_AutrFormExt",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_AutrFormExt",
            "label": "AutrFormExt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_TxInteret",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_TxInteret",
            "label": "TxInteret",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_DureRemb",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_DureRemb",
            "label": "DureRemb",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefEmprunt_ModRemb",
            "name": "Transferts_Transfert_Details_Detail_RefEmprunt_ModRemb",
            "label": "ModRemb",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFicheInvest_NumFichInvt",
            "name": "Transferts_Transfert_Details_Detail_RefFicheInvest_NumFichInvt",
            "label": "NumFichInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFicheInvest_DatFichInvt",
            "name": "Transferts_Transfert_Details_Detail_RefFicheInvest_DatFichInvt",
            "label": "DatFichInvt",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_REM_EE': {
    type: 'TR_REM_EE',
    label: 'Déclaration TR_REM_EE',
    codeAnnexe: 'TR-REM-EE',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "TypeOp_2",
            "label": "TypeOp",
            "path": "TypeOp_2"
      },
      {
            "key": "TypeIdentifiant_3",
            "label": "TypeIdentifiant",
            "path": "TypeIdentifiant_3"
      },
      {
            "key": "CodeIdentifiant_4",
            "label": "CodeIdentifiant",
            "path": "CodeIdentifiant_4"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_EmprunteurPreteur_DenomSocEmp",
            "label": "Nom",
            "path": "EmprunteurPreteur.DenomSocEmp"
      },
      {
            "key": "Prenom_6",
            "label": "Prenom",
            "path": "Prenom_6"
      },
      {
            "key": "RaisSociale_7",
            "label": "RaisSociale",
            "path": "RaisSociale_7"
      },
      {
            "key": "NatMvtOp_8",
            "label": "NatMvtOp",
            "path": "NatMvtOp_8"
      },
      {
            "key": "MntOpDev_9",
            "label": "MntOpDev",
            "path": "MntOpDev_9"
      },
      {
            "key": "Ccy_10",
            "label": "Ccy",
            "path": "Ccy_10"
      },
      {
            "key": "MntOpDin_11",
            "label": "MntOpDin",
            "path": "MntOpDin_11"
      },
      {
            "key": "Ccy_12",
            "label": "Ccy",
            "path": "Ccy_12"
      },
      {
            "key": "DateMvt_13",
            "label": "DateMvt",
            "path": "DateMvt_13"
      },
      {
            "key": "EncoursPlac_14",
            "label": "EncoursPlac",
            "path": "EncoursPlac_14"
      },
      {
            "key": "NatOp_15",
            "label": "NatOp",
            "path": "NatOp_15"
      },
      {
            "key": "SuppOp_16",
            "label": "SuppOp",
            "path": "SuppOp_16"
      },
      {
            "key": "NumSupp_17",
            "label": "NumSupp",
            "path": "NumSupp_17"
      },
      {
            "key": "DateSupp_18",
            "label": "DateSupp",
            "path": "DateSupp_18"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "TypeOp_2",
            "name": "TypeOp_2",
            "label": "TypeOp",
            "type": "text"
      },
      {
            "id": "TypeIdentifiant_3",
            "name": "TypeIdentifiant_3",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodeIdentifiant_4",
            "name": "CodeIdentifiant_4",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_EmprunteurPreteur_DenomSocEmp",
            "name": "Transferts_Transfert_Details_Detail_EmprunteurPreteur_DenomSocEmp",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Prenom_6",
            "name": "Prenom_6",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "RaisSociale_7",
            "name": "RaisSociale_7",
            "label": "RaisSociale",
            "type": "text"
      },
      {
            "id": "NatMvtOp_8",
            "name": "NatMvtOp_8",
            "label": "NatMvtOp",
            "type": "text"
      },
      {
            "id": "MntOpDev_9",
            "name": "MntOpDev_9",
            "label": "MntOpDev",
            "type": "text"
      },
      {
            "id": "Ccy_10",
            "name": "Ccy_10",
            "label": "Ccy",
            "type": "text"
      },
      {
            "id": "MntOpDin_11",
            "name": "MntOpDin_11",
            "label": "MntOpDin",
            "type": "text"
      },
      {
            "id": "Ccy_12",
            "name": "Ccy_12",
            "label": "Ccy",
            "type": "text"
      },
      {
            "id": "DateMvt_13",
            "name": "DateMvt_13",
            "label": "DateMvt",
            "type": "text"
      },
      {
            "id": "EncoursPlac_14",
            "name": "EncoursPlac_14",
            "label": "EncoursPlac",
            "type": "text"
      },
      {
            "id": "NatOp_15",
            "name": "NatOp_15",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "SuppOp_16",
            "name": "SuppOp_16",
            "label": "SuppOp",
            "type": "text"
      },
      {
            "id": "NumSupp_17",
            "name": "NumSupp_17",
            "label": "NumSupp",
            "type": "text"
      },
      {
            "id": "DateSupp_18",
            "name": "DateSupp_18",
            "label": "DateSupp",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_FP': {
    type: 'TR_FP',
    label: 'Déclaration TR_FP',
    codeAnnexe: 'TR-FP',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_7",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_7"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NiveauForm",
            "label": "NiveauForm",
            "path": "OperationTransf.NiveauForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_AnnScol",
            "label": "AnnScol",
            "path": "OperationTransf.AnnScol"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_TypAlloc",
            "label": "TypAlloc",
            "path": "OperationTransf.TypAlloc"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NumDomDosForm",
            "label": "NumDomDosForm",
            "path": "OperationTransf.NumDomDosForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatDomDosForm",
            "label": "DatDomDosForm",
            "path": "OperationTransf.DatDomDosForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_BoursForm",
            "label": "BoursForm",
            "path": "OperationTransf.BoursForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntBoursDev_Value",
            "label": "MntBoursDev",
            "path": "OperationTransf.MntBoursDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DevMntBours_Value",
            "label": "DevMntBours",
            "path": "OperationTransf.DevMntBours.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Value",
            "label": "MntAllocDev",
            "path": "OperationTransf.MntAllocDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Ccy",
            "label": "Ccy (Montant de l'allocation en devises)",
            "path": "OperationTransf.MntAllocDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Value",
            "label": "MntTrans",
            "path": "OperationTransf.MntTrans.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Ccy",
            "label": "Ccy (Montant du transfert)",
            "path": "OperationTransf.MntTrans.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Value",
            "label": "CvTndMntGlob",
            "path": "OperationTransf.CvTndMntGlob.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Ccy",
            "label": "Ccy (C/V en TND du montant global)",
            "path": "OperationTransf.CvTndMntGlob.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "path": "OperationTransf.DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrasn",
            "label": "ModTrasn",
            "path": "OperationTransf.ModTrasn"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutSortDev_NumAutBctSD",
            "label": "NumAutBctSD",
            "path": "RefAutSortDev.NumAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutSortDev_DatAutBctSD",
            "label": "DatAutBctSD",
            "path": "RefAutSortDev.DatAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFormation_DureForm",
            "label": "DureForm",
            "path": "RefFormation.DureForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFormation_DatDebBenifForm",
            "label": "DatDebBenifForm",
            "path": "RefFormation.DatDebBenifForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFormation_DatFinBenifForm",
            "label": "DatFinBenifForm",
            "path": "RefFormation.DatFinBenifForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFormation_CodPaysForm",
            "label": "CodPaysForm",
            "path": "RefFormation.CodPaysForm"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFormation_NatOp",
            "label": "NatOp",
            "path": "RefFormation.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_AnneDec",
            "name": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_AnneDec_3",
            "name": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_4",
            "name": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_7",
            "name": "CodIdentifiant_7",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NiveauForm",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NiveauForm",
            "label": "NiveauForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_AnnScol",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_AnnScol",
            "label": "AnnScol",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_TypAlloc",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_TypAlloc",
            "label": "TypAlloc",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NumDomDosForm",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NumDomDosForm",
            "label": "NumDomDosForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatDomDosForm",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatDomDosForm",
            "label": "DatDomDosForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_BoursForm",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_BoursForm",
            "label": "BoursForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntBoursDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntBoursDev_Value",
            "label": "MntBoursDev",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DevMntBours_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DevMntBours_Value",
            "label": "DevMntBours",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Value",
            "label": "MntAllocDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocDev_Ccy",
            "label": "Ccy (Montant de l'allocation en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Value",
            "label": "MntTrans",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTrans_Ccy",
            "label": "Ccy (Montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Value",
            "label": "CvTndMntGlob",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvTndMntGlob_Ccy",
            "label": "Ccy (C/V en TND du montant global)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrasn",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModTrasn",
            "label": "ModTrasn",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutSortDev_NumAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_RefAutSortDev_NumAutBctSD",
            "label": "NumAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutSortDev_DatAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_RefAutSortDev_DatAutBctSD",
            "label": "DatAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFormation_DureForm",
            "name": "Transferts_Transfert_Details_Detail_RefFormation_DureForm",
            "label": "DureForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFormation_DatDebBenifForm",
            "name": "Transferts_Transfert_Details_Detail_RefFormation_DatDebBenifForm",
            "label": "DatDebBenifForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFormation_DatFinBenifForm",
            "name": "Transferts_Transfert_Details_Detail_RefFormation_DatFinBenifForm",
            "label": "DatFinBenifForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFormation_CodPaysForm",
            "name": "Transferts_Transfert_Details_Detail_RefFormation_CodPaysForm",
            "label": "CodPaysForm",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFormation_NatOp",
            "name": "Transferts_Transfert_Details_Detail_RefFormation_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_RETALL': {
    type: 'TR_RETALL',
    label: 'Déclaration TR_RETALL',
    codeAnnexe: 'TR-RETALL',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "path": "Benificiaire.CategBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "path": "Benificiaire.Age"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "path": "Benificiaire.CodeIdentifiant"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_NatOp",
            "label": "NatOp",
            "path": "RefRetrocession.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_CadRetro",
            "label": "CadRetro",
            "path": "RefRetrocession.CadRetro"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetro",
            "label": "DatRetro",
            "path": "RefRetrocession.DatRetro"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_MntRetroDev_Value",
            "label": "MntRetroDev",
            "path": "RefRetrocession.MntRetroDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_DevMntRetro_Value",
            "label": "DevMntRetro",
            "path": "RefRetrocession.DevMntRetro.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_CVMntRetro_Value",
            "label": "CVMntRetro",
            "path": "RefRetrocession.CVMntRetro.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_NumAutBctSD",
            "label": "NumAutBctSD",
            "path": "RefRetrocession.NumAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_DatAutBctSD",
            "label": "DatAutBctSD",
            "path": "RefRetrocession.DatAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetVoy",
            "label": "DatRetVoy",
            "path": "RefRetrocession.DatRetVoy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "path": "DecDouane.NumDecD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DecDouane_DatDecD",
            "label": "DatDecD",
            "path": "DecDouane.DatDecD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DatDelivAllocTouris",
            "label": "DatDelivAllocTouris",
            "path": "DatDelivAllocTouris"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CodeIdentifiant",
            "label": "CodeIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_NatOp",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_CadRetro",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_CadRetro",
            "label": "CadRetro",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetro",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetro",
            "label": "DatRetro",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_MntRetroDev_Value",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_MntRetroDev_Value",
            "label": "MntRetroDev",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_DevMntRetro_Value",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_DevMntRetro_Value",
            "label": "DevMntRetro",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_CVMntRetro_Value",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_CVMntRetro_Value",
            "label": "CVMntRetro",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_NumAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_NumAutBctSD",
            "label": "NumAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_DatAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_DatAutBctSD",
            "label": "DatAutBctSD",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetVoy",
            "name": "Transferts_Transfert_Details_Detail_RefRetrocession_DatRetVoy",
            "label": "DatRetVoy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DecDouane_NumDecD",
            "name": "Transferts_Transfert_Details_Detail_DecDouane_NumDecD",
            "label": "NumDecD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DecDouane_DatDecD",
            "name": "Transferts_Transfert_Details_Detail_DecDouane_DatDecD",
            "label": "DatDecD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DatDelivAllocTouris",
            "name": "Transferts_Transfert_Details_Detail_DatDelivAllocTouris",
            "label": "DatDelivAllocTouris",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_ALL_CPI': {
    type: 'TR_ALL_CPI',
    label: 'Déclaration TR_ALL_CPI',
    codeAnnexe: 'TR-ALL-CPI_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_5",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_5"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "path": "Benificiaire.CategBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "path": "Benificiaire.Age"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "label": "EcoSalaire",
            "path": "OperationTransf.EcoSalaire"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Value",
            "label": "MntInitDinCartInter",
            "path": "OperationTransf.MntInitDinCartInter.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Ccy",
            "label": "Ccy (Montant initialement délivré en dinar par carte internationale)",
            "path": "OperationTransf.MntInitDinCartInter.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Value",
            "label": "MntDin",
            "path": "OperationTransf.MntDin.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Ccy",
            "label": "Ccy (Montant en dinars effectif utilisé)",
            "path": "OperationTransf.MntDin.Ccy"
      },
      {
            "key": "MntDev_17",
            "label": "MntDev",
            "path": "MntDev_17"
      },
      {
            "key": "Ccy_18",
            "label": "Ccy",
            "path": "Ccy_18"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_5",
            "name": "CodIdentifiant_5",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "label": "EcoSalaire",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Value",
            "label": "MntInitDinCartInter",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntInitDinCartInter_Ccy",
            "label": "Ccy (Montant initialement délivré en dinar par carte internationale)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Value",
            "label": "MntDin",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntDin_Ccy",
            "label": "Ccy (Montant en dinars effectif utilisé)",
            "type": "text"
      },
      {
            "id": "MntDev_17",
            "name": "MntDev_17",
            "label": "MntDev",
            "type": "text"
      },
      {
            "id": "Ccy_18",
            "name": "Ccy_18",
            "label": "Ccy",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_ALL': {
    type: 'TR_ALL',
    label: 'Déclaration TR_ALL',
    codeAnnexe: 'TR-ALL_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "path": "Benificiaire.CategBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "path": "Benificiaire.Age"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_5",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_5"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "label": "EcoSalaire",
            "path": "OperationTransf.EcoSalaire"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "path": "OperationTransf.CodPaysDest"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModDeliv",
            "label": "ModDeliv",
            "path": "OperationTransf.ModDeliv"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Value",
            "label": "MntAllocTourDev",
            "path": "OperationTransf.MntAllocTourDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Ccy",
            "label": "Ccy (Montant de l'allocation touristique en devises)",
            "path": "OperationTransf.MntAllocTourDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Value",
            "label": "MntAlloc",
            "path": "OperationTransf.MntAlloc.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Ccy",
            "label": "Ccy (Montant de l'allocation en dinars)",
            "path": "OperationTransf.MntAlloc.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatDelivAllocTour",
            "label": "DatDelivAllocTour",
            "path": "OperationTransf.DatDelivAllocTour"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "label": "NumAutBctSD",
            "path": "OperationTransf.NumAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "label": "DatAutBctSD",
            "path": "OperationTransf.DatAutBctSD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_CategBenif",
            "label": "CategBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Age",
            "label": "Age",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_5",
            "name": "CodIdentifiant_5",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_EcoSalaire",
            "label": "EcoSalaire",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModDeliv",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModDeliv",
            "label": "ModDeliv",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Value",
            "label": "MntAllocTourDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAllocTourDev_Ccy",
            "label": "Ccy (Montant de l'allocation touristique en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Value",
            "label": "MntAlloc",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntAlloc_Ccy",
            "label": "Ccy (Montant de l'allocation en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatDelivAllocTour",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatDelivAllocTour",
            "label": "DatDelivAllocTour",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NumAutBctSD",
            "label": "NumAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatAutBctSD",
            "label": "DatAutBctSD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_ALL_CTI': {
    type: 'TR_ALL_CTI',
    label: 'Déclaration TR_ALL_CTI',
    codeAnnexe: 'TR-ALL-CTI_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "label": "NatBenif",
            "path": "Benificiaire.NatBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_6",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_6"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "label": "RaisSocial",
            "path": "Benificiaire.RaisSocial"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_PPObtDiplomBac",
            "label": "PPObtDiplomBac",
            "path": "PPObtDiplomBac"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_SocLabStratup",
            "label": "SocLabStratup",
            "path": "SocLabStratup"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Value",
            "label": "MntInsAllocDin",
            "path": "RefMntAllocation.MntInsAllocDin.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Ccy",
            "label": "Ccy (Montant inscrit de l'allocation en dinars)",
            "path": "RefMntAllocation.MntInsAllocDin.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatAlimCart_Value",
            "label": "DatAlimCart",
            "path": "RefMntAllocation.DatAlimCart.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Value",
            "label": "MntAllocTrsfDin",
            "path": "RefMntAllocation.MntAllocTrsfDin.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Ccy",
            "label": "Ccy (Montant de l'allocation transféré en dinars)",
            "path": "RefMntAllocation.MntAllocTrsfDin.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatTrans_Value",
            "label": "DatTrans",
            "path": "RefMntAllocation.DatTrans.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Value",
            "label": "MntRapaCartDin",
            "path": "RefMntAllocation.MntRapaCartDin.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Ccy",
            "label": "Ccy (Montant rapatrié sur la carte en dinars)",
            "path": "RefMntAllocation.MntRapaCartDin.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "label": "NatBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_6",
            "name": "CodIdentifiant_6",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "label": "RaisSocial",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_PPObtDiplomBac",
            "name": "Transferts_Transfert_Details_Detail_PPObtDiplomBac",
            "label": "PPObtDiplomBac",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_SocLabStratup",
            "name": "Transferts_Transfert_Details_Detail_SocLabStratup",
            "label": "SocLabStratup",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Value",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Value",
            "label": "MntInsAllocDin",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Ccy",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntInsAllocDin_Ccy",
            "label": "Ccy (Montant inscrit de l'allocation en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatAlimCart_Value",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatAlimCart_Value",
            "label": "DatAlimCart",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Value",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Value",
            "label": "MntAllocTrsfDin",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Ccy",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntAllocTrsfDin_Ccy",
            "label": "Ccy (Montant de l'allocation transféré en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatTrans_Value",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_DatTrans_Value",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Value",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Value",
            "label": "MntRapaCartDin",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Ccy",
            "name": "Transferts_Transfert_Details_Detail_RefMntAllocation_MntRapaCartDin_Ccy",
            "label": "Ccy (Montant rapatrié sur la carte en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_DON': {
    type: 'TR_DON',
    label: 'Déclaration TR_DON',
    codeAnnexe: 'TR-DON',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDonneur_TypeIdentifiantD",
            "label": "TypeIdentifiantD",
            "path": "RefDonneur.TypeIdentifiantD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDonneur_CodIdentifiantD",
            "label": "CodIdentifiantD",
            "path": "RefDonneur.CodIdentifiantD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDonneur_DenomD",
            "label": "DenomD",
            "path": "RefDonneur.DenomD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDonneur_IbanDonOrd",
            "label": "IbanDonOrd",
            "path": "RefDonneur.IbanDonOrd"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefDonneur_PaysFonds",
            "label": "PaysFonds",
            "path": "RefDonneur.PaysFonds"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_TypeBenifAsso",
            "label": "TypeBenifAsso",
            "path": "Benifiicaire.TypeBenifAsso"
      },
      {
            "key": "CodIdentifiant_10",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_10"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_NumVisa",
            "label": "NumVisa",
            "path": "Benifiicaire.NumVisa"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_RefJort",
            "label": "RefJort",
            "path": "Benifiicaire.RefJort"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_Abrev",
            "label": "Abrev",
            "path": "Benifiicaire.Abrev"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_DenomComplAsso",
            "label": "DenomComplAsso",
            "path": "Benifiicaire.DenomComplAsso"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_Rib",
            "label": "Rib",
            "path": "Benifiicaire.Rib"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "MntDev_17",
            "label": "MntDev",
            "path": "MntDev_17"
      },
      {
            "key": "Ccy_18",
            "label": "Ccy",
            "path": "Ccy_18"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Value",
            "label": "CVMntDin",
            "path": "OperationTransf.CVMntDin.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Ccy",
            "label": "Ccy (CV en dinars du montant de l'opération)",
            "path": "OperationTransf.CVMntDin.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatOp",
            "label": "DatOp",
            "path": "OperationTransf.DatOp"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_2",
            "name": "Transferts_Transfert_Entete_PeriodDec_2",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDonneur_TypeIdentifiantD",
            "name": "Transferts_Transfert_Details_Detail_RefDonneur_TypeIdentifiantD",
            "label": "TypeIdentifiantD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDonneur_CodIdentifiantD",
            "name": "Transferts_Transfert_Details_Detail_RefDonneur_CodIdentifiantD",
            "label": "CodIdentifiantD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDonneur_DenomD",
            "name": "Transferts_Transfert_Details_Detail_RefDonneur_DenomD",
            "label": "DenomD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDonneur_IbanDonOrd",
            "name": "Transferts_Transfert_Details_Detail_RefDonneur_IbanDonOrd",
            "label": "IbanDonOrd",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefDonneur_PaysFonds",
            "name": "Transferts_Transfert_Details_Detail_RefDonneur_PaysFonds",
            "label": "PaysFonds",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_TypeBenifAsso",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_TypeBenifAsso",
            "label": "TypeBenifAsso",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_10",
            "name": "CodIdentifiant_10",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_NumVisa",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_NumVisa",
            "label": "NumVisa",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_RefJort",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_RefJort",
            "label": "RefJort",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_Abrev",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_Abrev",
            "label": "Abrev",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_DenomComplAsso",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_DenomComplAsso",
            "label": "DenomComplAsso",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_Rib",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "MntDev_17",
            "name": "MntDev_17",
            "label": "MntDev",
            "type": "text"
      },
      {
            "id": "Ccy_18",
            "name": "Ccy_18",
            "label": "Ccy",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Value",
            "label": "CVMntDin",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CVMntDin_Ccy",
            "label": "Ccy (CV en dinars du montant de l'opération)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatOp",
            "label": "DatOp",
            "type": "date"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_DIV': {
    type: 'TR_DIV',
    label: 'Déclaration TR_DIV',
    codeAnnexe: 'TR-DIV_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "label": "MatFiscalSoc",
            "path": "RefSociete.MatFiscalSoc"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "label": "RaisSocialSoc",
            "path": "RefSociete.RaisSocialSoc"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSociete_StatupPlanChange",
            "label": "StatupPlanChange",
            "path": "RefSociete.StatupPlanChange"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "label": "LibOp",
            "path": "OperationTransf.LibOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "label": "AnneExercice",
            "path": "OperationTransf.AnneExercice"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "path": "OperationTransf.DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de transfert en devises)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (C/V du montant en dinars)",
            "path": "OperationTransf.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "path": "OperationTransf.ModReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "path": "OperationTransf.MoyenReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "label": "NatBenif",
            "path": "Benificiaire.NatBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "path": "Benificiaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "label": "RaisSocial",
            "path": "Benificiaire.RaisSocial"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benificiaire_IdenSysBenif",
            "label": "IdenSysBenif",
            "path": "Benificiaire.IdenSysBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_NatOp",
            "label": "NatOp",
            "path": "NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "path": "CodSwift"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "path": "CodPaysDest"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_AnneDec",
            "name": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_AnneDec_3",
            "name": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_4",
            "name": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "name": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "label": "MatFiscalSoc",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "name": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "label": "RaisSocialSoc",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSociete_StatupPlanChange",
            "name": "Transferts_Transfert_Details_Detail_RefSociete_StatupPlanChange",
            "label": "StatupPlanChange",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_LibOp",
            "label": "LibOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "label": "AnneExercice",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de transfert en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (C/V du montant en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_NatBenif",
            "label": "NatBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_RaisSocial",
            "label": "RaisSocial",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benificiaire_IdenSysBenif",
            "name": "Transferts_Transfert_Details_Detail_Benificiaire_IdenSysBenif",
            "label": "IdenSysBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_NatOp",
            "name": "Transferts_Transfert_Details_Detail_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodSwift",
            "name": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_CESSLIQ': {
    type: 'TR_CESSLIQ',
    label: 'Déclaration TR_CESSLIQ',
    codeAnnexe: 'TR-CESSLIQ_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_LibOp",
            "label": "LibOp",
            "path": "LibOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "label": "MatFiscalSoc",
            "path": "RefSociete.MatFiscalSoc"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "label": "RaisSocialSoc",
            "path": "RefSociete.RaisSocialSoc"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_StatupPlanChange",
            "label": "StatupPlanChange",
            "path": "OperationTransf.StatupPlanChange"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "label": "AnneExercice",
            "path": "OperationTransf.AnneExercice"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "path": "OperationTransf.DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de transfert en devises)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (C/V du montant en dinars)",
            "path": "OperationTransf.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "path": "OperationTransf.ModReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "path": "OperationTransf.MoyenReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_NatBenif",
            "label": "NatBenif",
            "path": "Benifiicaire.NatBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_Nom",
            "label": "Nom",
            "path": "Benifiicaire.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_Prenom",
            "label": "Prenom",
            "path": "Benifiicaire.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_RaisSocial",
            "label": "RaisSocial",
            "path": "Benifiicaire.RaisSocial"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_Nationalite",
            "label": "Nationalite",
            "path": "Benifiicaire.Nationalite"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Benifiicaire_IdSysBenifPlatforme",
            "label": "IdSysBenifPlatforme",
            "path": "Benifiicaire.IdSysBenifPlatforme"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_NatOp",
            "label": "NatOp",
            "path": "NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "path": "CodSwift"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "path": "CodPaysDest"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_AnneDec",
            "name": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_AnneDec_3",
            "name": "Transferts_Transfert_Entete_AnneDec_3",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_4",
            "name": "Transferts_Transfert_Entete_PeriodDec_4",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_LibOp",
            "name": "Transferts_Transfert_Details_Detail_LibOp",
            "label": "LibOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "name": "Transferts_Transfert_Details_Detail_RefSociete_MatFiscalSoc",
            "label": "MatFiscalSoc",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "name": "Transferts_Transfert_Details_Detail_RefSociete_RaisSocialSoc",
            "label": "RaisSocialSoc",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_StatupPlanChange",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_StatupPlanChange",
            "label": "StatupPlanChange",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_AnneExercice",
            "label": "AnneExercice",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de transfert en devises)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (C/V du montant en dinars)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MoyenReg",
            "label": "MoyenReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_NatBenif",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_NatBenif",
            "label": "NatBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_Nom",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_RaisSocial",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_RaisSocial",
            "label": "RaisSocial",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_Nationalite",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_Nationalite",
            "label": "Nationalite",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Benifiicaire_IdSysBenifPlatforme",
            "name": "Transferts_Transfert_Details_Detail_Benifiicaire_IdSysBenifPlatforme",
            "label": "IdSysBenifPlatforme",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_NatOp",
            "name": "Transferts_Transfert_Details_Detail_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodSwift",
            "name": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_RD': {
    type: 'TR_RD',
    label: 'Déclaration TR_RD',
    codeAnnexe: 'TR-RD_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_JrDec",
            "label": "JrDec",
            "path": "_entete.JrDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_JrDec_2",
            "label": "JrDec",
            "path": "_entete.JrDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodTitre",
            "label": "CodTitre",
            "path": "CodTitre"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefIdentification_RefIden",
            "label": "RefIden",
            "path": "RefIdentification.RefIden"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefIdentification_DatRefIden",
            "label": "DatRefIden",
            "path": "RefIdentification.DatRefIden"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodRD",
            "label": "CodRD",
            "path": "CodRD"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Operateur_TypOp",
            "label": "TypOp",
            "path": "Operateur.TypOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Operateur_CodOp",
            "label": "CodOp",
            "path": "Operateur.CodOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Operateur_Nom",
            "label": "Nom",
            "path": "Operateur.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Operateur_Prenom",
            "label": "Prenom",
            "path": "Operateur.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Operateur_DenomOp",
            "label": "DenomOp",
            "path": "Operateur.DenomOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de l'opération en devise)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (CV en TND du montant du transfert)",
            "path": "OperationTransf.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_DatValOp",
            "label": "DatValOp",
            "path": "OperationTransf.DatValOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_Rib",
            "label": "Rib",
            "path": "OperationTransf.Rib"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatCpte",
            "label": "NatCpte",
            "path": "OperationTransf.NatCpte"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "label": "CodBenif",
            "path": "OperationTransf.CodBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "label": "NomPrenomDenomBenif",
            "path": "OperationTransf.NomPrenomDenomBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "path": "OperationTransf.CodPaysDest"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "path": "CodSwift"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_JrDec",
            "name": "Transferts_Transfert_Entete_JrDec",
            "label": "JrDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_JrDec_2",
            "name": "Transferts_Transfert_Entete_JrDec_2",
            "label": "JrDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodTitre",
            "name": "Transferts_Transfert_Details_Detail_CodTitre",
            "label": "CodTitre",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefIdentification_RefIden",
            "name": "Transferts_Transfert_Details_Detail_RefIdentification_RefIden",
            "label": "RefIden",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefIdentification_DatRefIden",
            "name": "Transferts_Transfert_Details_Detail_RefIdentification_DatRefIden",
            "label": "DatRefIden",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodRD",
            "name": "Transferts_Transfert_Details_Detail_CodRD",
            "label": "CodRD",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Operateur_TypOp",
            "name": "Transferts_Transfert_Details_Detail_Operateur_TypOp",
            "label": "TypOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Operateur_CodOp",
            "name": "Transferts_Transfert_Details_Detail_Operateur_CodOp",
            "label": "CodOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Operateur_Nom",
            "name": "Transferts_Transfert_Details_Detail_Operateur_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Operateur_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Operateur_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Operateur_DenomOp",
            "name": "Transferts_Transfert_Details_Detail_Operateur_DenomOp",
            "label": "DenomOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant de l'opération en devise)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (CV en TND du montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_DatValOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_DatValOp",
            "label": "DatValOp",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_Rib",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatCpte",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatCpte",
            "label": "NatCpte",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "label": "CodBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "label": "NomPrenomDenomBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Transferts_Transfert_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodSwift",
            "name": "Transferts_Transfert_Details_Detail_CodSwift",
            "label": "CodSwift",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'TR_FI': {
    type: 'TR_FI',
    label: 'Déclaration TR_FI',
    codeAnnexe: 'TR-FI_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_MoisDec",
            "label": "MoisDec",
            "path": "_entete.MoisDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Transferts_Transfert_Entete_AnneDec_4",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Transferts_Transfert_Entete_MoisDec_5",
            "label": "MoisDec",
            "path": "_entete.MoisDec"
      },
      {
            "key": "Transferts_Transfert_Entete_PeriodDec_6",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "path": "Agence"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_CodTitre",
            "label": "CodTitre",
            "path": "CodTitre"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo",
            "label": "RefFichInfo",
            "path": "RefFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_DatTrans",
            "label": "DatTrans",
            "path": "DatTrans"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Demandeur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Demandeur.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_13",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_13"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Demandeur_Nom",
            "label": "Nom",
            "path": "Demandeur.Nom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Demandeur_Prenom",
            "label": "Prenom",
            "path": "Demandeur.Prenom"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_Demandeur_DenomDem",
            "label": "DenomDem",
            "path": "Demandeur.DenomDem"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "path": "OperationTransf.MntTransDev.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant du transfert)",
            "path": "OperationTransf.MntTransDev.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "path": "OperationTransf.CvMntTnd.Value"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (CV en TND du montant du transfert)",
            "path": "OperationTransf.CvMntTnd.Ccy"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "path": "OperationTransf.ModReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodReg",
            "label": "CodReg",
            "path": "OperationTransf.CodReg"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_RefMsgSwift",
            "label": "RefMsgSwift",
            "path": "OperationTransf.RefMsgSwift"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "label": "CodBenif",
            "path": "OperationTransf.CodBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "label": "NomPrenomDenomBenif",
            "path": "OperationTransf.NomPrenomDenomBenif"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "path": "OperationTransf.NatOp"
      },
      {
            "key": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "path": "OperationTransf.CodPaysDest"
      }
],
    fields: [
      {
            "id": "Transferts_Transfert_Entete_AnneDec",
            "name": "Transferts_Transfert_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_MoisDec",
            "name": "Transferts_Transfert_Entete_MoisDec",
            "label": "MoisDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec",
            "name": "Transferts_Transfert_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_NbrEcritures",
            "name": "Transferts_Transfert_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_AnneDec_4",
            "name": "Transferts_Transfert_Entete_AnneDec_4",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_MoisDec_5",
            "name": "Transferts_Transfert_Entete_MoisDec_5",
            "label": "MoisDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Entete_PeriodDec_6",
            "name": "Transferts_Transfert_Entete_PeriodDec_6",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Agence",
            "name": "Transferts_Transfert_Details_Detail_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_CodTitre",
            "name": "Transferts_Transfert_Details_Detail_CodTitre",
            "label": "CodTitre",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo",
            "label": "RefFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Transferts_Transfert_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_DatTrans",
            "name": "Transferts_Transfert_Details_Detail_DatTrans",
            "label": "DatTrans",
            "type": "date"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Demandeur_TypeIdentifiant",
            "name": "Transferts_Transfert_Details_Detail_Demandeur_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_13",
            "name": "CodIdentifiant_13",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Demandeur_Nom",
            "name": "Transferts_Transfert_Details_Detail_Demandeur_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Demandeur_Prenom",
            "name": "Transferts_Transfert_Details_Detail_Demandeur_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_Demandeur_DenomDem",
            "name": "Transferts_Transfert_Details_Detail_Demandeur_DenomDem",
            "label": "DenomDem",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Value",
            "label": "MntTransDev",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_MntTransDev_Ccy",
            "label": "Ccy (Montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Value",
            "label": "CvMntTnd",
            "type": "number"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CvMntTnd_Ccy",
            "label": "Ccy (CV en TND du montant du transfert)",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_ModReg",
            "label": "ModReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodReg",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodReg",
            "label": "CodReg",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_RefMsgSwift",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_RefMsgSwift",
            "label": "RefMsgSwift",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodBenif",
            "label": "CodBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NomPrenomDenomBenif",
            "label": "NomPrenomDenomBenif",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_NatOp",
            "label": "NatOp",
            "type": "text"
      },
      {
            "id": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "name": "Transferts_Transfert_Details_Detail_OperationTransf_CodPaysDest",
            "label": "CodPaysDest",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DC_AVA': {
    type: 'DC_AVA',
    label: 'Déclaration DC_AVA',
    codeAnnexe: 'DC_AVA_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Decomptes_Decompte_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_Agence",
            "label": "Agence",
            "path": "_entete.Agence"
      },
      {
            "key": "Decomptes_Decompte_Entete_NumDosAVA",
            "label": "NumDosAVA",
            "path": "_entete.NumDosAVA"
      },
      {
            "key": "Decomptes_Decompte_Entete_Titulaire_TypeIdenTitu",
            "label": "TypeIdenTitu",
            "path": "_entete.Titulaire.TypeIdenTitu"
      },
      {
            "key": "Decomptes_Decompte_Entete_Titulaire_CodIdenTitu",
            "label": "CodIdenTitu",
            "path": "_entete.Titulaire.CodIdenTitu"
      },
      {
            "key": "Decomptes_Decompte_Entete_Titulaire_DenomTitu",
            "label": "DenomTitu",
            "path": "_entete.Titulaire.DenomTitu"
      },
      {
            "key": "Decomptes_Decompte_Entete_Titulaire_Nom",
            "label": "Nom",
            "path": "_entete.Titulaire.Nom"
      },
      {
            "key": "Decomptes_Decompte_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "path": "_entete.Titulaire.Prenom"
      },
      {
            "key": "Decomptes_Decompte_Entete_NumActv",
            "label": "NumActv",
            "path": "_entete.NumActv"
      },
      {
            "key": "Decomptes_Decompte_Entete_TypAlloc",
            "label": "TypAlloc",
            "path": "_entete.TypAlloc"
      },
      {
            "key": "Decomptes_Decompte_Entete_IdMarche",
            "label": "IdMarche",
            "path": "_entete.IdMarche"
      },
      {
            "key": "Decomptes_Decompte_Entete_DatDom",
            "label": "DatDom",
            "path": "_entete.DatDom"
      },
      {
            "key": "Decomptes_Decompte_Entete_StatDoss",
            "label": "StatDoss",
            "path": "_entete.StatDoss"
      },
      {
            "key": "Decomptes_Decompte_Entete_DatSusp",
            "label": "DatSusp",
            "path": "_entete.DatSusp"
      },
      {
            "key": "Decomptes_Decompte_Entete_DebPeriodFon",
            "label": "DebPeriodFon",
            "path": "_entete.DebPeriodFon"
      },
      {
            "key": "Decomptes_Decompte_Entete_FinPeriodFon",
            "label": "FinPeriodFon",
            "path": "_entete.FinPeriodFon"
      },
      {
            "key": "Decomptes_Decompte_Entete_SousTypAVA",
            "label": "SousTypAVA",
            "path": "_entete.SousTypAVA"
      },
      {
            "key": "Decomptes_Decompte_Entete_ChiffrAffHrsTx",
            "label": "ChiffrAffHrsTx",
            "path": "_entete.ChiffrAffHrsTx"
      },
      {
            "key": "Decomptes_Decompte_Entete_AnneCA",
            "label": "AnneCA",
            "path": "_entete.AnneCA"
      },
      {
            "key": "Decomptes_Decompte_Entete_NumaAutBCT",
            "label": "NumaAutBCT",
            "path": "_entete.NumaAutBCT"
      },
      {
            "key": "Decomptes_Decompte_Entete_DatAutBCT",
            "label": "DatAutBCT",
            "path": "_entete.DatAutBCT"
      },
      {
            "key": "Decomptes_Decompte_Entete_PeriodDec_21",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_NumDosAVA_22",
            "label": "NumDosAVA",
            "path": "_entete.NumDosAVA"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_TypOp",
            "label": "TypOp",
            "path": "TypOp"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DesgnOp",
            "label": "DesgnOp",
            "path": "DesgnOp"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DatConcContrat",
            "label": "DatConcContrat",
            "path": "DatConcContrat"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_IaEncRest",
            "label": "IaEncRest",
            "path": "IaEncRest"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DatOp",
            "label": "DatOp",
            "path": "DatOp"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntDinOp_Value",
            "label": "MntDinOp",
            "path": "MntDinOp.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntDinOp_Ccy",
            "label": "Ccy (Montant en dinars de l’opération)",
            "path": "MntDinOp.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DatEncProdExport",
            "label": "DatEncProdExport",
            "path": "DatEncProdExport"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_CodOrigFond",
            "label": "CodOrigFond",
            "path": "CodOrigFond"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_CodPays",
            "label": "CodPays",
            "path": "CodPays"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Value",
            "label": "DroitTransCumm",
            "path": "DroitTransCumm.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Ccy",
            "label": "Ccy (Droits à transferts cumulés)",
            "path": "DroitTransCumm.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntImport_Value",
            "label": "MntImport",
            "path": "MntImport.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntTransCum_Value",
            "label": "MntTransCum",
            "path": "MntTransCum.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntTransCum_Ccy",
            "label": "Ccy (Montants des transferts cumulés)",
            "path": "MntTransCum.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_BaseCalDroitTran",
            "label": "BaseCalDroitTran",
            "path": "BaseCalDroitTran"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "path": "Benificiaire.TypeIdentifiant"
      },
      {
            "key": "CodIdentifiant_40",
            "label": "CodIdentifiant",
            "path": "CodIdentifiant_40"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "path": "Benificiaire.Nom"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "path": "Benificiaire.Prenom"
      }
],
    fields: [
      {
            "id": "Decomptes_Decompte_Entete_PeriodDec",
            "name": "Decomptes_Decompte_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Agence",
            "name": "Decomptes_Decompte_Entete_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_NumDosAVA",
            "name": "Decomptes_Decompte_Entete_NumDosAVA",
            "label": "NumDosAVA",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Titulaire_TypeIdenTitu",
            "name": "Decomptes_Decompte_Entete_Titulaire_TypeIdenTitu",
            "label": "TypeIdenTitu",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Titulaire_CodIdenTitu",
            "name": "Decomptes_Decompte_Entete_Titulaire_CodIdenTitu",
            "label": "CodIdenTitu",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Titulaire_DenomTitu",
            "name": "Decomptes_Decompte_Entete_Titulaire_DenomTitu",
            "label": "DenomTitu",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Titulaire_Nom",
            "name": "Decomptes_Decompte_Entete_Titulaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Titulaire_Prenom",
            "name": "Decomptes_Decompte_Entete_Titulaire_Prenom",
            "label": "Prenom",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_NumActv",
            "name": "Decomptes_Decompte_Entete_NumActv",
            "label": "NumActv",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_TypAlloc",
            "name": "Decomptes_Decompte_Entete_TypAlloc",
            "label": "TypAlloc",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_IdMarche",
            "name": "Decomptes_Decompte_Entete_IdMarche",
            "label": "IdMarche",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DatDom",
            "name": "Decomptes_Decompte_Entete_DatDom",
            "label": "DatDom",
            "type": "date"
      },
      {
            "id": "Decomptes_Decompte_Entete_StatDoss",
            "name": "Decomptes_Decompte_Entete_StatDoss",
            "label": "StatDoss",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DatSusp",
            "name": "Decomptes_Decompte_Entete_DatSusp",
            "label": "DatSusp",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DebPeriodFon",
            "name": "Decomptes_Decompte_Entete_DebPeriodFon",
            "label": "DebPeriodFon",
            "type": "date"
      },
      {
            "id": "Decomptes_Decompte_Entete_FinPeriodFon",
            "name": "Decomptes_Decompte_Entete_FinPeriodFon",
            "label": "FinPeriodFon",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_SousTypAVA",
            "name": "Decomptes_Decompte_Entete_SousTypAVA",
            "label": "SousTypAVA",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_ChiffrAffHrsTx",
            "name": "Decomptes_Decompte_Entete_ChiffrAffHrsTx",
            "label": "ChiffrAffHrsTx",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_AnneCA",
            "name": "Decomptes_Decompte_Entete_AnneCA",
            "label": "AnneCA",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_NumaAutBCT",
            "name": "Decomptes_Decompte_Entete_NumaAutBCT",
            "label": "NumaAutBCT",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DatAutBCT",
            "name": "Decomptes_Decompte_Entete_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_PeriodDec_21",
            "name": "Decomptes_Decompte_Entete_PeriodDec_21",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_NumDosAVA_22",
            "name": "Decomptes_Decompte_Entete_NumDosAVA_22",
            "label": "NumDosAVA",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_TypOp",
            "name": "Decomptes_Decompte_Details_Detail_TypOp",
            "label": "TypOp",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DesgnOp",
            "name": "Decomptes_Decompte_Details_Detail_DesgnOp",
            "label": "DesgnOp",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DatConcContrat",
            "name": "Decomptes_Decompte_Details_Detail_DatConcContrat",
            "label": "DatConcContrat",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_IaEncRest",
            "name": "Decomptes_Decompte_Details_Detail_IaEncRest",
            "label": "IaEncRest",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DatOp",
            "name": "Decomptes_Decompte_Details_Detail_DatOp",
            "label": "DatOp",
            "type": "date"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntDinOp_Value",
            "name": "Decomptes_Decompte_Details_Detail_MntDinOp_Value",
            "label": "MntDinOp",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntDinOp_Ccy",
            "name": "Decomptes_Decompte_Details_Detail_MntDinOp_Ccy",
            "label": "Ccy (Montant en dinars de l’opération)",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DatEncProdExport",
            "name": "Decomptes_Decompte_Details_Detail_DatEncProdExport",
            "label": "DatEncProdExport",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_CodOrigFond",
            "name": "Decomptes_Decompte_Details_Detail_CodOrigFond",
            "label": "CodOrigFond",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_CodPays",
            "name": "Decomptes_Decompte_Details_Detail_CodPays",
            "label": "CodPays",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Value",
            "name": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Value",
            "label": "DroitTransCumm",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Ccy",
            "name": "Decomptes_Decompte_Details_Detail_DroitTransCumm_Ccy",
            "label": "Ccy (Droits à transferts cumulés)",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntImport_Value",
            "name": "Decomptes_Decompte_Details_Detail_MntImport_Value",
            "label": "MntImport",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntTransCum_Value",
            "name": "Decomptes_Decompte_Details_Detail_MntTransCum_Value",
            "label": "MntTransCum",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntTransCum_Ccy",
            "name": "Decomptes_Decompte_Details_Detail_MntTransCum_Ccy",
            "label": "Ccy (Montants des transferts cumulés)",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_BaseCalDroitTran",
            "name": "Decomptes_Decompte_Details_Detail_BaseCalDroitTran",
            "label": "BaseCalDroitTran",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_Benificiaire_TypeIdentifiant",
            "name": "Decomptes_Decompte_Details_Detail_Benificiaire_TypeIdentifiant",
            "label": "TypeIdentifiant",
            "type": "text"
      },
      {
            "id": "CodIdentifiant_40",
            "name": "CodIdentifiant_40",
            "label": "CodIdentifiant",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_Benificiaire_Nom",
            "name": "Decomptes_Decompte_Details_Detail_Benificiaire_Nom",
            "label": "Nom",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_Benificiaire_Prenom",
            "name": "Decomptes_Decompte_Details_Detail_Benificiaire_Prenom",
            "label": "Prenom",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DC_MAR': {
    type: 'DC_MAR',
    label: 'Déclaration DC_MAR',
    codeAnnexe: 'DC_MAR_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Decomptes_Decompte_Entete_AnneDec",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_PeriodDec",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_Agence",
            "label": "Agence",
            "path": "_entete.Agence"
      },
      {
            "key": "Decomptes_Decompte_Entete_IdMarche",
            "label": "IdMarche",
            "path": "_entete.IdMarche"
      },
      {
            "key": "Decomptes_Decompte_Entete_DenomMaitreOuv",
            "label": "DenomMaitreOuv",
            "path": "_entete.DenomMaitreOuv"
      },
      {
            "key": "Decomptes_Decompte_Entete_CodPays",
            "label": "CodPays",
            "path": "_entete.CodPays"
      },
      {
            "key": "Decomptes_Decompte_Entete_MaitreOeuvreResident_MatFiscalMOR",
            "label": "MatFiscalMOR",
            "path": "_entete.MaitreOeuvreResident.MatFiscalMOR"
      },
      {
            "key": "Decomptes_Decompte_Entete_MaitreOeuvreResident_DenomMOR",
            "label": "DenomMOR",
            "path": "_entete.MaitreOeuvreResident.DenomMOR"
      },
      {
            "key": "Decomptes_Decompte_Entete_Groupement",
            "label": "Groupement",
            "path": "_entete.Groupement"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_ResPlanChang",
            "label": "ResPlanChang",
            "path": "_entete.EntrepriseChefDeFile.ResPlanChang"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_MatFiscalEntrRCF",
            "label": "MatFiscalEntrRCF",
            "path": "_entete.EntrepriseChefDeFile.MatFiscalEntrRCF"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_DenomEntrRCF",
            "label": "DenomEntrRCF",
            "path": "_entete.EntrepriseChefDeFile.DenomEntrRCF"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrespCoTitulaire_DenomEntrCoTitu",
            "label": "DenomEntrCoTitu",
            "path": "_entete.EntrespCoTitulaire.DenomEntrCoTitu"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrespCoTitulaire_StatPlanChangEntrCoTitu",
            "label": "StatPlanChangEntrCoTitu",
            "path": "_entete.EntrespCoTitulaire.StatPlanChangEntrCoTitu"
      },
      {
            "key": "Decomptes_Decompte_Entete_EntrespCoTitulaire_MFIdEntrCoTitul",
            "label": "MFIdEntrCoTitul",
            "path": "_entete.EntrespCoTitulaire.MFIdEntrCoTitul"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntGlobal_Value",
            "label": "MntGlobal",
            "path": "_entete.MntGlobal.Value"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntGlobal_Ccy",
            "label": "Ccy (Montant global du marché)",
            "path": "_entete.MntGlobal.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntLocale_Value",
            "label": "MntLocale",
            "path": "_entete.MntLocale.Value"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntLocale_Ccy",
            "label": "Ccy (Montant de la part en monnaie non convertible  ( monnaie locale ))",
            "path": "_entete.MntLocale.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntConvertible_Value",
            "label": "MntConvertible",
            "path": "_entete.MntConvertible.Value"
      },
      {
            "key": "Decomptes_Decompte_Entete_MntConvertible_Ccy",
            "label": "Ccy (Montant de la part en monnaie convertible ( devise ))",
            "path": "_entete.MntConvertible.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Entete_AvanceMarchPourMntMarche_Value",
            "label": "AvanceMarchPourMntMarche",
            "path": "_entete.AvanceMarchPourMntMarche.Value"
      },
      {
            "key": "Decomptes_Decompte_Entete_DateConcContratMarche",
            "label": "DateConcContratMarche",
            "path": "_entete.DateConcContratMarche"
      },
      {
            "key": "Decomptes_Decompte_Entete_DureeMarcheMois",
            "label": "DureeMarcheMois",
            "path": "_entete.DureeMarcheMois"
      },
      {
            "key": "Decomptes_Decompte_Entete_AnneDec_24",
            "label": "AnneDec",
            "path": "_entete.AnneDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_PeriodDec_25",
            "label": "PeriodDec",
            "path": "_entete.PeriodDec"
      },
      {
            "key": "Decomptes_Decompte_Entete_IdMarche_26",
            "label": "IdMarche",
            "path": "_entete.IdMarche"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_LibOp",
            "label": "LibOp",
            "path": "LibOp"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_Rib",
            "label": "Rib",
            "path": "Rib"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_NatCmpte",
            "label": "NatCmpte",
            "path": "NatCmpte"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_DatOp",
            "label": "DatOp",
            "path": "DatOp"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntOp_Value",
            "label": "MntOp",
            "path": "MntOp.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_MntOp_Ccy",
            "label": "Ccy (Montant de l'opération)",
            "path": "MntOp.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_CVDinTot_Value",
            "label": "CVDinTot",
            "path": "CVDinTot.Value"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_CVDinTot_Ccy",
            "label": "Ccy (C/V en Dinar (total))",
            "path": "CVDinTot.Ccy"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_SourcRegl",
            "label": "SourcRegl",
            "path": "SourcRegl"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "path": "RefFichInfo.NumFichInfo"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "path": "RefFichInfo.DatFichInfo"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "path": "RefAutorisationBct.NumAutBCT"
      },
      {
            "key": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "path": "RefAutorisationBct.DatAutBCT"
      }
],
    fields: [
      {
            "id": "Decomptes_Decompte_Entete_AnneDec",
            "name": "Decomptes_Decompte_Entete_AnneDec",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_PeriodDec",
            "name": "Decomptes_Decompte_Entete_PeriodDec",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Agence",
            "name": "Decomptes_Decompte_Entete_Agence",
            "label": "Agence",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_IdMarche",
            "name": "Decomptes_Decompte_Entete_IdMarche",
            "label": "IdMarche",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DenomMaitreOuv",
            "name": "Decomptes_Decompte_Entete_DenomMaitreOuv",
            "label": "DenomMaitreOuv",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_CodPays",
            "name": "Decomptes_Decompte_Entete_CodPays",
            "label": "CodPays",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_MaitreOeuvreResident_MatFiscalMOR",
            "name": "Decomptes_Decompte_Entete_MaitreOeuvreResident_MatFiscalMOR",
            "label": "MatFiscalMOR",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_MaitreOeuvreResident_DenomMOR",
            "name": "Decomptes_Decompte_Entete_MaitreOeuvreResident_DenomMOR",
            "label": "DenomMOR",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_Groupement",
            "name": "Decomptes_Decompte_Entete_Groupement",
            "label": "Groupement",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_ResPlanChang",
            "name": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_ResPlanChang",
            "label": "ResPlanChang",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_MatFiscalEntrRCF",
            "name": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_MatFiscalEntrRCF",
            "label": "MatFiscalEntrRCF",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_DenomEntrRCF",
            "name": "Decomptes_Decompte_Entete_EntrepriseChefDeFile_DenomEntrRCF",
            "label": "DenomEntrRCF",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrespCoTitulaire_DenomEntrCoTitu",
            "name": "Decomptes_Decompte_Entete_EntrespCoTitulaire_DenomEntrCoTitu",
            "label": "DenomEntrCoTitu",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrespCoTitulaire_StatPlanChangEntrCoTitu",
            "name": "Decomptes_Decompte_Entete_EntrespCoTitulaire_StatPlanChangEntrCoTitu",
            "label": "StatPlanChangEntrCoTitu",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_EntrespCoTitulaire_MFIdEntrCoTitul",
            "name": "Decomptes_Decompte_Entete_EntrespCoTitulaire_MFIdEntrCoTitul",
            "label": "MFIdEntrCoTitul",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntGlobal_Value",
            "name": "Decomptes_Decompte_Entete_MntGlobal_Value",
            "label": "MntGlobal",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntGlobal_Ccy",
            "name": "Decomptes_Decompte_Entete_MntGlobal_Ccy",
            "label": "Ccy (Montant global du marché)",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntLocale_Value",
            "name": "Decomptes_Decompte_Entete_MntLocale_Value",
            "label": "MntLocale",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntLocale_Ccy",
            "name": "Decomptes_Decompte_Entete_MntLocale_Ccy",
            "label": "Ccy (Montant de la part en monnaie non convertible  ( monnaie locale ))",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntConvertible_Value",
            "name": "Decomptes_Decompte_Entete_MntConvertible_Value",
            "label": "MntConvertible",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Entete_MntConvertible_Ccy",
            "name": "Decomptes_Decompte_Entete_MntConvertible_Ccy",
            "label": "Ccy (Montant de la part en monnaie convertible ( devise ))",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_AvanceMarchPourMntMarche_Value",
            "name": "Decomptes_Decompte_Entete_AvanceMarchPourMntMarche_Value",
            "label": "AvanceMarchPourMntMarche",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_DateConcContratMarche",
            "name": "Decomptes_Decompte_Entete_DateConcContratMarche",
            "label": "DateConcContratMarche",
            "type": "date"
      },
      {
            "id": "Decomptes_Decompte_Entete_DureeMarcheMois",
            "name": "Decomptes_Decompte_Entete_DureeMarcheMois",
            "label": "DureeMarcheMois",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_AnneDec_24",
            "name": "Decomptes_Decompte_Entete_AnneDec_24",
            "label": "AnneDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_PeriodDec_25",
            "name": "Decomptes_Decompte_Entete_PeriodDec_25",
            "label": "PeriodDec",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Entete_IdMarche_26",
            "name": "Decomptes_Decompte_Entete_IdMarche_26",
            "label": "IdMarche",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_LibOp",
            "name": "Decomptes_Decompte_Details_Detail_LibOp",
            "label": "LibOp",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_Rib",
            "name": "Decomptes_Decompte_Details_Detail_Rib",
            "label": "Rib",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_NatCmpte",
            "name": "Decomptes_Decompte_Details_Detail_NatCmpte",
            "label": "NatCmpte",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_DatOp",
            "name": "Decomptes_Decompte_Details_Detail_DatOp",
            "label": "DatOp",
            "type": "date"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntOp_Value",
            "name": "Decomptes_Decompte_Details_Detail_MntOp_Value",
            "label": "MntOp",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_MntOp_Ccy",
            "name": "Decomptes_Decompte_Details_Detail_MntOp_Ccy",
            "label": "Ccy (Montant de l'opération)",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_CVDinTot_Value",
            "name": "Decomptes_Decompte_Details_Detail_CVDinTot_Value",
            "label": "CVDinTot",
            "type": "number"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_CVDinTot_Ccy",
            "name": "Decomptes_Decompte_Details_Detail_CVDinTot_Ccy",
            "label": "Ccy (C/V en Dinar (total))",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_SourcRegl",
            "name": "Decomptes_Decompte_Details_Detail_SourcRegl",
            "label": "SourcRegl",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_RefFichInfo_NumFichInfo",
            "name": "Decomptes_Decompte_Details_Detail_RefFichInfo_NumFichInfo",
            "label": "NumFichInfo",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_RefFichInfo_DatFichInfo",
            "name": "Decomptes_Decompte_Details_Detail_RefFichInfo_DatFichInfo",
            "label": "DatFichInfo",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_NumAutBCT",
            "name": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_NumAutBCT",
            "label": "NumAutBCT",
            "type": "text"
      },
      {
            "id": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_DatAutBCT",
            "name": "Decomptes_Decompte_Details_Detail_RefAutorisationBct_DatAutBCT",
            "label": "DatAutBCT",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DS_IETR': {
    type: 'DS_IETR',
    label: 'Déclaration DS_IETR',
    codeAnnexe: 'DS_IETR_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "path": "MatFiscal"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "path": "RaisSoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_FormInvt",
            "label": "FormInvt",
            "path": "FormInvt"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "path": "Documents.DocumentInv.CodDoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "path": "Documents.DocumentInv.NomOrigPiece"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "path": "Documents.DocumentInv.AttachefFile"
      }
],
    fields: [
      {
            "id": "Dossiers_Dossier_Entete_NbrEcritures",
            "name": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "name": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "name": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_FormInvt",
            "name": "Dossiers_Dossier_Details_Detail_FormInvt",
            "label": "FormInvt",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DS_IESuivi': {
    type: 'DS_IESuivi',
    label: 'Déclaration DS_IESuivi',
    codeAnnexe: 'DS_IESuivi_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "path": "MatFiscal"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "path": "RaisSoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "path": "Documents.DocumentInv.CodDoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "path": "Documents.DocumentInv.NomOrigPiece"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "path": "Documents.DocumentInv.AttachefFile"
      }
],
    fields: [
      {
            "id": "Dossiers_Dossier_Entete_NbrEcritures",
            "name": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "name": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "name": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DS_Startup_IE_TR': {
    type: 'DS_Startup_IE_TR',
    label: 'Déclaration DS_Startup_IE_TR',
    codeAnnexe: 'DS_Startup-IE-TR_V2',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "path": "MatFiscal"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "path": "RaisSoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "path": "Documents.DocumentInv.CodDoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "path": "Documents.DocumentInv.NomOrigPiece"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "path": "Documents.DocumentInv.AttachefFile"
      }
],
    fields: [
      {
            "id": "Dossiers_Dossier_Entete_NbrEcritures",
            "name": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "name": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "name": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
  'DS_Startup_IE_SUIVI': {
    type: 'DS_Startup_IE_SUIVI',
    label: 'Déclaration DS_Startup_IE_SUIVI',
    codeAnnexe: 'DS_Startup-IE-Suivi_V3',
    codeIAT: '01',
    apiPath: 'api/periodes/add-data',
    tableColumns: [
      {
            "key": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "path": "_entete.NbrEcritures"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "path": "MatFiscal"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "path": "RaisSoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "path": "Documents.DocumentInv.CodDoc"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "path": "Documents.DocumentInv.NomOrigPiece"
      },
      {
            "key": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "path": "Documents.DocumentInv.AttachefFile"
      }
],
    fields: [
      {
            "id": "Dossiers_Dossier_Entete_NbrEcritures",
            "name": "Dossiers_Dossier_Entete_NbrEcritures",
            "label": "NbrEcritures",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "name": "Dossiers_Dossier_Details_Detail_MatFiscal",
            "label": "MatFiscal",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "name": "Dossiers_Dossier_Details_Detail_RaisSoc",
            "label": "RaisSoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_CodDoc",
            "label": "CodDoc",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_NomOrigPiece",
            "label": "NomOrigPiece",
            "type": "text"
      },
      {
            "id": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "name": "Dossiers_Dossier_Details_Detail_Documents_DocumentInv_AttachefFile",
            "label": "AttachefFile",
            "type": "text"
      }
],
    payloadMapper: (formData: any, contextualData: any) => {
      const unflatten = (data: any) => {
        const result: any = {};
        for (const i in data) {
           if (i === 'id_display' || i === 'errors') continue;
           const path = i.replace(/_\d+$/, ''); 
           const keys = path.split('_');
           keys.reduce((r, e, j) => {
             const key = e.charAt(0).toLowerCase() + e.slice(1);
             if (keys.length - 1 === j) {
                r[key] = data[i];
             } else {
                if (!r[key]) r[key] = {};
             }
             return r[key];
           }, result);
        }
        return result;
      };
      return {
        details: unflatten(formData)
      };
    }
  },
};
