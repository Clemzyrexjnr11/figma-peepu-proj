import { Component } from '@angular/core';
import { NavbarComponent } from '../../Home/navbar/navbar.component';
import { ResourceHeroComponent } from "../resource-hero/resource-hero.component";
import { RemoteCareerComponent } from "../remote-career/remote-career.component";
@Component({
  selector: 'app-resource',
  imports: [NavbarComponent, ResourceHeroComponent, RemoteCareerComponent],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {

}
