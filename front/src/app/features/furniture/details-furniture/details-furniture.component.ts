import { Component, Input, OnInit, NgModule } from '@angular/core';
import { Route } from '@angular/router';

import { Furniture } from 'src/app/core/models/furniture';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from 'src/app/core/services/furniture.service';

@Component({
  selector: 'app-details-furniture',
  templateUrl: './details-furniture.component.html',
  styleUrls: ['./details-furniture.component.scss']
})

export class DetailsFurnitureComponent implements OnInit {
  furniture: Furniture;

  constructor(private router: ActivatedRoute, private furnitureService: FurnitureService) {} // Inyectamos el servicio  en el constructor de nuestro componente

  indice: number =  0;
     fotos: string[] = [
    '../assets/living1.jpg',
    '../assets/living2.jpg',
    '../assets/living3.jpg',
    '../assets/living1.jpg',
    '../assets/living2.jpg'
  ];
  available: boolean; 
  ngOnInit(): void {

    this.indice = this.router.snapshot.params ['id'];
    this.furnitureService.getById(this.indice).subscribe(data => {
    this.furniture = data;
    });
    this.furnitureService.updateAvailability( this.indice,this.available).subscribe(data => {
      
      this.available = data.isAvailable();
      
    });
    }
}
