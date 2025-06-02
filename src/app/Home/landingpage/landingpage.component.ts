import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { GlobalCompanyComponent } from "../global-company/global-company.component";
import { OpportunitySectionComponent } from "../opportunity-section/opportunity-section.component";
import { ChooseSectionComponent } from "../choose-section/choose-section.component";
import { TestimonialsSectionComponent } from "../testimonials-section/testimonials-section.component";
import { GetStartedSectionComponent } from "../get-started-section/get-started-section.component";
import { FooterSectionComponent } from "../footer-section/footer-section.component";

@Component({
  selector: 'app-landingpage',
  imports: [NavbarComponent, HeroSectionComponent, GlobalCompanyComponent, OpportunitySectionComponent, ChooseSectionComponent, TestimonialsSectionComponent, GetStartedSectionComponent, FooterSectionComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
