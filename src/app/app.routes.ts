import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { StoriesComponent } from './stories/stories.component';
import { CareersComponent } from './careers/careers.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "alumni", component: AlumniComponent },
    { path: "stories", component: StoriesComponent },
    { path: "careers", component: CareersComponent },
    { path: "events", component: EventsComponent },
];