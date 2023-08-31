import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  providerEmail: string = 'provider@example.com'; //email de ejemplo

  constructor(private router: Router, private route: ActivatedRoute) {}

  confirmOrder() {
    // Aca va a ir la logica para confirmar la orden a definir

    // Navigate to the next step or a thank you page
    this.router.navigate(['/auth']);
  }
}