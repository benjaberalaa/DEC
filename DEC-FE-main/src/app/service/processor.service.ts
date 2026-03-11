import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProcessorService {
  private apiUrl = environment.apiUrl; // URL du backend

  constructor(private http: HttpClient) {}

  // API pour traiter deux fichiers : JSON et Excel
  processFiles(jsonFile: File, excelFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('jsonFile', jsonFile);
    formData.append('excelFile', excelFile);

    return this.http.post(`${this.apiUrl}/v1/processor/process`, formData, {
      responseType: 'json',
    });
  }

  // API pour convertir JSON en XML
  convertJsonToXml(jsonFile: File, xsdFile: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('json', jsonFile); // Correction : correspond à 'json' attendu côté backend
    formData.append('xsd', xsdFile); // Correction : correspond à 'xsd' attendu côté backend

    return this.http.post(`${this.apiUrl}/api/convert/json-to-xml`, formData, {
      responseType: 'blob',
    });
  }

  convertExcelToXml(excelFile: File, xsdFile: File): Observable<any> { // Changement ici
    const formData = new FormData();
    formData.append('file', excelFile);
    formData.append('xsd', xsdFile);

    return this.http.post<any>(`${this.apiUrl}/convert/excel-to-xml`, formData, {
      responseType: 'json',
    }); // Change 'blob' à 'json'
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erreur backend :', error.error);
    return throwError(() => error.error || { message: 'Erreur inattendue.' });
  }



}
