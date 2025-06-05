import { Component } from '@angular/core';
import { CustomRemoteSectionComponent } from '../../custom/custom-remote-section/custom-remote-section.component';
import { JobBtnsComponent } from '../job-btns/job-btns.component';

type contentModel = {
  header: string;
  sub_text: string;
  list: Array<string>;
  comment: string;
  btnlink_content: string;
  imagePath: string;
};

@Component({
  selector: 'app-global-company',
  imports: [CustomRemoteSectionComponent, JobBtnsComponent],
  templateUrl: './global-company.component.html',
  styleUrl: './global-company.component.css',
})
export class GlobalCompanyComponent {
  public isjobseekers = false;
  public isemployers = false;


  public jobseekers_content: contentModel = {
    header:
      "You Want to Work Remotely for a Global Company? You're in the Right Place.",
    sub_text:
      'Everyday, thousands of Nigerians search for jobs online — and end up on not being eligible or on fake platforms with ghost listings. We built this platform to change that.',
    list: [
      'Only international remote jobs open to Nigerians',
      'Filter jobs by role, skill, or experience level',
      'No Scam — real jobs from real global companies',
      'Remote job hunting resources, active community, resume tools & interview preps',
    ],
    comment:
      "Whether you're into tech, writing, customer service, product design, or admin — the world is hiring",
    btnlink_content: 'Browse Remote Jobs',
    imagePath: 'images/remote-image.png',
  };

  public employers_content: contentModel = {
    header: 'Build Your Global Team with Nigerian Talent',
    sub_text:
      'You’ve hired talent before. Now, hire from one of the most driven, skilled, and resilient workforces in the world.We help you reach a pipeline of 50,000+ Nigerian professionals ready to work remotely.',
    list: [
      'Access to a fast-growing pool of job-ready African professionals',
      'Jobs go live in minutes and receive quality applications within hours',
      'High English proficiency, strong cultural alignment, excellent remote work ethic',
    ],
    comment:
      "Whether you're hiring a support agent or a product designer, Africa's next best hire is here.",
    btnlink_content: 'Post a Job',
    imagePath: 'images/astronaut.jpg',
  };

  onemployerActive() {
    this.isemployers = true;
    this.isjobseekers = false;
  }
  onjobseekersActive() {
    this.isjobseekers = true;
    this.isemployers = false;
  }
}
