import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-balance',
  templateUrl: './dashboard-balance.component.html',
  styleUrls: ['./dashboard-balance.component.css']
})
export class DashboardBalanceComponent implements OnInit {

  amount = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
