import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../../custom/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials-section',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {

}
