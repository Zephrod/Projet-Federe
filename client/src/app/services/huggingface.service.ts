import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HuggingFaceService {
  private apiUrl = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
    const body = { inputs: message };
    return this.http.post(this.apiUrl, body, { headers });
  }
}