import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit, OnDestroy {
  tradeData = [];
  view: any[] = [300, 300];
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  tooltipDisabled: boolean = true;
  legendPosition: string = 'below';
  colorScheme = { domain: ['#FF6635', '#101A35', '#DBDBDB',] };

  interval : any;

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.interval = setInterval(() => { this.loadData(); }, 2500);
    this.loadData();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadData(): void {
    this.apiService.getTotalBalance().subscribe({
      next: body => { this.tradeData = [
        { name: "BTC", value: body.percentage.btc },
        { name: "ETC", value: body.percentage.etc },
        { name: "ETH", value: body.percentage.eth }
      ];},
      error: error => { console.error('There was an error!', error); }
    })
  }

}
