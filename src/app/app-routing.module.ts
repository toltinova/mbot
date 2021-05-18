import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradesComponent } from './trades/trades.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trades', component: TradesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
