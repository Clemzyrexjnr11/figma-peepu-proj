import { Component} from '@angular/core';
import { NavbarComponent } from '../../Home/navbar/navbar.component';
import { HeroSectionComponent } from '../../Home/hero-section/hero-section.component';
@Component({
  selector: 'app-resource',
  imports: [NavbarComponent,HeroSectionComponent],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {
  public hero_list:any = []

  public hero_list_content:any = [
    'You’re not lazy', 'You’re not unqualified', 'You just haven\'t had the right strategy or support.'
  ]
  public card_content:any = [
    {
      maintext:'Premium Remote Job Application Kit',
      subtext:'View Resources',
      color:'text-orange_color'
    },
    {
      maintext:'How to Get a Remote Job Without Experience',
      subtext:'View Resources',
      color:'text-orange_color'

    },
    {
      maintext:'AI Prompts + Email Templates for Job...',
      subtext:'View Resources',
      color:'text-orange_color'
    },
    {
      maintext:'The Ultimate LinkedIn Optimization Guide',
      subtext:'COMING SOON'
    },
    {
      maintext:'Online Portfolio + Website Creation Guide',
      subtext:'COMING SOON'
    },
    {
      maintext:'Interview Prep Masterclass',
      subtext:'COMING SOON'
    },
    {
      maintext:'Full Remote Job Hunting Program',
      subtext:'COMING SOON'
    },
    {
      maintext:'Remote Work Basic Skills Program',
      subtext:'COMING SOON'
    },
    {
      maintext:'Remote Work Advanced Skills Program',
      subtext:'COMING SOON'
    },
    {
      maintext:'Remote Work Tech Stack Program',
      subtext:'COMING SOON'
    },
  ]
}
