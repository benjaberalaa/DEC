import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DEC-FRONT';
  enteteDoc: string[] = [];
  modelAttributes: any = null;

  constructor(private router: Router) {} // Injectez le service Router

  onModelSelected(data: any): void {
    this.enteteDoc = data.enteteDoc;
    this.modelAttributes = data.modelAttributes;

    // Naviguer vers le composant AddPeriod avec les données
    this.router.navigate(['/add-period'], {
      state: { enteteDoc: this.enteteDoc, modelAttributes: this.modelAttributes },
    });
  }

  onDetailClicked(): void {
    // Naviguer vers le composant Operations
    this.router.navigate(['/operations']);
  }
}
