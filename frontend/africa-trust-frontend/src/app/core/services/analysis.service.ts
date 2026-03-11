import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalysisService {

  private apiUrl = 'https://trust-ai.gaynaakoit.com/deepfake/analyze';
  
  constructor(private http: HttpClient) { }

  deepfakeAnalysis(fileData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, fileData);
  }
}