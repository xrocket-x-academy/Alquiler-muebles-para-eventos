import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponentComponent } from './core/pages/login-component/login-component.component';
>>>>>>> c07487001af812fbb05cbeec28414e09048d2ec6

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
  {
    path: '',
    component: LoginComponentComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
