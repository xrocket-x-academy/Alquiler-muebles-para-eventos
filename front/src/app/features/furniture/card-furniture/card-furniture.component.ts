import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
//importo la clase Furniture
import { Furniture } from 'src/app/core/models/furniture';

@Component({
  selector: 'app-card-furniture',
  templateUrl: './card-furniture.component.html',
  styleUrls: ['./card-furniture.component.scss']
})
export class CardFurnitureComponent implements OnInit {

furnitures: Furniture[] = []; //array vacío

//inyecto en la variable http todas las funciones de HttpClient para hacer request de http
  constructor(private http : HttpClient){
  }

  ngOnInit():void{
    //conección al backend
    this.http.get<Furniture[]>('http://localhost:3000').subscribe((furnitureList:Furniture[])=>{
        this.furnitures = furnitureList; //guardo en array lo que me devuelve el back
   });
   //creo el objeto furniture1 con datos que todavía no tengo del back
      const furniture1 = new Furniture(1, 1, "Living", "Sillones 3 cuerpos de gabardina blanca",
      5, 9000, new Date(2023, 7, 2), new Date(2023, 7, 23));
    //agrego el objeto al array
      this.furnitures.push(furniture1);

    }
}

