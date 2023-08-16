// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-furniture-rental',
//   templateUrl: './furniture-rental.component.html',
//   styleUrls: ['./furniture-rental.component.scss']
// })
// export class FurnitureRentalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class FurnitureRental {
  rentalCode: number;
  idClient: number;
  amount:number;
  rentalDate: Date;
  startDate: Date;
  endDate: Date;

  constructor(
    rentalCode: number,
    idClient: number,
    amount:number,
    rentalDate: Date,
    startDate: Date,
    endDate: Date)
    {
      this.rentalCode = rentalCode;
      this.idClient = idClient;
      this.amount = amount;
      this.rentalDate = rentalDate;
      this.startDate = startDate;
      this.endDate =endDate;
    }

  //métodos a especificar//

  new(){ };

  addDetail(){ };

  calculateAmount(){ };

  getClient() { };

  isExpired(){ };
}

