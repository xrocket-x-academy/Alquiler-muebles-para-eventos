import { Furniture } from 'src/app/core/models/furniture';

import { CardFurnitureComponent } from '../card-furniture/card-furniture.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  //styleUrls: ['./list-furniture.component.css']
})
export class ListFurnitureComponent {
  @Input() furnitures: any[];
  constructor() {
    this.furnitures = [];
  }
}



