import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/core/models/furniture';
import { FurnitureService } from 'src/app/core/services/furniture.service';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.scss'],
})
export class CheckoutDetailsComponent {
  furniture: Furniture | undefined; //Incializo el objeto como undefined a la espera de que reciba 


  quantity: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {}

  ngOnInit() {
    const furnitureId = this.route.snapshot.params['id'];

    this.furnitureService.getById(furnitureId).subscribe(
      (data) => {
        this.furniture = data;
      },
      (error) => {
        console.error('Error al cargar los detalles del mueble', error);
      }
    );
  }

  confirmOrder() {
    // Logica para confirmar la orden a definir
    this.furnitureService.updateAvailability(this.furniture.id, false).subscribe(
      () => {
        console.log('Mueble marcado como no disponible');
        
        this.router.navigate(['/checkout/confirmation']);
      },
      (error: any) => {
        console.error('Error al cambiar la disponibilidad del mueble', error);
      }
    );
  }
}