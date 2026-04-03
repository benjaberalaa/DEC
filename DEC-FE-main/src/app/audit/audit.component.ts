import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  logs: any[] = [];
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.loading = true;
    this.http.get<any[]>(`${environment.apiUrl}/audit/history`).subscribe({
      next: (data) => {
        this.logs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load audit history', err);
        this.loading = false;
      }
    });
  }

  getActionLabel(action: string): string {
     switch(action) {
       case 'CREATE_PERIOD': return '🚀 Création Période';
       case 'CLOSE_PERIOD': return '🔒 Clôture Période';
       case 'IMPORT_DATA': return '📥 Import Excel';
       case 'UPLOAD_XSD': return '🛠️ Mise à jour XSD';
       case 'DELETE_PERIOD': return '🗑️ Suppression';
       default: return action;
     }
  }

  getBadgeClass(action: string): string {
    if (action.includes('CREATE')) return 'bg-success';
    if (action.includes('CLOSE')) return 'bg-primary';
    if (action.includes('UPLOAD')) return 'bg-warning text-dark';
    if (action.includes('DELETE')) return 'bg-danger';
    return 'bg-secondary';
  }
}
