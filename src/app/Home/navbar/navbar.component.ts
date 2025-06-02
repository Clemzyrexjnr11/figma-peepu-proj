import { Component,inject,Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router)
   onNavigateResource(){
   this.router.navigate(['resources'], {replaceUrl:true})
   }
   @Input() optnavstyle?:string;
}
