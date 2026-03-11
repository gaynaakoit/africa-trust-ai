import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalysisService {

  private apiUrl = 'http://localhost:3000/deepfake/analyze';

  constructor(private http: HttpClient) { }

  deepfakeAnalysis(fileData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, fileData);
  }
}