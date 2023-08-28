import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureFormComponent } from './furniture/furniture-form/furniture-form.component';
const routes: Routes = [

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
  { path: 'furniture-form', component: FurnitureFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
