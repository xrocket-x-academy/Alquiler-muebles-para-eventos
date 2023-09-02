import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';

const routes: Routes = [
  {
    path: 'form',
    component: FurnitureFormComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FurnitureRoutingModule { }
