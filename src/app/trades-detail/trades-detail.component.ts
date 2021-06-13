import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Trade } from '../trade';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-trades-detail',
  templateUrl: './trades-detail.component.html',
  styleUrls: ['./trades-detail.component.css']
})
export class TradesDetailComponent implements OnInit {

  trades: Trade[] = [];
  message: String;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.message = 'Loading';
    this.apiService.getTrades().subscribe({
        next: body => { this.trades = body; this.message = 'Done'; },
        error: error => { console.error('There was an error!', error); }
    })
  }

}
