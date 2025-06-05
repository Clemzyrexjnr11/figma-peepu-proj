import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { homepage_navlink } from './navlinks';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
 public homepage_navlink = homepage_navlink;

  @Input() style: any = {};
}
