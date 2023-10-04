import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
export interface NavLink {
  name: string;
  url: string;
}
export interface AuthLink extends NavLink {
  border?: boolean;
  fillBackground?: boolean;
}
export interface UserInfo {
  username: string | null;
  profileImgUrl: string | null;
  profileUrl: string | null;
  isUserLogged: boolean;
  navLinks: NavLink[]
}
export interface logoLink extends NavLink {
  logoUrl: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() navLinks: NavLink[] = [];
  @Input() authLinks: AuthLink[] = [];
  @Input() logoLink: logoLink = { name: 'Home', url: '/', logoUrl: '' };
  
  
  @Input () userInfo: UserInfo = {
    username: null,
    profileImgUrl: null,
    profileUrl: null,
    isUserLogged: false,
    navLinks: [],
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser().subscribe((user) => {
      if (user) {
        this.userInfo = {
          username: user.username,
          profileImgUrl: null,
          profileUrl: null,
          isUserLogged: true,
          navLinks: [], //links para usuario logueado editar con las rutas
        };
      } else {
        this.userInfo = {
          username: null,
          profileImgUrl: null,
          profileUrl: null,
          isUserLogged: false,
          navLinks: [], //links para usuario sin loguear editar con las rutas
        };
      }
    });
  }
  DropDownState = false;

  toggleDropDown() {
    this.DropDownState = !this.DropDownState;
  }
}
