import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';



@NgModule({
  declarations: [
    FurnitureFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FurnitureModule { }
