import { Component } from '@angular/core';
import {
  AuthLink,
  NavLink,
  UserInfo,
  logoLink,
} from './shared/header/header.component';
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
    navLinks: [
      { name: 'profile', url: '/user/profile' },
      { name: 'my fornitures', url: '/user/fornitures' },
      { name: 'test', url: 'test' },
    ],
  };
  navlinks: NavLink[] = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'furniture',
      url: '/furniture/list',
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
    logoUrl:
      'https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png',
    name: 'airbn',
    url: '/home',
  };

  constructor(private router: Router) {}
}
