import { Component, OnInit } from '@angular/core';
import { Furniture } from './core/models/furniture';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListFurnitureComponent } from './features/furniture/list-furniture/list-furniture.component';
import { CardFurnitureComponent } from './features/furniture/card-furniture/card-furniture.component';
import { DetailsFurnitureComponent } from './features/furniture/details-furniture/details-furniture.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'santex-academy';
  furnitures: Furniture[] = []; //array vacío
  constructor(private router: Router) {}
//inyecto en la variable http todas las funciones de HttpClient para hacer request de http
// constructor(private http : HttpClient){}

ngOnInit():void{
  //conección al backend
//   this.http.get<Furniture[]>('http://localhost:3000').subscribe((furnitureList:Furniture[])=>{
//       this.furnitures = furnitureList; //guardo en array lo que me devuelve el back
//  });

//Como no tengo conección con el back ingreso 6 objetos al array furnitures
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

