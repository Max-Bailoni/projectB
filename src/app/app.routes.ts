import { Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "alumni/:id", component: AlumniComponent },
    { path: "careers", component: CareersComponent },
    {path: "footer", component: FooterComponent},
];