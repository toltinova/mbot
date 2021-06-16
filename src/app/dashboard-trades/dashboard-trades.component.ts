import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-trades',
  templateUrl: './dashboard-trades.component.html',
  styleUrls: ['./dashboard-trades.component.css']
})
export class DashboardTradesComponent implements OnInit {

  left1: String = "left1";
  right1: String = "right1";

  left2: String = "left2";
  right2: String = "right2";

  left3: String = "left3";
  right3: String = "right3";

  constructor() { }

  ngOnInit(): void {
  }

}
