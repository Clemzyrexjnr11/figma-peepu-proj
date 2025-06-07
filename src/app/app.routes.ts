import { Routes } from '@angular/router';
import { LandingpageComponent } from './Home/landingpage/landingpage.component';
import { ResourceComponent } from './ResourcesPage/resource/resource.component';
import { CommunityComponent } from './CommunityPage/community/community.component';
import { BrowseJobsComponent } from './BrowseJobsPage/browse-jobs/browse-jobs.component';
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
    },
    {
        path:'resources',
        component:ResourceComponent,
        title:'peepuu.com/resources'
    },
    {
        path:'community',
        component:CommunityComponent,
        title:'peepuu.com/community'
    },
    {
        path:'browse-jobs',
        component:BrowseJobsComponent,
        title:'peepuu.com/browse-jobs'
    },
    {
        path:'**',
        redirectTo:'Homepage',
    },

];
