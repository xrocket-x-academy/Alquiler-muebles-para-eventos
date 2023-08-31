import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.scss'],
})
export class CheckoutDetailsComponent {
  furniture = {
    title: 'Example Furniture',
    price: 100, 
    //Ejemplo para arrancar la pagina
  };

  quantity: number = 1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  confirmOrder() {
    // Logica para confirmar la orden a definir

    // Navegacion a la pagina de confirmacion
    this.router.navigate(['/checkout/confirmation']);
  }
}