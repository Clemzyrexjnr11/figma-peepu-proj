import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-job-btns',
  imports: [],
  templateUrl: './job-btns.component.html',
  styleUrl: './job-btns.component.css',
})
export class JobBtnsComponent {
  @Output() jobseekersactive = new EventEmitter();
  @Output() employersactive = new EventEmitter();
  @ViewChild('jobseekers') jobSeekers!: ElementRef<HTMLButtonElement>;
  @ViewChild('employers') employers!: ElementRef<HTMLButtonElement>;
  ngOnInit() {
    this.jobseekersactive.emit();
  }
  onClickJobSeekers() {
    this.employers.nativeElement.classList.remove('active');
    this.jobSeekers.nativeElement.classList.add('active');
    this.jobseekersactive.emit();
  }
  onClickEmployers() {
    this.jobSeekers.nativeElement.classList.remove('active');
    this.employers.nativeElement.classList.add('active');
    this.employersactive.emit();
  }
}
