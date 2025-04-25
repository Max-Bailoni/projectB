import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { AlumniComponent } from './alumni/alumni.component';
import { EventsComponent } from './events/events.component';
import { CareersComponent } from './careers/careers.component';
import { StoriesComponent } from './stories/stories.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'alumni',
        component: AlumniComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'stories',
        component: StoriesComponent
    }
];

