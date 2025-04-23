import { Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: "alumni", component: AlumniComponent},
    {path: "careers", component: CareersComponent },
    {path: "home", component: HomeComponent}

];
