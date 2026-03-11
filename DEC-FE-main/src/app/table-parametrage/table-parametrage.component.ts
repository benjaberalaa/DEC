import { Component } from '@angular/core';
import { ProcessorService } from '../service/processor.service';

@Component({
  selector: 'app-table-parametrage',
  templateUrl: './table-parametrage.component.html',
  styleUrls: ['./table-parametrage.component.css'],
})
export class TableParametrageComponent {
  showParametrage:boolean =false;
  errorMessages: string[] = []; // Déclaration de la propriété

  // API 1: Gestion des fichiers Excel et JSON
  excelFileToUpload: File | null = null; // Fichier Excel
  jsonFileToUpload: File | null = null;  // Fichier JSON


  generatedData: string | null = null; // Résultat JSON généré depuis API 1

  // API 2: Gestion du fichier JSON pour conversion en XML
  jsonFileForXml: File | null = null; // Fichier JSON
  xsdFileForXml: File | null = null;  // Fichier Xsd
  convertedDataToXml: string | null = null; // Résultat XML en aperçu
  convertedFileToXml: Blob | null = null;  // Fichier XML pour téléchargement
  isJsonPreviewVisible: boolean = true; // Contrôle de l'aperçu JSON
  isXmlPreviewVisible: boolean = true; // C
  // API 3: Gestion des fichiers Excel pour conversion en XML
  excelFileForXml: File | null = null; // Fichier Excel
  xsdFileForExcelXml: File | null = null; // Fichier XSD
  convertedDataToExcelXml: string | null = null; // Résultat XML en aperçu
  convertedFileToExcelXml: Blob | null = null; // Fichier XML pour téléchargement



  constructor(private processorService: ProcessorService) {}

  // Méthodes pour API 1
  onExcelFileChange(event: any): void {
    this.excelFileToUpload = event.target.files[0];
  }

  onJsonFileChange(event: any): void {
    this.jsonFileToUpload = event.target.files[0];
  }



  generateJson(): void {
    if (!this.excelFileToUpload || !this.jsonFileToUpload) {
      alert('Veuillez importer un fichier Excel et un fichier JSON.');
      return;
    }

    this.processorService.processFiles(this.jsonFileToUpload, this.excelFileToUpload).subscribe(
      (data) => {
        this.generatedData = data; // Stocker le JSON généré
        alert('Données générées avec succès ! Aperçu disponible ci-dessous.');
      },
      (error) => {
        console.error('Erreur lors de la génération des données :', error);
        alert('Erreur lors de la génération des données.');
      }
    );
  }

  downloadGeneratedJson(): void {
    if (!this.generatedData || this.generatedData.length === 0) {
      alert('Aucune donnée générée à télécharger.');
      return;
    }

    const blob = new Blob([JSON.stringify(this.generatedData, null, 2)], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);
    downloadLink.href = objectUrl;
    downloadLink.download = 'generated-data.json';
    downloadLink.click();
    URL.revokeObjectURL(objectUrl);
  }


  // Méthodes pour API 2
  onJsonFileForXmlChange(event: any): void {
    this.jsonFileForXml = event.target.files[0];
  }
  onXsdFileForXmlChange(event: any): void {
  this.xsdFileForXml = event.target.files[0];
}

  convertToXml(): void {
    if (!this.jsonFileForXml || !this.xsdFileForXml) {
      alert('Veuillez importer un fichier JSON et un fichier XSD.');
      return;
    }

    this.processorService.convertJsonToXml(this.jsonFileForXml, this.xsdFileForXml).subscribe(
      (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.convertedDataToXml = reader.result as string; // Aperçu XML
        };
        reader.readAsText(blob);

        this.convertedFileToXml = blob; // Stocker le fichier XML pour téléchargement
        alert('Conversion en XML réussie ! Aperçu disponible ci-dessous.');
      },
      (error) => {
        console.error('Erreur lors de la conversion en XML :', error);
        alert('Erreur lors de la conversion en XML.');
      }
    );
  }

  downloadConvertedXml(): void {
    if (!this.convertedFileToXml) {
      alert('Aucun fichier XML converti à télécharger.');
      return;
    }

    const downloadLink = document.createElement('a');
    const objectUrl = URL.createObjectURL(this.convertedFileToXml);
    downloadLink.href = objectUrl;
    downloadLink.download = 'converted.xml';
    downloadLink.click();
    URL.revokeObjectURL(objectUrl);
  }
  toggleJsonPreview(): void {
    this.isJsonPreviewVisible = !this.isJsonPreviewVisible;
  }

  toggleXmlPreview(): void {
    this.isXmlPreviewVisible = !this.isXmlPreviewVisible;
  }
  onExcelFileForXmlChange(event: any): void {
    this.excelFileForXml = event.target.files[0];
  }

  onXsdFileForExcelXmlChange(event: any): void {
    this.xsdFileForExcelXml = event.target.files[0];
  }

  convertExcelToXml(): void {
    if (!this.excelFileForXml || !this.xsdFileForExcelXml) {
      alert('Veuillez importer un fichier Excel et un fichier XSD.');
      return;
    }

    this.processorService.convertExcelToXml(this.excelFileForXml, this.xsdFileForExcelXml).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);

        if (response && response.length > 0) {
          this.errorMessages = response.map((error: any) => error.message || 'Erreur inconnue.');
        } else {
          alert('Conversion réussie sans erreurs.');
        }
      },
      (error) => {
        console.error('Erreur lors de la conversion en XML :', error);
        alert(`Erreur lors de la conversion : ${JSON.stringify(error)}`); // Afficher l'erreur complète
      }
    );
  }



  private handleErrors(error: any): void {
    if (error instanceof Array) {
      this.errorMessages = error.map((err: any) => err.message || 'Erreur inconnue.');
    } else if (error?.message) {
      this.errorMessages = [error.message];
    } else {
      this.errorMessages = ['Une erreur inattendue est survenue.'];
    }
  }




  downloadConvertedExcelXml(): void {
    if (!this.convertedFileToExcelXml) {
      alert('Aucun fichier XML converti à télécharger.');
      return;
    }

    const downloadLink = document.createElement('a');
    const objectUrl = URL.createObjectURL(this.convertedFileToExcelXml);
    downloadLink.href = objectUrl;
    downloadLink.download = 'converted-from-excel.xml';
    downloadLink.click();
    URL.revokeObjectURL(objectUrl);
  }

}
