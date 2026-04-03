import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  declarationTypes: string[] = [
    'CRS_CPD_OSM', 'CRS_CPD_VDPL', 'CRS_DEVPPLTNDPPL', 'CRS_SM_TND', 'CRS_INR', 'CRS_ALL_TNDCV',
    'CRS_ATT', 'CRS_E_TNDCVE_ENDCV_TTE_E_DEV', 'CRS_PPR', 'CRS_Startup', 'CRS_NEG',
    'TR_DOMSC', 'TR_SC', 'TR_MS', 'TR_SM', 'TR_IE', 'TR_R_CNR', 'TR_DOM_EE', 'TR_REM_EE',
    'TR_FP', 'TR_RETALL', 'TR_ALL_CPI', 'TR_ALL', 'TR_ALL_CTI', 'TR_DON', 'TR_DIV',
    'TR_CESSLIǪ', 'TR_RD', 'TR_FI', 'DC_AVA', 'DC_MAR', 'DS_IETR', 'DS_IESuivi',
    'DS_Startup_IE_TR', 'DS_Startup_IE_SUIVI'
  ];

  selectedType: string = this.declarationTypes[0];
  selectedFile: File | null = null;
  loading = false;
  message = '';
  isError = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile || !this.selectedType) return;

    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('type', this.selectedType);

    this.http.post(`${environment.apiUrl}/admin/upload-xsd`, formData).subscribe({
      next: (res: any) => {
        this.message = res.message;
        this.isError = false;
        this.loading = false;
        this.selectedFile = null;
        setTimeout(() => this.message = '', 5000);
      },
      error: (err) => {
        this.message = 'Erreur lors de l\'upload du XSD';
        this.isError = true;
        this.loading = false;
      }
    });
  }
}
