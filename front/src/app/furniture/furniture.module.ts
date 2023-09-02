import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';
import { FurnitureRoutingModule } from './furniture-routing.module';



@NgModule({
  declarations: [
    FurnitureFormComponent
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FurnitureModule { }
