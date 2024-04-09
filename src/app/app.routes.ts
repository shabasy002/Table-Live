import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import {TableComponent} from '../app/components/table/table.component';

export const routes: Routes = [

    {
        path: '',
        component: TableComponent
    }
];
