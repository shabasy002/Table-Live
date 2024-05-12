import { CommonModule } from '@angular/common';
import {Component, Input, OnInit, input} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';

import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { Output, EventEmitter } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ColumnConfiguration } from '../../model/column-configutation';
import { VotersList } from '../../model/voters-list';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-election-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, MatCheckboxModule, MatIconModule, MatSortModule],
  templateUrl: './election-table.component.html',
  styleUrl: './election-table.component.scss'
})

export class ElectionTableComponent implements OnInit {
  @Input() columnConfigurations: Array<ColumnConfiguration> = [];
  @Input() ELEMENT_DATA: Array<any> = [];
  @Input() defaultSort: string='';
  @Output() arraySource: Array<any> = [];
  sortedData: VotersList[] | any;
  dataSource:Array<any>=[];
 
  
 

 
  ngOnInit(): void {
    //this.sortData(name:any);
    //  console.log(this.defaultSort);
    this.sortData({active: this.defaultSort, direction: "asc"})
  }
 
  
    
  
     
      
   
    constructor() {
      
      this.sortedData = this.ELEMENT_DATA.slice();
      
      
    }
    
    sortData(sort: Sort) {
      const data = this.ELEMENT_DATA.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        return compare(a[sort.active], b[sort.active], isAsc);
        
         
      });
}

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


