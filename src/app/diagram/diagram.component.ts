import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent {
  tradeData = [
        { name: "BTC", value: 105000 },
        { name: "ETH", value: 55000 },
        { name: "ETC", value: 15000 },
      ];
  view: any[] = [300, 300];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = {
      domain: ['#FF9900', '#101A35', '#A1A1A1',]
    };



  constructor() {

  }


}
