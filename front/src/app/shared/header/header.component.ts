import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
export class HeaderComponent {
  @Input() navLinks: NavLink[] = [];
  @Input() authLinks: AuthLink[] = [];
  @Input() logoLink: logoLink = { name: 'Home', url: '/', logoUrl: '' };
  @Input() userInfo!: UserInfo;

  DropDownState = false;

  toggleDropDown() {
    this.DropDownState = !this.DropDownState;
  }
}
