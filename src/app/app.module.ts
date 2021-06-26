import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from  './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DiagramComponent } from './diagram/diagram.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradesComponent } from './trades/trades.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { TradesDetailComponent } from './trades-detail/trades-detail.component';
import { DashboardBalanceComponent } from './dashboard-balance/dashboard-balance.component';
import { DashboardTradesComponent } from './dashboard-trades/dashboard-trades.component';
import { DashboardGenericComponent } from './dashboard-generic/dashboard-generic.component';
import { DashboardPerformanceComponent } from './dashboard-performance/dashboard-performance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { TradesDetailTableComponent } from './trades-detail-table/trades-detail-table.component';
import { AdjustStrategyComponent } from './adjust-strategy/adjust-strategy.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DiagramComponent,
    HeaderComponent,
    DashboardComponent,
    TradesComponent,
    AboutComponent,
    AboutDetailComponent,
    TradesDetailComponent,
    DashboardBalanceComponent,
    DashboardTradesComponent,
    DashboardGenericComponent,
    DashboardPerformanceComponent,
    TradesDetailTableComponent,
    AdjustStrategyComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
