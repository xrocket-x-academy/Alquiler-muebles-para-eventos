import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFurnitureComponent } from './details-furniture/details-furniture.component';

const routes: Routes = [
  {path: 'details-furniture',
    component: DetailsFurnitureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }
