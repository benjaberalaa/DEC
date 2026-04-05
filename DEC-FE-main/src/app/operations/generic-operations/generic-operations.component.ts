import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { GenericDeclarationService } from '../../service/generic-declaration.service';
import { DECLARATIONS_CONFIG } from '../../config/declarations.registry';
import { DeclarationConfig } from '../../models/declaration/declaration-config.interface';

@Component({
  selector: 'app-generic-operations',
  templateUrl: './generic-operations.component.html',
  styleUrls: ['./generic-operations.component.css']
})
export class GenericOperationsComponent implements OnInit {
  periodId: number | null = null;
  declarationType: string | null = null;
  config: DeclarationConfig | null = null;
  
  status: string | null = null;
  periodDec: string | null = null;
  operations: any[] = [];
  
  transactionForm: FormGroup;
  showAddTransactionModal = false;
  showXmlPreviewModal = false;
  showErrorsModal = false;
  selectedOp: any = null;
  xmlPreview: string | null = null;

  notification = { show: false, message: '', type: '' };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private declarationService: GenericDeclarationService
  ) {
    this.transactionForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.periodId = params['id'] ? +params['id'] : null;
      this.declarationType = params['typePeriode'] || params['type'] || 'TR_DON'; // Support both param names
      
      this.config = DECLARATIONS_CONFIG[this.declarationType!];
      
      if (this.config) {
        this.buildForm();
        if (this.periodId) {
          this.loadPeriodData();
        }
      } else {
        this.showNotification(`Configuration introuvable pour : ${this.declarationType}`, 'error');
      }
    });
  }

  private buildForm(): void {
    const group: any = {};
    if (this.config && this.config.fields) {
      this.config.fields.forEach(field => {
        group[field.id] = ['', field.required ? Validators.required : null];
      });
    }
    this.transactionForm = this.fb.group(group);
  }

  private loadPeriodData(): void {
    if (!this.periodId) return;
    
    this.declarationService.getPeriodDetails(this.periodId).subscribe({
      next: (period) => {
        this.status = period.status;
        this.periodDec = period.periodDec;
        if (period.details) {
          const details = typeof period.details === 'string' ? JSON.parse(period.details) : period.details;
          this.extractOperations(details);
        } else {
          this.operations = [];
        }
      },
      error: (err) => this.showNotification('Erreur de chargement', 'error')
    });
  }

  private findKeyIgnoreCase(obj: any, target: string): string | null {
    if (!obj) return null;
    const lowerTarget = target.toLowerCase();
    return Object.keys(obj).find(k => k.toLowerCase() === lowerTarget) || null;
  }

  private extractOperations(details: any): void {
    console.log('Extracting operations from details:', details);
    let rawList: any[] = [];
    
    // Resilient extraction for different containers
    const containers = ['transferts', 'extraits', 'decomptes', 'dossiers'];
    let containerKey = null;
    
    for (const c of containers) {
      containerKey = this.findKeyIgnoreCase(details, c);
      if (containerKey) {
        console.log(`Found container: ${containerKey}`);
        break;
      }
    }

    if (containerKey) {
      const containerValue = details[containerKey];
      const entryKey = this.findKeyIgnoreCase(containerValue, containerKey.slice(0, -1)); // e.g., 'transfert' from 'transferts'
      
      if (entryKey) {
        console.log(`Found entry key: ${entryKey}`);
        const rawEntry = containerValue[entryKey];
        rawList = Array.isArray(rawEntry) ? rawEntry : [rawEntry];
      } else {
        console.warn(`Could not find entry key for container: ${containerKey}`);
      }
    } else {
      console.warn('Could not find any of the supported containers in details');
    }

    this.operations = rawList.flatMap((entry: any, i: number) => {
      const detailsKey = this.findKeyIgnoreCase(entry, 'details');
      const entryDetails = detailsKey ? entry[detailsKey] : null;
      
      if (entryDetails) {
        const detailKey = this.findKeyIgnoreCase(entryDetails, 'detail');
        const detailList = detailKey ? entryDetails[detailKey] : [];
        const list = Array.isArray(detailList) ? detailList : [detailList];
        
        console.log(`Extracted ${list.length} detail items from entry`);
        return list.map((d: any, j: number) => ({
          ...d,
          _entete: entry.entete || entry.Entete,
          _entryIndex: i,
          _detailIndex: j
        }));
      } else {
          // If no details are found, the transaction might just be directly inside the entry e.g. TR_ALL
          return [{
             ...entry,
             _entryIndex: i,
             _detailIndex: -1
          }];
      }
      return [];
    });

    console.log(`Final operations count: ${this.operations.length}`);
    this.validateAllOperations();
  }

  validateAllOperations(): void {
    if (!this.periodId) return;
    this.operations.forEach(op => {
      this.declarationService.validateOperation(this.periodId!, op).subscribe({
        next: (res) => {
          this.setOpErrors(op, res);
        },
        error: (err) => this.handleOpError(op, err)
      });
    });
  }

  private setOpErrors(op: any, res: any): void {
    if (res.isValid) {
      op.errors = [];
    } else {
      const rawErrors = Array.isArray(res.errors) ? res.errors : [{ message: JSON.stringify(res) }];
      // Use a Map to keep unique errors by message
      const uniqueMap = new Map();
      rawErrors.forEach((e: any) => {
        const msg = typeof e === 'string' ? e : e.message;
        if (!uniqueMap.has(msg)) {
          uniqueMap.set(msg, e);
        }
      });
      op.errors = Array.from(uniqueMap.values());
    }
  }

  private handleOpError(op: any, err: any): void {
    const body = err?.error;
    if (body?.errors && Array.isArray(body.errors)) {
      op.errors = body.errors;
    } else if (body?.message) {
      op.errors = [{ message: body.message }];
    } else if (typeof body === 'string') {
      op.errors = [{ message: body }];
    } else {
      op.errors = [{ message: 'HTTP ' + (err?.status || '?') + ': ' + JSON.stringify(body || err.message) }];
    }
  }

  handleFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file && this.periodId && this.status !== 'CLOTUREE') {
      this.declarationService.importData(this.periodId, file).subscribe({
        next: () => {
          this.showNotification('Importation réussie', 'success');
          // Clear the file input so the same file can be uploaded again
          if (event.target) {
            event.target.value = '';
          }
          this.loadPeriodData();
        },
        error: (err) => {
          this.showNotification('Erreur d’importation: ' + (err.error || err.message), 'error');
          if (event.target) {
            event.target.value = '';
          }
        }
      });
    }
  }

  submitTransaction(): void {
    if (this.transactionForm.valid && this.periodId && this.config) {
      const payload = this.config.payloadMapper(this.transactionForm.value, { periodDec: this.periodDec });
      this.declarationService.addTransaction(this.periodId, payload).subscribe({
        next: () => {
          this.showNotification('Transaction ajoutée', 'success');
          this.closeAddTransactionModal();
          // Ensure we wait a bit or ensure the backend has finished persisting
          setTimeout(() => this.loadPeriodData(), 500); 
        },
        error: (err) => this.showNotification('Erreur d’ajout: ' + (err.error || err.message), 'error')
      });
    }
  }

  closePeriod(): void {
    if (this.periodId && this.status !== 'CLOTUREE') {
      this.declarationService.closePeriod(this.periodId).subscribe({
        next: (res) => {
          if (res.startsWith('<?xml')) {
            this.xmlPreview = res;
            this.showXmlPreviewModal = true;
            this.showNotification('Période clôturée', 'success');
            this.loadPeriodData();
          }
        },
        error: (err) => {
          const body = err?.error;
          if (Array.isArray(body)) {
            this.selectedOp = { 
              errors: body.map((e: any) => `${e.fieldPath}: ${e.message} (valeur: ${e.invalidValue})`)
            };
            this.showErrorsModal = true;
          } else {
            this.showNotification('Erreur lors de la clôture', 'error');
          }
        }
      });
    }
  }

  revoirXml(): void {
    if (this.periodId && this.status === 'CLOTUREE') {
      this.declarationService.getXml(this.periodId).subscribe({
        next: (res) => {
          if (res.startsWith('<?xml')) {
            this.xmlPreview = res;
            this.showXmlPreviewModal = true;
          }
        },
        error: (err) => {
          const body = err?.error;
          if (Array.isArray(body)) {
            this.selectedOp = { 
              errors: body.map((e: any) => `${e.fieldPath}: ${e.message} (valeur: ${e.invalidValue})`)
            };
            this.showErrorsModal = true;
          } else {
            this.showNotification('Erreur lors de la récupération du XML', 'error');
          }
        }
      });
    }
  }

  downloadXml(): void {
    if (this.xmlPreview) {
      const blob = new Blob([this.xmlPreview], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.declarationType}-${this.periodId}.xml`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }

  showNotification(message: string, type: string): void {
    this.notification = { show: true, message, type };
    setTimeout(() => this.notification.show = false, 5000);
  }

  openAddTransactionModal(): void { this.showAddTransactionModal = true; }
  closeAddTransactionModal(): void { this.showAddTransactionModal = false; this.transactionForm.reset(); }

  viewErrors(op: any): void {
    this.selectedOp = { ...op, errors: [{ message: 'Chargement...' }] };
    this.showErrorsModal = true;
    
    if (!this.periodId) return;

    this.declarationService.validateOperation(this.periodId, op).subscribe({
      next: (res) => {
        this.setOpErrors(this.selectedOp, res);
        // Also update the row in the table
        this.setOpErrors(op, res);
      },
      error: (err: any) => {
        this.handleOpError(this.selectedOp, err);
        this.handleOpError(op, err);
      }
    });
  }

  revalidateOperation(op: any): void {
    if (!this.periodId) return;
    // If there are unsaved changes, save first then the reload will re-validate
    if (op._isDirty) {
      const idx = this.operations.indexOf(op);
      this.saveOperation(op, idx);
      return;
    }
    this.declarationService.validateOperation(this.periodId, op).subscribe({
      next: (res) => {
        this.setOpErrors(op, res);
        if (res.isValid) {
          this.showNotification('Validation réussie ✓', 'success');
        } else {
          this.showNotification('La transaction contient encore ' + (op.errors?.length || 0) + ' erreur(s)', 'warning');
        }
      },
      error: (err) => this.handleOpError(op, err)
    });
  }

  closeErrorsModal(): void {
    this.showErrorsModal = false;
    this.selectedOp = null;
  }

  goBack(): void { this.location.back(); }

  getProperty(obj: any, path: string | undefined): any {
    if (!path || !obj) return '';
    
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (!current) return '';
      // Try exact match first, then case-insensitive
      if (current.hasOwnProperty(part)) {
        current = current[part];
      } else {
        const key = Object.keys(current).find(k => k.toLowerCase() === part.toLowerCase());
        current = key ? current[key] : '';
      }
    }
    return current;
  }

  setNestedProperty(obj: any, path: string, value: any): void {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        let nextKey = Object.keys(current).find(k => k.toLowerCase() === part.toLowerCase());
        if (!nextKey) {
            nextKey = part;
            current[nextKey] = {};
        }
        current = current[nextKey];
    }
    const lastPart = parts[parts.length - 1];
    let lastKey = Object.keys(current).find(k => k.toLowerCase() === lastPart.toLowerCase());
    if (!lastKey) lastKey = lastPart;
    current[lastKey] = value;
  }

  onCellEdit(op: any, path: string, event: any): void {
    const newValue = event.target.innerText.trim();
    const oldValue = this.getProperty(op, path);
    
    if (newValue !== String(oldValue)) {
      this.setNestedProperty(op, path, newValue);
      op._isDirty = true;
    }
  }

  hasError(op: any, path: string): boolean {
    if (!op.errors || op.errors.length === 0) return false;
    
    const pathParts = path.split('.');
    const lastPart = pathParts[pathParts.length - 1].toLowerCase();
    
    return op.errors.some((err: any) => {
        if (!err) return false;
        const errMsg = typeof err === 'string' ? err : (err.message || '');
        const fieldName = err.fieldName ? err.fieldName.toLowerCase() : null;
        
        // Match by fieldName from XSD if available, else fallback to path matching
        if (fieldName) {
            return fieldName === lastPart || fieldName === path.toLowerCase();
        }
        
        const lowerErr = errMsg.toLowerCase();
        return lowerErr.includes(lastPart) || lowerErr.includes(path.toLowerCase());
    });
  }

  saveOperation(op: any, index: number): void {
    if (!this.periodId) return;

    // Remove all internal tracker properties (starting with _) before sending to backend
    const cleanOp: any = {};
    Object.keys(op).forEach(key => {
      if (!key.startsWith('_') && key !== 'errors') {
        cleanOp[key] = op[key];
      }
    });
    
    const updateRequest = {
      _entryIndex: op._entryIndex,
      _detailIndex: op._detailIndex,
      newData: cleanOp
    };

    this.declarationService.updateOperation(this.periodId, updateRequest).subscribe({
      next: () => {
        this.showNotification('Modifications enregistrées, re-validation en cours...', 'success');
        op._isDirty = false;
        // Reload everything from DB to ensure display and validation are in sync
        this.loadPeriodData();
      },
      error: (err: any) => this.showNotification('Erreur d\'enregistrement : ' + (err.error?.message || err.message), 'error')
    });
  }
}
