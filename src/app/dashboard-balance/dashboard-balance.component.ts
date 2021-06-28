import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { TotalBalance } from './total-balance';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-balance',
  templateUrl: './dashboard-balance.component.html',
  styleUrls: ['./dashboard-balance.component.css']
})
export class DashboardBalanceComponent implements OnInit, OnDestroy {

  totalBalance : TotalBalance;
  interval : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => { this.loadData(); }, 2500);
    this.loadData();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadData(): void {
    this.apiService.getTotalBalance().subscribe({
        next: body => { this.totalBalance = body; },
        error: error => { console.error('There was an error!', error); }
    });
  }
}
