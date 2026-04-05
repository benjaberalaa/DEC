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

  page = 0;
  size = 10;
  totalElements = 0;
  totalPages = 0;

  filterUser = '';
  filterAction = '';
  pageSizeOptions = [10, 20, 50];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.loading = true;
    const params: any = {
      page: this.page,
      size: this.size
    };
    if (this.filterUser) params.username = this.filterUser;
    if (this.filterAction) params.action = this.filterAction;


    this.http.get<any>(`${environment.apiUrl}/audit/history`, { params }).subscribe({
      next: (res) => {
        this.logs = res.content || [];
        this.totalElements = res.totalElements || 0;
        this.totalPages = res.totalPages || 0;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load audit history', err);
        this.loading = false;
      }
    });
  }

  onFilter(): void {
    this.page = 0;
    this.loadHistory();
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.page = newPage;
      this.loadHistory();
    }
  }

  onSizeChange(): void {
    this.page = 0;
    this.loadHistory();
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
