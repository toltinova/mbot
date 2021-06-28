import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import { Trade } from './trade';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-trades-detail-table',
  templateUrl: './trades-detail-table.component.html',
  styleUrls: ['./trades-detail-table.component.css']
})
export class TradesDetailTableComponent implements AfterViewInit {

  trades: Trade[] = [];
  displayedColumns: string[] = ['id', 'currency', 'amount', 'timestamp'];
  dataSource = new MatTableDataSource<Trade>(this.trades);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.loadTrades();
    this.paginator.page
        .pipe(tap(() => this.loadTrades()))
        .subscribe();
  }

  loadTrades() {
    this.apiService.getTrades(this.paginator.pageIndex, this.paginator.pageSize).subscribe({
      next: body => {
        this.dataSource = new MatTableDataSource<Trade>(body);
        this.dataSource.paginator = this.paginator;
      },
      error: error => { console.error('There was an error!', error); }
    })
  }

}





