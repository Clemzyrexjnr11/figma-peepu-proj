import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-custom-remote-section',
  imports: [],
  templateUrl: './custom-remote-section.component.html',
  styleUrl: './custom-remote-section.component.css',
})
export class CustomRemoteSectionComponent {
  @Input() headerText!: string;
  @Input() sub_headerText!: string;
  @Input() list!: Array<string>;
  @Input() comment!: string;
  @Input() btnlink_content!: string;
  @Input() imagePath!: string;
  @Input() imagestyle?:string;
  @Input() extrabtnstyle?:string;
}
