import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Performance } from './performance';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-performance',
  templateUrl: './dashboard-performance.component.html',
  styleUrls: ['./dashboard-performance.component.css']
})
export class DashboardPerformanceComponent implements OnInit, OnDestroy {

  performance : Performance;
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
    this.apiService.getPerformance().subscribe({
        next: body => { this.performance = body; },
        error: error => { console.error('There was an error!', error); }
    });
  }

}
