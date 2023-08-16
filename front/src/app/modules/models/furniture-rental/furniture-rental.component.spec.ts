import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureRentalComponent } from './furniture-rental.component';

describe('FurnitureRentalComponent', () => {
  let component: FurnitureRentalComponent;
  let fixture: ComponentFixture<FurnitureRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
