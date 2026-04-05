import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DeclarationConfig } from '../models/declaration/declaration-config.interface';

@Injectable({
  providedIn: 'root'
})
export class GenericDeclarationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Import data from Excel for a specific period
   */
  importData(periodId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/periodes/add-data/${periodId}`, formData, {
      responseType: 'text'
    }).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de l’importation'))
    );
  }

  /**
   * Close a period and trigger XML generation
   */
  closePeriod(periodId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/periodes/close/${periodId}`, {}, {
      responseType: 'text'
    }).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de la clôture'))
    );
  }

  /**
   * Get XML for a closed period using the declaration's specific endpoint
   */
  getXml(periodId: number): Observable<string> {
    return this.http.get(`${this.apiUrl}/periodes/${periodId}/xml`, {
      responseType: 'text'
    }).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de la récupération du XML'))
    );
  }

  /**
   * Add a single transaction
   */
  addTransaction(periodId: number, payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/periodes/${periodId}/transactions`, payload).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de l’ajout de la transaction'))
    );
  }

  /**
   * Get period details
   */
  getPeriodDetails(periodId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/periodes/${periodId}`).pipe(
      catchError(err => this.handleError(err, 'Erreur lors du chargement des détails'))
    );
  }

  /**
   * Update a specific transaction in a period
   */
  updateOperation(periodId: number, updateRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/periodes/update-operation/${periodId}`, updateRequest).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de la mise à jour de la transaction'))
    );
  }

  /**
   * Validate a single operation against XSD
   */
  validateOperation(periodId: number, operation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/periodes/validate-operation/${periodId}`, operation).pipe(
      catchError(err => this.handleError(err, 'Erreur lors de la validation'))
    );
  }

  private handleError(error: any, defaultMessage: string) {
    console.error(defaultMessage, error);
    return throwError(() => error);
  }
}
