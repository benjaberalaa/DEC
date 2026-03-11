import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent {
  columns: string[] = ['Code', 'Name', 'Type', 'Length', 'Obligation', 'CorrespXlsFeuille', 'CorrespXlsColumn'];
  master: any[] = [];
  detail: any[] = [];
  isJsonPreviewVisible: boolean = true; // Contrôle de l'affichage de l'aperçu JSON

  // Ajouter une colonne
  addColumn(): void {
    const newColumn = prompt('Entrez le nom de la nouvelle colonne :');
    if (newColumn) {
      this.columns.push(newColumn);
      this.master.forEach((row) => (row[newColumn] = ''));
      this.detail.forEach((row) => (row[newColumn] = ''));
    }
  }
  constructor() {
    this.initializeTables(); // Initialise les tables avec deux lignes par défaut
  }
  initializeTables(): void {
    const defaultRow = this.columns.reduce((acc, column) => ({ ...acc, [column]: '' }), {}); // Ligne avec colonnes vides

    this.master = [
      { ...defaultRow, Code: 'Agence', Name: 'Agence déclaration', Type:'String',Length:'3',Obligation:'true',CorrespXlsFeuille:'feuille1',CorrespXlsColumn:'A' },
      { ...defaultRow, Code: 'TypeTitul', Name: 'Type titulaire',Type:'Long',Length:'1',Obligation:'true',CorrespXlsFeuille:'feuille1',CorrespXlsColumn:'B' }
    ];

    this.detail = [
      { ...defaultRow, Code: 'Rib', Name: 'Rib' },
      { ...defaultRow, Code: 'NatMvtOp', Name: 'Nature mouvement opération' }
    ];
  }

  // Supprimer une colonne
  removeColumn(column: string): void {
    this.columns = this.columns.filter((col) => col !== column);
    this.master.forEach((row) => delete row[column]);
    this.detail.forEach((row) => delete row[column]);
  }

  // Ajouter une ligne dans le tableau Master
  addMasterRow(): void {
    const newRow = this.columns.reduce((acc, column) => ({ ...acc, [column]: '' }), {});
    this.master.push(newRow);
  }

  // Ajouter une ligne dans le tableau Detail
  addDetailRow(): void {
    const newRow = this.columns.reduce((acc, column) => ({ ...acc, [column]: '' }), {});
    this.detail.push(newRow);
  }

  // Supprimer une ligne dans le tableau Master
  removeMasterRow(row: any): void {
    this.master = this.master.filter((r) => r !== row);
  }

  // Supprimer une ligne dans le tableau Detail
  removeDetailRow(row: any): void {
    this.detail = this.detail.filter((r) => r !== row);
  }

  // Générer le JSON
  generateJson(): any {
    return {
      master: this.master,
      detail: this.detail,
    };
  }

  // Basculer l'affichage de l'aperçu JSON
  toggleJsonPreview(): void {
    this.isJsonPreviewVisible = !this.isJsonPreviewVisible;
  }
  // Télécharger le JSON généré
  downloadJson(): void {
    const jsonData = this.generateJson();
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);
    downloadLink.href = objectUrl;
    downloadLink.download = 'generated-data.json';
    downloadLink.click();
    URL.revokeObjectURL(objectUrl);
  }
}
