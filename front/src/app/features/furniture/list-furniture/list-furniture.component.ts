import { Furniture } from 'src/app/core/models/furniture';

import { CardFurnitureComponent } from '../card-furniture/card-furniture.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent implements OnInit {
  @Input() furnitures: any[];
  constructor() {
    this.furnitures = [];
  }

  ngOnInit(): void {
    // cambiar esta implementacion por llamadas al furnitureService
    this.mockFurnitures();
  }

  // MÉTODO QUE AGREGA LO QUE ANTES SE HACIA EN APP COMPONENT
  private mockFurnitures(): void {
    // Como no tengo conección con el back ingreso 6 objetos al array furnitures
    const furniture1= new Furniture(1, 1, "Living", "Sillones 3 cuerpos de gabardina blanca",
      5, 9000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture1);

    const furniture2= new Furniture(2, 1, "Mesas", "Mesa de pino tamaño 1m", 4, 5000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture2);

    const furniture3= new Furniture(3, 1, "Sillas", "Sillas de pino", 12, 4000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture3);

    const furniture4= new Furniture(4, 1, "Gacebos", "Gacebos blancos", 5, 10000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture4);

    const furniture5= new Furniture(5, 1, "Vajilla", "juego compuesto de 12 cuchillos y 12 tenedores", 20, 7000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture5);

    const furniture6= new Furniture(6, 1, "Sillasplásticas", "Sillas plástcias blancas reforzadas", 10, 3000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture6);

    const furniture7= new Furniture(7, 1, "Gacebos", "Gacebos blancos", 5, 10000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture7);

    const furniture8= new Furniture(8, 1, "Vajilla", "juego compuesto de 12 cuchillos y 12 tenedores", 20, 7000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture8);

    const furniture9= new Furniture(9, 1, "Sillasplásticas", "Sillas plástcias blancas reforzadas", 10, 3000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    this.furnitures.push(furniture9);
  }
}



