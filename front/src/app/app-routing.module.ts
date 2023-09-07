import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalCalculatorComponent } from './modules/rental-calculator/rental-calculator.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'full'
  },
  { path: 'calculator',
   component: RentalCalculatorComponent,
  },
  { path: 'checkout', 
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule),
    pathMatch: 'full'
   },
  { path: 'furniture',
    loadChildren: () => import('./features/furniture/furniture.module').then(m => m.FurnitureModule),
    pathMatch: 'full'
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
