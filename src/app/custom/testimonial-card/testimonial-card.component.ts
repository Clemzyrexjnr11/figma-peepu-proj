import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {
@Input() clientTestimony!:string;
@Input() clientName!:string;
@Input() clientOccupation!:string;
@Input() cardStyles?:string;
}
