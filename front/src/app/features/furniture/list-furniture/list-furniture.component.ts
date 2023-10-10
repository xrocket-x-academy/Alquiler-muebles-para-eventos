import { Furniture } from 'src/app/core/models/furniture';

import { CardFurnitureComponent } from '../card-furniture/card-furniture.component';
import { Component, Input, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/core/services/furniture.service';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss'],
})
export class ListFurnitureComponent {
  furnitures = [
    new Furniture(
      1,
      1,
      'my name',
      'my description',
      1,
      123,
      new Date(),
      new Date()
    ),
  ];
  // @Input() furnitures: Furniture[];
  // constructor(private furnitureService: FurnitureService) {
  //   this.furnitures = [];
  // }
  // ngOnInit(): void {
  //   this.obtenerMuebles();
  // }
  // private obtenerMuebles(): void {
  //   this.furnitureService.getAll().subscribe({
  //     next: (furnitures: Furniture[]) => {
  //       // Type missmatch.
  //       this.furnitures = furnitures;
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     }
  //   });
  // }
}
