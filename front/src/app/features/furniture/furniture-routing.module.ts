import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';
import { DetailsFurnitureComponent } from './details-furniture/details-furniture.component';
import { ListFurnitureComponent } from './list-furniture/list-furniture.component';

const routes: Routes = [
  {
    path: 'form',
    component: FurnitureFormComponent,
    pathMatch: 'full',
  },
  { path: 'list', component: ListFurnitureComponent },
  { path: 'details-furniture/:id', component: DetailsFurnitureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FurnitureRoutingModule { }
