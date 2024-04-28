import { Component, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common'
import { arrayBuffer } from 'stream/consumers';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
   @Input() tableHead: Array<any> = [];
   @Input() tableValues: Array<any> = [];

 
   keepOrder = (a:any, b:any) => {
    return a;
  }
  
  
     


}