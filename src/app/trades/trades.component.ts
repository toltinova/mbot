import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Trade } from '../trade';


@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  trades: Trade[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.trades = this.apiService.getTrades();
  }

}
