import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFurnitureComponent } from './features/furniture/card-furniture/card-furniture.component';
import { DetailsFurnitureComponent } from './features/furniture/details-furniture/details-furniture.component';
import { ListFurnitureComponent } from './features/furniture/list-furniture/list-furniture.component';

const routes: Routes = [
  { path: 'card-furniture', component: CardFurnitureComponent },
  { path: 'details-furniture', component: DetailsFurnitureComponent },
  { path: 'list-furniture', component: ListFurnitureComponent },
  { path: 'details-furniture/:id', component: DetailsFurnitureComponent },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
