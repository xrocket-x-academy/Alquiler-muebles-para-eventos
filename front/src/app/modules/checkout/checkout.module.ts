import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'details',
   component: CheckoutDetailsComponent },
  { path: 'confirmation',
   component: ConfirmationComponent },
];


@NgModule({
  declarations: [
    CheckoutDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
