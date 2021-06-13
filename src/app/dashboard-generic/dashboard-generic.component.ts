import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-generic',
  templateUrl: './dashboard-generic.component.html',
  styleUrls: ['./dashboard-generic.component.css']
})
export class DashboardGenericComponent implements OnInit {
  title = 'MBot';

  constructor() { }

  ngOnInit(): void {
  }

}
