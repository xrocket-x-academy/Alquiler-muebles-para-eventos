
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureRoutingModule } from './furniture-routing.module';
//import { ListFurnitureComponent } from './list-furniture/list-furniture.component';
//import { DetailsFurnitureComponent } from './details-furniture/details-furniture.component';
//import { CardFurnitureComponent } from './card-furniture/card-furniture.component';

@NgModule({
  declarations: [
   // ListFurnitureComponent,
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule
  ]
})
export class FurnitureModule { }
