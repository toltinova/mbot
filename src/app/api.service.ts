import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from './trade';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {};

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>('http://localhost:3000/trades');
  }

}
