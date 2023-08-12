import { Component } from '@angular/core';
import { AuthLink, NavLink } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'santex-academy';
  navlinks: NavLink[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'muebles',
      url: '/muebles'
    },
  ]
  authLinks: AuthLink[] = [{
    name: 'login',
    url: 'auth/login',
    fillBackground: true
  },
  {
    name: 'register',
    url: 'auth/register',
    border: true
  }]
}
