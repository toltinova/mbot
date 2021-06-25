import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesDetailTableComponent } from './trades-detail-table.component';

describe('TradesDetailTableComponent', () => {
  let component: TradesDetailTableComponent;
  let fixture: ComponentFixture<TradesDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
