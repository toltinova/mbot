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
        { name: "BTC", value: 35 },
        { name: "ETH", value: 40 },
        { name: "ETC", value: 40 },
      ];
  view: any[] = [300, 300];
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  tooltipDisabled: boolean = true;
  legendPosition: string = 'below';
  colorScheme = {
      domain: ['#FF6635', '#101A35', '#DBDBDB',]
    };



  constructor() {

  }


}
