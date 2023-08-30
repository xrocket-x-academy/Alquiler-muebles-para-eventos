import { Component } from '@angular/core';
import {
  AuthLink,
  NavLink,
  UserInfo,
  logoLink,
} from './shared/header/header.component';
import { Furniture } from './core/models/furniture';

//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'santex-academy';
  userInfo: UserInfo = {
    isUserLogged: true,
    profileImgUrl:
      'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c22da4223d4282a40e36fec93ba87daf-1547611140034/25a0f27f-8f46-4bf7-ba80-32d7b3085470.png',
    profileUrl: '/user/profile',
    username: 'my username',
    navLinks: [{ name: 'profile', url: '/user/profile' }, {name: 'my fornitures', url: '/user/fornitures'}, {name: 'test', url: 'test'}],
  };
  navlinks: NavLink[] = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'muebles',
      url: '/muebles',
    },
  ];
  authLinks: AuthLink[] = [
    {
      name: 'login',
      url: 'auth/login',
      fillBackground: true,
    },
    {
      name: 'register',
      url: 'auth/register',
      border: true,
    },
  ];
  appLogoUrl: logoLink = {
    logoUrl: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png',
    name: 'airbn',
    url: '/home',
  };
  
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

