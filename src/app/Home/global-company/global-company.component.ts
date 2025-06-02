import { Component } from '@angular/core';
import { CustomRemoteSectionComponent } from '../../custom/custom-remote-section/custom-remote-section.component';
import { JobBtnsComponent } from '../job-btns/job-btns.component';
@Component({
  selector: 'app-global-company',
  imports: [CustomRemoteSectionComponent, JobBtnsComponent],
  templateUrl: './global-company.component.html',
  styleUrl: './global-company.component.css',
})
export class GlobalCompanyComponent {
  public isjobseekers = false;
  public isemployers = false;

  onemployerActive() {
    this.isemployers = true;
    this.isjobseekers = false
  }
  onjobseekersActive() {
    this.isjobseekers = true;
    this.isemployers = false;
  }
}
