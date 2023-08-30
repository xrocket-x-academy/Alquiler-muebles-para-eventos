import { Component,Input,OnInit } from '@angular/core';
//importo la clase Furniture
import { Furniture } from 'src/app/core/models/furniture';
@Component({
  selector: 'app-card-furniture',
  templateUrl: './card-furniture.component.html',
  styleUrls: ['./card-furniture.component.scss']
})


export class CardFurnitureComponent {
  @Input() furni: Furniture = new Furniture(
    0,
    0,
    '',
    '',
    0,
    0,
    new Date(),
    new Date()
  );
  images: string[] = ['assets/living1.jpg', 'assets/living2.jpg', 'assets/living3.jpg'];
}



// export class CardFurnitureComponent{

// @Input() furniture1: Furniture= new Furniture(1, 1, "Living", "Sillones 3 cuerpos de gabardina blanca",
// 5, 9000, new Date(2023, 7, 2), new Date(2023, 7, 23));

// }

