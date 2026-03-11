package com.smi.declarations.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Periode")
public class Periode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private TypePeriod typePeriode;

    private String periodicity;

    @Lob
    private String details;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "start_year")
    private Integer startYear; // année de départ, par exemple 2023

    @Column(name = "period_dec")
    private String periodDec; // exemple : "012023", "022023", etc.


    public enum Status {
        EN_COURS,
        CLOTUREE,
        GENEREE
    }
    public enum  TypePeriod {
         CRS_CPD_OSM,
         CRS_CPD_VDPL,
         CRS_DEVPPLTNDPPL,
         CRS_SM_TND,
         CRS_INR,
         CRS_ALL_TNDCV,
         CRS_ATT,
         CRS_E_TNDCVE_ENDCV_TTE_E_DEV,
         CRS_PPR,
         CRS_Startup,
         CRS_NEG,

        TR_DOMSC,
        TR_SC,
        TR_MS,
        TR_SM,
        TR_IE,
        TR_R_CNR,
        TR_DOM_EE,
        TR_REM_EE,
        TR_FP,
        TR_RETALL,
        TR_ALL_CPI,
        TR_ALL,
        TR_ALL_CTI,
        TR_DON,
        TR_DIV,
        TR_CESSLIǪ,
        TR_RD,
        TR_FI,


        DC_AVA,
        DC_MAR,

        DS_IETR,
        DS_IESuivi,
        DS_Startup_IE_TR,
        DS_Startup_IE_SUIVI
    }

}
