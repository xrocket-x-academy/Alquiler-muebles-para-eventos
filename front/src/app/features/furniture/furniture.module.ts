import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { ListFurnitureComponent } from './list-furniture/list-furniture.component';
import { CardFurnitureComponent } from './card-furniture/card-furniture.component';
import { DetailsFurnitureComponent } from './details-furniture/details-furniture.component';

@NgModule({
  declarations: [
    FurnitureFormComponent,
    ListFurnitureComponent,
    CardFurnitureComponent,
    
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FurnitureModule { }
