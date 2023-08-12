import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface NavLink {
  name: string;
  url: string;
}
export interface AuthLink extends NavLink {
  border?: boolean;
  fillBackground?: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() navLinks: NavLink[] = []
  @Input() authLinks: AuthLink[] = []
  @Input() isUserLogged: boolean = false;
}
