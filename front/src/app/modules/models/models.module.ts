import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureRentalComponent } from './furniture-rental/furniture-rental.component';


@NgModule({
  declarations: [
    FurnitureComponent,
    FurnitureRentalComponent
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule
  ]
})
export class ModelsModule { }
