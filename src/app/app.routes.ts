import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import {TableComponent} from '../app/components/table/table.component';
import {HomeComponent} from '../app/pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [

    {
        path: 'about',
        component: AboutUsComponent
    },
    
    {
        path: '',
        component: HomeComponent
    }
];
