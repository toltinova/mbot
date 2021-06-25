import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from './trades-detail/trade';
import { TotalBalance } from './dashboard-balance/total-balance';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: String = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) {};

  getTrades(): Observable<Trade[]> {
    return this.httpClient.get<Trade[]>(this.apiUrl + 'trades');
  }

  getTotalBalance(): Observable<TotalBalance> {
    return this.httpClient.get<TotalBalance>(this.apiUrl + 'total-balance');
  }

}
