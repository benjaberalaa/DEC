import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeriodService } from '../service/period.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

interface Operation {
  periodDec: string;
  agence: string;
  refDonneur: {
    typeIdentifiantD: string;
    codIdentifiantD: string;
    denomD: string;
    ibanDonOrd: string;
    paysFonds: string;
  };
  benifiicaire: {
    typeBenifAsso: string;
    codIdentifiant: string;
    numVisa: string;
    refJort: string;
    abrev: string;
    denomComplAsso: string;
    rib: string;
  };
  operationTransf: {
    natOp: string;
    mntDev: {
      value: number;
      ccy: string;
    };
    cvmntDin: {
      value: number;
      ccy: string;
    };
    datOp: string;
    refMsgSwift: string;
  };
  errors?: string[]; // Add errors property
}

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  id: number | null = null;
  typePeriode: string | null = null;
  periodicity: string | null = null;
  periodDec: string | null = null;
  status: string | null = null; // This will hold the status, e.g., 'CLOSED' or 'OPEN'
  details: string | null = null;
  xsdFile: File | null = null;
  showAddTransactionModal = false;
  transactionForm: FormGroup;

  xmlPreview: string | null = null;

  showXsdModal = false;
  showXmlPreviewModal = false;

  operations: Operation[] = [];

  notification = {
    show: false,
    message: '',
    type: '',
  };

  validationErrorsPreview: string | null = null;
  showValidationErrorsModal = false;


  constructor(
    private route: ActivatedRoute,
    private periodService: PeriodService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {
    this.transactionForm = this.formBuilder.group({
      agence: ['', Validators.required],
      typeIdentifiantD: [''],
      codIdentifiantD: [''],
      denomD: [''],
      ibanDonOrd: [''],
      paysFonds: [''],
      typeBenifAsso: [''],
      codIdentifiant: [''],
      numVisa: [''],
      refJort: [''],
      abrev: [''],
      denomComplAsso: [''],
      rib: [''],
      natOp: [''],
      mntDev: this.formBuilder.group({
        value: ['', [Validators.required, Validators.min(0)]],
        ccy: ['', Validators.required],
      }),
      cvmntDin: this.formBuilder.group({
        value: ['', [Validators.required, Validators.min(0)]],
        ccy: ['', Validators.required],
      }),
      datOp: ['', Validators.required],
      refMsgSwift: [''],
    });
  }

  transactionFields = [
    { id: 'agence', label: 'Agence', name: 'agence' },
    { id: 'typeIdentifiantD', label: 'Type Identifiant Donneur', name: 'typeIdentifiantD' },
    { id: 'codIdentifiantD', label: 'Code Identifiant Donneur', name: 'codIdentifiantD' },
    { id: 'denomD', label: 'Dénomination Donneur', name: 'denomD' },
    { id: 'ibanDonOrd', label: 'IBAN Donneur', name: 'ibanDonOrd' },
    { id: 'paysFonds', label: 'Pays Fonds', name: 'paysFonds' },
    { id: 'typeBenifAsso', label: 'Type Bénéficiaire', name: 'typeBenifAsso' },
    { id: 'codIdentifiant', label: 'Code Identifiant Bénéficiaire', name: 'codIdentifiant' },
    { id: 'numVisa', label: 'Numéro Visa', name: 'numVisa' },
    { id: 'refJort', label: 'Référence Jort', name: 'refJort' },
    { id: 'abrev', label: 'Abréviation', name: 'abrev' },
    { id: 'denomComplAsso', label: 'Dénomination Complète Association', name: 'denomComplAsso' },
    { id: 'rib', label: 'RIB', name: 'rib' },
    { id: 'natOp', label: 'Nature d’Opération', name: 'natOp' },
    { id: 'datOp', label: 'Date Opération', name: 'datOp' },
    { id: 'refMsgSwift', label: 'Référence Swift', name: 'refMsgSwift' },
  ];

  private loadTransactions(details: any): void {
    if (details.transferts) {
      const transferts = details.transferts.transfert || [];
      this.operations = transferts.flatMap((transfert: any) =>
        transfert.details?.detail || []
      );
      this.analyzeAllOperations();
    } else {
      this.operations = [];
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'] || null;
      if (this.id) {
        this.periodService.getPeriodById(this.id).subscribe({
          next: (period) => {
            this.id = period.id;
            this.typePeriode = period.typePeriode;
            this.periodicity = period.periodicity;
            this.status = period.status; // Make sure your API returns the status here
            this.periodDec = period.periodDec;

            if (period.details) {
              const details = typeof period.details === 'string' ? JSON.parse(period.details) : period.details;
              this.loadTransactions(details);
            }
          },
          error: (err) => {
            console.error('Erreur lors du chargement des détails de la période :', err);
          },
        });
      }
    });
  }

  get currentPhase(): number {
    if (this.status === 'CLOTUREE' || this.status === 'GENEREE') {
      return 5;
    }
    if (this.operations && this.operations.length > 0) {
      const hasErrors = this.operations.some(op => op.errors && op.errors.length > 0);
      return hasErrors ? 3 : 4;
    }
    return 2;
  }

  showNotification(message: string, type: string = 'success', duration: number = 5000): void {
    this.notification = { show: true, message, type };
    setTimeout(() => {
      this.notification.show = false;
    }, duration);
  }

  // Helper method to check if the period is closed
  isPeriodClosed(): boolean {
    // Assuming your API returns 'CLOSED' for a closed period status
    // Adjust 'CLOSED' if your API uses a different string, e.g., 'Cloturee'
    return this.status === 'CLOTUREE';
  }

  closePeriod(): void {
    if (this.id && !this.isPeriodClosed()) { // Only allow closing if not already closed
      this.periodService.closePeriod(this.id).subscribe({
        next: (response: any) => {
          if (typeof response === 'string' && response.trim().startsWith('<?xml')) {
            this.xmlPreview = response;
            this.showXmlPreviewModal = true;
            this.showNotification('Période clôturée et fichier XML généré avec succès!', 'success');
            this.reloadComponentState(); // Reload to update status and button states
          } else if (Array.isArray(response)) {
            this.validationErrorsPreview = JSON.stringify(response, null, 2);
            this.showValidationErrorsModal = true;
          } else {
            this.showNotification('Réponse inattendue du serveur.', 'warning');
          }
        },
        error: (err) => {
          console.error('Erreur lors de la clôture de la période:', err);
          if (err.error && Array.isArray(err.error)) {
            this.validationErrorsPreview = JSON.stringify(err.error, null, 2);
            this.showValidationErrorsModal = true;
            return;
          }
          if (typeof err.error === 'string') {
            try {
              const parsed = JSON.parse(err.error);
              if (Array.isArray(parsed)) {
                this.validationErrorsPreview = JSON.stringify(parsed, null, 2);
                this.showValidationErrorsModal = true;
                return;
              }
              if (parsed && parsed.errors && Array.isArray(parsed.errors)) {
                this.validationErrorsPreview = JSON.stringify(parsed.errors, null, 2);
                this.showValidationErrorsModal = true;
                return;
              }
            } catch (_) {
              // Not JSON, continue
            }
          }
          if (err.error && err.error.errors && Array.isArray(err.error.errors)) {
            this.validationErrorsPreview = JSON.stringify(err.error.errors, null, 2);
            this.showValidationErrorsModal = true;
            return;
          }
          this.showNotification(
            err.error?.message || err.error || 'Erreur lors de la clôture de la période',
            'error'
          );
        }
      });
    }
  }

  // New method to regenerate XML
  // In operations.component.ts

  regenerateXml(): void {
    if (this.id && this.isPeriodClosed()) {
      // Call the new service method to get XML for a closed period
      this.periodService.getXmlForPeriod(this.id).subscribe({
        next: (response: string) => {
          this.xmlPreview = response;
          this.showXmlPreviewModal = true;
          this.showNotification('XML regénéré avec succès!', 'info');
        },
        error: (err) => {
          console.error('Erreur lors de la regénération de l\'XML:', err);
          this.showNotification('Erreur lors de la regénération de l\'XML. ' + (err.message || ''), 'error');
        }
      });
    } else {
      this.showNotification('La période doit être clôturée pour regénérer l\'XML.', 'warning');
    }
  }


  private reloadComponentState(): void {
    if (this.id) {
      this.periodService.getPeriodById(this.id).subscribe({
        next: (period) => {
          this.id = period.id;
          this.typePeriode = period.typePeriode;
          this.periodicity = period.periodicity;
          this.status = period.status; // Update status after reload
          this.periodDec = period.periodDec;

          if (period.details) {
            const details = typeof period.details === 'string'
              ? JSON.parse(period.details)
              : period.details;
            this.loadTransactions(details);
          }
          this.operations = [...this.operations];
        },
        error: (err) => {
          console.error('Erreur lors du rechargement des détails de la période :', err);
        },
      });
    }
  }

  closeValidationErrorsModal(): void {
    this.showValidationErrorsModal = false;
    this.validationErrorsPreview = null;
  }

  closeXmlPreviewModal(): void {
    this.showXmlPreviewModal = false;
    this.xmlPreview = null;
  }

  downloadXml(): void {
    if (this.xmlPreview) {
      const blob = new Blob([this.xmlPreview], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `periode-${this.id}.xml`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }

  openAddTransactionModal(): void {
    if (!this.isPeriodClosed()) { // Only open if period is not closed
      this.showAddTransactionModal = true;
    }
  }

  closeAddTransactionModal(): void {
    this.showAddTransactionModal = false;
    this.transactionForm.reset();
  }

  submitTransaction(): void {
    if (this.id && this.transactionForm.valid && !this.isPeriodClosed()) { // Only allow if period is not closed
      const modalData = this.transactionForm.value;
      const transformedData = this.transformModalDataToTargetStructure(modalData);
      this.periodService.addTransaction(this.id, transformedData).subscribe({
        next: (response) => {
          const newOperation: Operation = response.transferts.transfert[0].details.detail[0];
          this.operations.push(newOperation);
          this.analyzeOperation(newOperation);
          this.showNotification('Transaction ajoutée avec succès', 'success');
          this.closeAddTransactionModal();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de la transaction :', err);
          this.showNotification('Erreur lors de l\'ajout de la transaction', 'error');
        }
      });
    } else if (this.isPeriodClosed()) {
      this.showNotification('Impossible d\'ajouter une transaction. La période est clôturée.', 'warning');
    } else {
      this.showNotification('Veuillez remplir tous les champs obligatoires du formulaire.', 'error');
    }
  }

  handleFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file && this.id && !this.isPeriodClosed()) { // Only allow if period is not closed
      this.periodService.importData(this.id, file).subscribe({
        next: (response) => {
          this.showNotification('Données ajoutées avec succès !', 'success');
          event.target.value = '';

          if (this.id != null) {
            this.periodService.getPeriodById(this.id).subscribe({
              next: (period) => {
                if (period.details) {
                  const details = typeof period.details === 'string' ? JSON.parse(period.details) : period.details;
                  this.loadTransactions(details);
                }
              },
              error: (err) => {
                console.error('Erreur lors de la mise à jour des transactions après l\'importation :', err);
              },
            });
          }
        },
        error: (err) => {
          this.showNotification('Erreur lors de l\'importation du fichier', 'error');
          console.error(err);
        },
      });
    } else if (this.isPeriodClosed()) {
      this.showNotification('Impossible d\'injecter Excel. La période est clôturée.', 'warning');
      event.target.value = ''; // Clear selected file even if disabled
    } else {
      this.showNotification('Aucun fichier sélectionné ou ID de période manquant', 'error');
    }
  }

  transformModalDataToTargetStructure(modalData: any): any {
    return {
      EnteteDoc: {
        CodeIAT: "023", // exemple
        DateDec: new Date().toISOString().split('T')[0],
        CodeAnnexe: "TR-014"
      },
      transferts: {
        transfert: [
          {
            entete: {
              periodDec: this.periodDec || '', // Use the component's periodDec
              nbrEcritures: '000001'
            },
            details: {
              detail: [
                {
                  periodDec: this.periodDec || '', // Use the component's periodDec
                  agence: modalData.agence || '',
                  refDonneur: {
                    typeIdentifiantD: modalData.typeIdentifiantD || '',
                    codIdentifiantD: modalData.codIdentifiantD || '',
                    denomD: modalData.denomD || '',
                    ibanDonOrd: modalData.ibanDonOrd || '',
                    paysFonds: modalData.paysFonds || ''
                  },
                  benifiicaire: {
                    typeBenifAsso: modalData.typeBenifAsso || '',
                    codIdentifiant: modalData.codIdentifiant || '',
                    numVisa: modalData.numVisa || '',
                    refJort: modalData.refJort || '',
                    abrev: modalData.abrev || '',
                    denomComplAsso: modalData.denomComplAsso || '',
                    rib: modalData.rib || ''
                  },
                  operationTransf: {
                    natOp: modalData.natOp || '',
                    mntDev: {
                      value: modalData.mntDev?.value || 0,
                      ccy: modalData.mntDev?.ccy || ''
                    },
                    cvmntDin: {
                      value: modalData.cvmntDin?.value || 0,
                      ccy: modalData.cvmntDin?.ccy || ''
                    },
                    datOp: modalData.datOp || '',
                    refMsgSwift: modalData.refMsgSwift || ''
                  }
                }
              ]
            }
          }
        ]
      }
    };
  }

  goBack(): void {
    this.location.back();
  }

  analyzeAllOperations(): void {
    const analysisPromises = this.operations.map(op => {
      return new Promise<void>(resolve => {
        this.periodService.validateOperationAgainstXsd(op).subscribe({
          next: (validationResult) => {
            if (validationResult.isValid) {
              op.errors = [];
            } else {
              op.errors = validationResult.errors;
            }
            resolve();
          },
          error: (err) => {
            op.errors = ['Erreur d\'analyse: ' + (err.message || 'Impossible de valider.')];
            console.error('Erreur lors de la validation de l\'opération:', err);
            resolve();
          }
        });
      });
    });

    Promise.all(analysisPromises).then(() => {
      this.operations = [...this.operations];
    });
  }

  analyzeOperation(operation: Operation): void {
    this.periodService.validateOperationAgainstXsd(operation).subscribe({
      next: (validationResult) => {
        if (validationResult.isValid) {
          operation.errors = [];
        } else {
          operation.errors = validationResult.errors;
        }
      },
      error: (err) => {
        operation.errors = ['Erreur d\'analyse: ' + (err.message || 'Impossible de valider.')];
        console.error('Erreur lors de la validation de l\'opération:', err);
      }
    });
  }

  openSingleErrorModal(errors: string[] | undefined): void {
    if (errors && errors.length > 0) {
      this.validationErrorsPreview = errors.join('\n');
      this.showValidationErrorsModal = true;
    }
  }
}
