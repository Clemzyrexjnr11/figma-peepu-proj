import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() headerText!:string;
@Input() mainText!:string;
@Input() imgPath?:string;
@Input() optcardstyle?:string;
@Input() optheaderstyle?:string;
@Input() optmaintextstyle?:string;
@Input() optimgpathstyle?:string;
@Input() optionalbtmdiv?:string;
}
