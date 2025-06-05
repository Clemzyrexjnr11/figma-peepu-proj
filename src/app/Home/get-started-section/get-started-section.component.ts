import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started-section',
  imports: [],
  templateUrl: './get-started-section.component.html',
  styleUrl: './get-started-section.component.css'
})
export class GetStartedSectionComponent {
  public card_content:any = [
    {
      header:'I\'m a Job Seeker',
      sub_text:' Find remote jobs with real pay, real employers, and zero relocation required ',

    },
    {
      header:'I\'m an Employer',
      sub_text:'Post a role and hire from a growing pipeline of Nigeria\'s top professionals.',

    },
  ]
}
