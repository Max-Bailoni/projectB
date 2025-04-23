import { Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "alumni/:id", component: AlumniComponent }

];