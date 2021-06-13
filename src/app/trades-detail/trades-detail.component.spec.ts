import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesDetailComponent } from './trades-detail.component';

describe('TradesDetailComponent', () => {
  let component: TradesDetailComponent;
  let fixture: ComponentFixture<TradesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
