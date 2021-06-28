import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from './trades-detail/trade';
import { Performance } from './dashboard-performance/performance';
import { TotalBalance } from './dashboard-balance/total-balance';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: String = environment.apiUrl;

  constructor(private httpClient: HttpClient) {};

  getTrades(pageNumber = 0, pageSize = 5): Observable<Trade[]> {
    return this.httpClient.get<Trade[]>(this.apiUrl + 'trades', {
     params: new HttpParams()
         .set('pageNumber', pageNumber.toString())
         .set('pageSize', pageSize.toString())
     });
  }

  getTotalBalance(): Observable<TotalBalance> {
    return this.httpClient.get<TotalBalance>(this.apiUrl + 'total-balance');
  }

  getPerformance(): Observable<Performance> {
    return this.httpClient.get<Performance>(this.apiUrl + 'performance');
  }

}
