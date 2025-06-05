import { Component } from '@angular/core';
import { NavbarComponent } from "../../Home/navbar/navbar.component";
import { HeroSectionComponent } from "../../Home/hero-section/hero-section.component";
import { ButtonComponent } from "../../custom/button/button.component";

@Component({
  selector: 'app-community',
  imports: [NavbarComponent, HeroSectionComponent, ButtonComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
   public comm_card_content:any = [
    {
      header:'Inside the Community, You\'ll Get:',
    },
    {
      header:'Step-by-Step Remote Job Hunting Curriculum',
      subtext:'No fluff. No theory. Just a clear path from "no job" to "remote role secured."',
      imgPath:'images/down_arrow.png'
    },
    {
      header:'Premium Resource Vault',
      subtext:'Immediate access to exclusive templates, frameworks, and mini-trainings not publicly available elsewhere.',
      imgPath:'images/down_arrow.png'
    },
    {
      header:'Weekly Coaching & Strategy Calls',
      subtext:'Get advice fast. Ask questions, get live feedback, and follow a focused weekly game plan.',
      imgPath:'images/down_arrow.png'
    },
    {
      header:'Private Member Forum + Peer Support',
      subtext:'You\'re not alone. Get accountability, celebrate wins, and share leads with others on the same path.',
      imgPath:'images/down_arrow.png'

    },
    {
      header:'Remote Job Alerts + Application Reviews',
      subtext:'We don\'t just coach—we help you act. Submit your CVs for review, get role suggestions, and tighten your game.',
      imgPath:'images/down_arrow.png'
    },
   ]
}
