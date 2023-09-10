import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-calculator',
  templateUrl: './rental-calculator.component.html',
  styleUrls: ['./rental-calculator.component.scss']
})
export class RentalCalculatorComponent implements OnChanges {
  @Input() units: number = 0;
  @Input() unitPrice: number = 0;

  quantity: number = 1;
  totalPrice: number = 0;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.quantity * this.unitPrice;
  }

  goToCheckout(): void {
    // Logica para redirigir al checkout
    this.router.navigate(['/checkout/details']);
  }
}
