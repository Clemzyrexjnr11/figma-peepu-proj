import { Component } from '@angular/core';
import { footerLinks } from '../Footer_Links/links';
@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
  public footerLinks = footerLinks;

}
