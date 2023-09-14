import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { FurnitureService } from 'src/app/core/services/furniture.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  providerEmail: string = ''; 
  furnitureId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private furnitureService: FurnitureService,
  ) {}

  ngOnInit() {
    this.furnitureId = this.route.snapshot.params['id'];
    this.furnitureService.getById(this.furnitureId).subscribe(
      (furniture) => {
        
        const ownerId = furniture.idOwner;

        
        this.userService.getById(ownerId).subscribe(
          (user) => {
            this.providerEmail = user.email;
          },
          (error) => {
            console.error('Error al obtener el correo electrónico del dueño', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el mueble', error);
      }
    ); 
  }

  confirmOrder() {
    // Aca va a ir la logica para confirmar la orden a definir

    // Navigate to the next step or a thank you page
    this.router.navigate(['/auth']);
  }
}