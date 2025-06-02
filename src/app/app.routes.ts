import { Routes } from '@angular/router';
import { LandingpageComponent } from './Home/landingpage/landingpage.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'Homepage',
        pathMatch:'full'
    },
    {
        path:'Homepage',
        component:LandingpageComponent,
        title:'peepuu.com',
    }

];
