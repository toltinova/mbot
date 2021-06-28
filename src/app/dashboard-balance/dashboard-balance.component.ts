import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TotalBalance } from './total-balance';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-balance',
  templateUrl: './dashboard-balance.component.html',
  styleUrls: ['./dashboard-balance.component.css']
})
export class DashboardBalanceComponent implements OnInit {

   totalBalance : TotalBalance;

   constructor(private apiService: ApiService) { }

   ngOnInit(): void {
      this.apiService.getTotalBalance().subscribe({
         next: body => { this.totalBalance = body; },
         error: error => { console.error('There was an error!', error); }
      })
   }

}
