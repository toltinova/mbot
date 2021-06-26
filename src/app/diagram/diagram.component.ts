import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  tradeData = [
      { name: "BTC", value: 105000 },
      { name: "ETH", value: 55000 },
      { name: "ETH", value: 15000 },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
