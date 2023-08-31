import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { Furniture } from 'src/app/core/models/furniture';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-furniture',
  templateUrl: './details-furniture.component.html',
  styleUrls: ['./details-furniture.component.scss']
})
export class DetailsFurnitureComponent implements OnInit {

  constructor(private router: ActivatedRoute) {} // Inyectamos el servicio  en el constructor de nuestro componente
  indice: number =  0;
  indiceVendedor: number=0;
  nombre: string='';
  descripcion:string='';
  cantidad:number=0;
  precio: number =0;
  startFecha: Date = new Date();
  endFecha: Date= new Date();

  fotos: string[] = [
    '../assets/living1.jpg',
    '../assets/living2.jpg',
    '../assets/living3.jpg',
    '../assets/living1.jpg',
    '../assets/living2.jpg'
    // Agrega más URLs de fotos aquí
  ];


  ngOnInit(): void {

    this.indice = this.router.snapshot.params ['id'];
    this.indiceVendedor = this.router.snapshot.params ['idOwner'];
    this.nombre = this.router.snapshot.params ['name'];
    this.descripcion = this.router.snapshot.params ['description'];
    this.cantidad = this.router.snapshot.params ['stock'];
    this.precio = this.router.snapshot.params ['price'];
    this.startFecha = this.router.snapshot.params ['startDate'];
    this.endFecha = this.router.snapshot.params ['endDate'];

    // let furnitureencontrado : Furniture = this.furnitureService.encontrarMueble(this.indice); // no lo tengo

  }


}
