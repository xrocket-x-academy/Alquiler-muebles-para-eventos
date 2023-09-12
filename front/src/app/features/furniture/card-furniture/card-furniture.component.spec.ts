import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFurnitureComponent } from './card-furniture.component';

describe('CardFurnitureComponent', () => {
  let component: CardFurnitureComponent;
  let fixture: ComponentFixture<CardFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
