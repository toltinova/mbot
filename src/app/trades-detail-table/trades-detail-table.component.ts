import {AfterViewInit, Component, ViewChild, OnDestroy} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import { Trades, Trade } from './trade';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-trades-detail-table',
  templateUrl: './trades-detail-table.component.html',
  styleUrls: ['./trades-detail-table.component.css']
})
export class TradesDetailTableComponent implements AfterViewInit, OnDestroy {

  interval : any;
  length: number = 0;
  trades: Trade[] = [];
  displayedColumns: string[] = ['currency', 'amount', 'timestamp', 'price'];
  dataSource = new MatTableDataSource<Trade>(this.trades);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.interval = setInterval(() => { this.loadTrades(); }, 2500);
    this.loadTrades();
    this.paginator.page
        .pipe(tap(() => this.loadTrades()))
        .subscribe();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadTrades(event?:PageEvent) {
    this.apiService.getTrades(this.paginator.pageIndex, this.paginator.pageSize).subscribe({
      next: body => {
        this.dataSource = new MatTableDataSource<Trade>(body.trades);
        this.length = body.totalCount;
      },
      error: error => { console.error('There was an error!', error); }
    })
    return event;
  }

}





