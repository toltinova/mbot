import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Performance } from './performance';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-performance',
  templateUrl: './dashboard-performance.component.html',
  styleUrls: ['./dashboard-performance.component.css']
})
export class DashboardPerformanceComponent implements OnInit {

  performance : Performance;
  message: String;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.message = 'Loading';
      this.apiService.getPerformance().subscribe({
          next: body => { this.performance = body; this.message = 'Done'; },
          error: error => { console.error('There was an error!', error); }
      })
   }

}
