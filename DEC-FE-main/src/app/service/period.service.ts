import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {Period} from '../models/period/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  private apiUrl = `${environment.apiUrl}/periodes`;
  private trDonUrl = `${environment.apiUrl}/convert`; // This base URL is correct for your TrDonController

  constructor(private http: HttpClient) {
  }

  getPeriods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error("Erreur lors de la récupération des périodes :", error);
        return throwError(() => new Error('Erreur de récupération des périodes.'));
      })
    );
  }

  createPeriod(data: any): Observable<any> {
    console.log("Données envoyées au backend :", data);
    return this.http.post(`${this.apiUrl}/create`, data).pipe(
      catchError((error) => {
        console.error("Erreur retournée par le backend :", error);
        alert(`Erreur Backend: ${error.message}`);
        return throwError(() => error);
      })
    );
  }


  deletePeriod(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error("Erreur lors de la suppression de la période :", error);
        return throwError(() => new Error('Erreur de suppression de la période.'));
      })
    );
  }

  importData(periodId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/add-data/${periodId}`, formData, {
      headers: new HttpHeaders(),
      responseType: 'text'
    }).pipe(
      catchError((error) => {
        console.error("Erreur lors de l'importation des données :", error);
        return throwError(() => new Error('Erreur d\'importation de données.'));
      })
    );
  }

  getPeriodById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error("Erreur lors de la récupération de la période :", error);
        return throwError(() => new Error('Erreur de récupération des détails de la période.'));
      })
    );
  }

  closePeriod(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/close/${id}`, {}, {
      responseType: 'text'
    }).pipe(
      catchError((error) => {
        console.error("Erreur lors de la clôture de la période :", error);
        return throwError(() => error);
      })
    );
  }




  addTransaction(periodId: number, transfert: any): Observable<any> {
    console.log('Données envoyées au backend :', transfert);
    return this.http.post<any>(`/api/periodes/${periodId}/transactions`, transfert).pipe(
      catchError((error) => {
        console.error("Erreur lors de l'ajout de la transaction :", error);
        return throwError(() => new Error('Erreur d\'ajout de la transaction.'));
      })
    );
  }
  getPeriodsByType(type: string): Observable<Period[]> {
    const formattedType = type.replace('-', '_').toUpperCase();
    return this.http.get<Period[]>(`${this.apiUrl}/type/${formattedType}`).pipe(
      catchError((error) => {
        console.error(`Error loading periods for type ${formattedType}:`, error);
        // Retourne un observable vide en cas d'erreur
        return of([]);
      })
    );
  }


  validateOperationAgainstXsd(operation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/validate-operation`, operation);
  }

  // This method's URL is correct for the TrDonController
  getXmlForPeriod(id: number): Observable<string> {
    return this.http.get(`${this.trDonUrl}/${id}/xml`, { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error("Erreur lors de la récupération de l'XML :", error);
        return throwError(() => new Error('Erreur de récupération de l\'XML.'));
      })
    );
  }
}
