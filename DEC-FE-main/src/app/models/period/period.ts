export interface Period {
  id: number;
  typePeriode: PeriodType;
  periodicity: string;
  status: PeriodStatus;
  details: string;
}
enum PeriodStatus {
  EN_COURS = 'EN_COURS',
  CLOTUREE = 'CLOTUREE',
  GENEREE = 'GENEREE',
}
enum PeriodType {
  CRS_CPD_OSM = 'CRS_CPD_OSM',
  CRS_CPD_VDPL ='CRS_CPD_VDPL',
  CRS_DEVPPLTNDPPL = 'CRS_DEVPPLTNDPPL',
  CRS_SM_TND = ' CRS_SM_TND',
  CRS_INR = 'CRS_INR',
  CRS_ALL_TNDCV= 'CRS_ALL_TNDCV',
  CRS_ATT= 'CRS_ALL_TNDCV',
  CRS_E_TNDCVE_ENDCV_TTE_E_DEV= 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV ',
  CRS_PPR= 'CRS_PPR',
  CRS_Startup='CRS_Startup',
  CRS_NEG='CRS_NEG',

  TR_DOMSC='TR_DOMSC',
  TR_SC='TR_SC',
  TR_MS='TR_MS',
  TR_SM='TR_SM',
  TR_IE='TR_IE',
  TR_R_CNR='TR_R_CNR',
  TR_DOM_EE='TR_DOM_EE',
  TR_REM_EE='TR_REM_EE',
  TR_FP='TR_FP',
  TR_RETALL='TR_RETALL',
  TR_ALL_CPI='TR_ALL_CPI',
  TR_ALL='TR_ALL',
  TR_ALL_CTI='TR_ALL_CTI',
  TR_DON='TR_DON',
  TR_DIV='TR_DIV',
  TR_CESSLIǪ='TR_CESSLIǪ',
  TR_RD='TR_RD',
  TR_FI='TR_FI',


  DC_AVA='DC_AVA',
  DC_MAR='DC_MAR',

  DS_IETR='DS_IETR',
  DS_IESuivi='DS_IESuivi',
  DS_Startup_IE_TR='DS_Startup_IE_TR',
  DS_Startup_IE_SUIVI='DS_Startup_IE_SUIVI'
}
