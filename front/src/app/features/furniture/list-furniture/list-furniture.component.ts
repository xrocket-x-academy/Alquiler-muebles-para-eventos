import { Furniture } from 'src/app/core/models/furniture';

import { CardFurnitureComponent } from '../card-furniture/card-furniture.component';
import { Component, Input, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/core/services/furniture.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent implements OnInit {
  @Input() furnitures: any[];
  constructor(private furnitureService:FurnitureService,
              private spinner: NgxSpinnerService) {
    this.furnitures = [];
  }

  ngOnInit(): void {
    this.obtenerMuebles();
  }
  private obtenerMuebles(): void {
    this.spinner.show();
    this.furnitureService.getAll().subscribe({
            next: (furnitures: Furniture[]) => {
              this.furnitures = furnitures;
              this.spinner.hide();
            },
            error: (error) => {
              console.error(error);
              this.spinner.hide();
            }
          });

  }
}
