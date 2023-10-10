import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCalculatorComponent } from './rental-calculator.component';

describe('RentalCalculatorComponent', () => {
  let component: RentalCalculatorComponent;
  let fixture: ComponentFixture<RentalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
