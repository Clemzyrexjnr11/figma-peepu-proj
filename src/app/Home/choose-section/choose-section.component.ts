import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-section',
  imports: [],
  templateUrl: './choose-section.component.html',
  styleUrl: './choose-section.component.css'
})
export class ChooseSectionComponent {
 public grid_content:Array<any> = [
  {
  img:'images/nike-check.png',
  content: 'Access to a fast-growing pool of job-ready African professionals'
  },
  {
  img:'images/nike-check.png',
  content: 'Jobs go live in minutes and receive quality applications within hours'
  },
  {
  img:'images/nike-check.png',
  content: 'High English proficiency, strong cultural alignment, excellent remote work ethic'
  }
]
}
