import { Component } from '@angular/core'; 

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {
  public card_content:any = [
    {
      clientTestimony:' I used to spend hours applying to jobs I wasn\'t qualified for. This platform is different — it only shows roles I can actually get.',
      clientName:'Chidi A.',
      clientOccupation:'Remote Customer Support Rep'
    },
    {
      clientTestimony:' The response time from applicants was unreal. We hired two amazing team members within 72 hours. ',
      clientName:'David T.',
      clientOccupation:'Startup founder (USA)'
    },
  ]
}
