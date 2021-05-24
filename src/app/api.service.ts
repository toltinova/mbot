import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trade } from './trade';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  trades: Trade[] = [
    { id: 1, currency: 'BTC', amount: '1', timestamp: '1' },
    { id: 2, currency: 'ETC', amount: '2', timestamp: '2' },
    { id: 3, currency: 'ADA', amount: '3', timestamp: '3' },
    { id: 4, currency: 'ETH', amount: '4', timestamp: '4' }
  ];

  constructor(private http: HttpClient) {};

  getTrades(): Observable<Trade[]> {
    console.log("test")
    return this.http.get<Trade[]>('http://localhost:3000/trades');
  }

}
