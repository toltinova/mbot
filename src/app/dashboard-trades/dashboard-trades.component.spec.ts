import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTradesComponent } from './dashboard-trades.component';

describe('DashboardTradesComponent', () => {
  let component: DashboardTradesComponent;
  let fixture: ComponentFixture<DashboardTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
