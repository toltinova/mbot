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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
