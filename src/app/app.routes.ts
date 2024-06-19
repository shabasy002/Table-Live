import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import {TableComponent} from '../app/components/table/table.component';
import {HomeComponent} from '../app/pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminModule } from './admin/admin.module';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';

export const routes: Routes = [

    {
        path: 'about',
        loadComponent:()=>import('./pages/about-us/about-us.component').then((comp=>comp.AboutUsComponent))
        //component: AboutUsComponent
    },
    {
        path: 'rxjs',
        //loadComponent:()=>import('./components/rxjs-learning/rxjs-learning.component').then((comp=>comp.RxjsLearningComponent))
        component: RxjsLearningComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    
    {
        path: 'admin',
        loadChildren:()=>import('./admin/admin.module').then((mod=>mod.AdminModule))
    }
    
];
