export class Furniture {
  id: number;   //ver, creo que corresponde poner esa propiedad
  idOwner: number; //ver, creo que también corresponde
  name:string;
  description: string;
  stock: number;
  price: number;
  startDate: Date;
  endDate: Date;

  constructor(
    id: number,
    idOwner : number,
    name:string,
    description: string,
    stock: number,
    price: number,
    startDate: Date,
    endDate: Date)
    {
    this.id = id;
    this.idOwner = idOwner;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.startDate = startDate,
    this.endDate = endDate

  }
  //métodos a especificar//

  new(){ };

  setStock(){ };

  getOwner(){ };

  setPrice() { };

  isAvailable(){ };
}


// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-furniture',
//   templateUrl: './furniture.component.html',
//   styleUrls: ['./furniture.component.scss']
// })
// export class FurnitureComponent implements OnInit {
//   id: number;
//   idOwner : number,
//   idOwner = number;
//   name:string;
//   description: string;
//   stock: number;
//   price: number;
//   startDate: Date;
//   endDate: Date;

//   constructor(
//        id: number;
//        idOwner : number,
//        name:string,
//        description:string,
//        stock: number,
//        price:number,
//        startDate:Date,
//        endDate:Date)
//       {
//        this.id = id;
//        this.idOwner = idOwner;
//        this.name = name;
//        this.description = description;
//        this.stock = stock;
//        this.price = price;
//        this.startDate = startDate;
//        this.endDate = endDate;
//      }

//   ngOnInit(): void {
//   }

// }


