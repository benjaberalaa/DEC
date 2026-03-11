import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodService } from '../service/period.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as bootstrap from 'bootstrap';
import {Location} from '@angular/common';


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
  CRS_E_TNDCVE_ENDCV_TTE_DEV= 'CRS_E_TNDCVE_ENDCV_TTE_DEV',
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
  TR_CESSLIQ='TR_CESSLIQ',
  TR_RD='TR_RD',
  TR_FI='TR_FI',


  DC_AVA='DC_AVA',
  DC_MAR='DC_MAR',

  DS_IETR='DS_IETR',
  DS_IESuivi='DS_IESuivi',
  DS_Startup_IE_TR='DS_Startup_IE_TR',
  DS_Startup_IE_SUIVI='DS_Startup_IE_SUIVI'
}
const PERIODICITY_MAP: { [key: string]: string } = {
  // CRS
  'CRS_CPD_OSM': 'MONTHLY',
  'CRS_CPD_VDPL': 'MONTHLY',
  'CRS_DEVPPLTNDPPL': 'MONTHLY',
  'CRS_SM_TND': 'MONTHLY',
  'CRS_INR': 'MONTHLY',
  'CRS_ALL_TNDCV': 'QUARTERLY',
  'CRS_ATT': 'MONTHLY',
  'CRS_E_TNDCVE_ENDCV_TTE_DEV': 'MONTHLY',
  'CRS_PPR': 'MONTHLY',
  'CRS_Startup': 'MONTHLY',
  'CRS_NEG': 'MONTHLY',

  // TR
  'TR_DOMSC': 'MONTHLY',
  'TR_SC': 'MONTHLY',
  'TR_MS': 'MONTHLY',
  'TR_SM': 'MONTHLY',
  'TR_IE': 'MONTHLY',
  'TR_R_CNR': 'QUARTERLY',
  'TR_DOM_EE': 'MONTHLY',
  'TR_REM_EE': 'QUARTERLY',
  'TR_FP': 'QUARTERLY',
  'TR_RETALL': 'MONTHLY',
  'TR_ALL_CPI': 'MONTHLY',
  'TR_ALL': 'MONTHLY',
  'TR_ALL_CTI': 'MONTHLY',
  'TR_DON': 'MONTHLY',
  'TR_DIV': 'QUARTERLY',
  'TR_CESSLIQ': 'MONTHLY',
  'TR_RD': 'DAILY',
  'TR_FI': 'FORTNIGHT',

  // DC
  'DC_AVA': 'MONTHLY',
  'DC_MAR': 'QUARTERLY',

  // DS
  'DS_IETR': 'MONTHLY',
  'DS_IESuivi': 'MONTHLY',
  'DS_Startup_IE_TR': 'MONTHLY',
  'DS_Startup_IE_SUIVI': 'MONTHLY',
};



// Définir un type ou une interface pour une période
interface Period {
  id: number;
  typePeriode: string;
  periodicity: string;
  status: PeriodStatus;
  details: string;
  periodDec?: string;
}



@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css'],
})
export class AddPeriodComponent implements  OnInit,AfterViewInit {
  @Input() enteteDoc: string[] = [];
  @Input() modelAttributes: any = null;
  @Input() selectedType: string | null = null;
  @Input() selectedModel: string | null = null;
  periodTypes = Object.values(PeriodType);
  private addPeriodModalInstance: bootstrap.Modal | null = null;


  form: FormGroup;
  submitted = false;
  periods: Period[] = []; // Liste des périodes
  periodToDelete: number | null = null;  // Stocke l'ID de la période à supprimer
  emptyTableMessage: string = 'Chargement des périodes...';
  hasOpenPeriod: boolean = false;
  openPeriodType: string = '';

  notification = {
    show: false,
    message: '',
    type: '', // success, warning, error, etc.
  };





  constructor(
    private fb: FormBuilder,
    private periodService: PeriodService,
    private router: Router,
    private route:ActivatedRoute,
    private location:Location,
  ) {
    this.form = this.fb.group({
      typePeriode: ['', Validators.required],
      periodicity: ['', Validators.required],
      details: [''],
      startYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],  // NOUVEAU
    });






  }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const periodType = params.get('type');
      this.checkOpenPeriods();

      if (periodType) {
        const formattedType = periodType.replace('-', '_').toUpperCase();
        this.selectedType = formattedType;
        this.form.get('typePeriode')?.setValue(formattedType);

        // Ajout : renseigner la périodicité selon le type
        const periodicity = PERIODICITY_MAP[formattedType] || '';
        this.form.get('periodicity')?.setValue(periodicity);

        this.loadPeriodsByType(formattedType);
      } else {
        this.selectedType = null;
        this.form.get('typePeriode')?.setValue('');
        this.form.get('periodicity')?.setValue('');
        this.loadPeriods();
      }
    });
    this.form.get('startYear')?.disable(); // si tu veux le désactiver

