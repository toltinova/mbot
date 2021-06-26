import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustStrategyComponent } from './adjust-strategy.component';

describe('AdjustStrategyComponent', () => {
  let component: AdjustStrategyComponent;
  let fixture: ComponentFixture<AdjustStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
