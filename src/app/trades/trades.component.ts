import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Trade } from '../trade';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  trades: Trade[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTrades().subscribe({
        next: body => { this.trades = body; },
        error: error => { console.error('There was an error!', error); }
    })
  }

}
