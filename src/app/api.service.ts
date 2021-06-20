import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from './trades-detail/trade';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: String = "http://localhost:3000/"

  constructor(private http: HttpClient) {};

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(this.apiUrl + 'trades');
  }

}