// Sinon conditionnellement
    if (this.periods.length > 0) {
      this.form.get('startYear')?.disable();
    } else {
      this.form.get('startYear')?.enable();
    }

  }



  ngAfterViewInit(): void {
    // Initialiser les tooltips Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((el) => {
      return new bootstrap.Tooltip(el, {
        trigger: 'hover'
      });
    });

    // Initialiser la modale addPeriodModal correctement
    const modalElement = document.getElementById('addPeriodModal');
    if (modalElement) {
      this.addPeriodModalInstance = new bootstrap.Modal(modalElement);
    }
  }


  checkOpenPeriods(type?: string): void {
    this.periodService.getPeriods().subscribe({
      next: (periods) => {
        // Si un type est spécifié, on vérifie seulement pour ce type
        if (type) {
          const openPeriodForType = periods.find(p =>
            p.typePeriode === type && p.status === 'EN_COURS'
          );
          this.hasOpenPeriod = !!openPeriodForType;
          this.openPeriodType = openPeriodForType?.typePeriode || '';
        }
      },
      error: (err) => {
        console.error('Erreur vérification périodes ouvertes:', err);
        this.hasOpenPeriod = false;
      }
    });
  }


  loadPeriods(): void {
    this.emptyTableMessage = 'Aucune période disponible';
    this.periodService.getPeriods().subscribe({
      next: (data) => {
        this.periods = data;
      },
      error: (err) => {
        this.periods = [];
        this.emptyTableMessage = 'Erreur lors du chargement des périodes';
        console.error('Erreur lors du chargement des périodes:', err.message || err);
      },
    });
  }

  loadPeriodsByType(type: string): void {
    const formattedType = type.toUpperCase();
    this.emptyTableMessage = `Aucune période ouverte pour ${formattedType.replace('_', '-')}`;

    this.periodService.getPeriodsByType(formattedType).subscribe({
      next: (data) => {
        this.periods = this.sortPeriodsByPeriodDec(data);
      },
      error: (err) => {
        this.periods = [];
        this.emptyTableMessage = 'Erreur lors du chargement des périodes';
        console.error('Error loading periods:', err);
      }
    });
  }

  sortPeriodsByPeriodDec(periods: Period[]): Period[] {
    return periods.sort((a, b) => {
      if (a.periodDec && b.periodDec) {
        return a.periodDec.localeCompare(b.periodDec);
      }
      return 0;
    });
  }


  // Méthode de soumission du formulaire
  onSubmit(): void {
    this.submitted = true;
    const formData = this.form.value;
    console.log('Données envoyées :', formData);
    this.checkOpenPeriods(formData.typePeriode);

    if (this.hasOpenPeriod) {
      this.showNotification(
        `Une période ${formData.typePeriode} est déjà ouverte!`,
        'error'
      );
      this.submitted = false;
      return;
    }
    const fd = this.form.value;

    this.periodService.createPeriod(formData).subscribe({
      next: (response) => {
        console.log('Réponse backend :', response);

        // 1. Réinitialiser le formulaire
        this.form.reset();
        this.submitted = false; // Mettre à false pour permettre de nouvelles soumissions

        // 2. Fermer la modal
        this.addPeriodModalInstance?.hide();
        // Supprimer manuellement le backdrop si nécessaire
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }


        // 3. Actualiser les données
        this.checkOpenPeriods(); // Vérifie l'état des périodes
        if (this.selectedType) {
          this.loadPeriodsByType(this.selectedType);
        } else {
          this.loadPeriods();
        }


        // 4. Notification
        this.showNotification('Période créée avec succès !', 'success');
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout :", error);
        this.showNotification('Erreur lors de l\'ajout de la période.', 'error');
        this.submitted = false;
      }
    });

  }




  goToDetails(period: Period): void {
    this.router.navigate(['/operations'], { queryParams: {
        id: period.id ,
        typePeriode: period.typePeriode,
        periodicity: period.periodicity,
        status: period.status,
        details: period.details } });
  }

  goToPath(): void {
    console.log('Redirection home');
    this.router.navigate(['']);
  }




  openDeleteConfirmation(id: number): void {
    this.periodToDelete = id;  // Enregistrer l'ID de la période à supprimer
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();  // Afficher la modale
    }
  }

  // Méthode pour confirmer la suppression
  confirmDelete(): void {
    if (this.periodToDelete !== null) {
      this.periodService.deletePeriod(this.periodToDelete).subscribe({
        next: (response) => {
          // Afficher la notification de succès
          this.showNotification('Période supprimée avec succès !', 'success');
          if (this.selectedType) {
            this.loadPeriodsByType(this.selectedType);
          } else {
            this.loadPeriods();
          }
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la période', err.message || err);
          this.showNotification('Erreur lors de la suppression de la période.', 'error');
        },
      });

      // Fermer la modale après confirmation
      const modal = document.getElementById('confirmDeleteModal');
      if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {  // Vérifier que bootstrapModal n'est pas null
          bootstrapModal.hide();
        }
      }
    }
  }
  showNotification(message: string, type: string = 'success', duration: number = 5000): void {
    this.notification = {show: true, message, type};
    setTimeout(() => {
      this.notification.show = false;
    }, duration);
  }








  get filteredPeriods(): Period[] {
    return this.periods.filter(p => p.typePeriode === this.selectedType);
  }

  get buttonLabel(): string {
    const periods = this.filteredPeriods;
    if (periods.length === 0) return 'Ouvrir une Période';

    const enCours = periods.some(p => p.status === 'EN_COURS');
    return enCours ? 'Période déjà en cours' : '+';
  }

  get isOpenButtonDisabled(): boolean {
    return this.filteredPeriods.some(p => p.status === 'EN_COURS');
  }

  goBack(): void {
    this.location.back();
  }


}
