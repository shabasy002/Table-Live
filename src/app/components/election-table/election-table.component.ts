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
  @Output() arraySource: Array<any> = [];
  sortedData: VotersList[] | any;
  dataSource:Array<any>=[];
  newVar:Array<any>=[];
  
 

 
  ngOnInit(): void {
    //this.newVar===(Object.keys(this.ELEMENT_DATA[0]));
    this.newVar=Object.assign([], Object.keys(this.ELEMENT_DATA[0]));
    //console.log(this.newVar);
    for(let i=1;i<this.newVar.length;i++){
      
      let tempvar:any=this.newVar[i];
      //console.log(this.ELEMENT_DATA[i].this.newVar[i])
    }
  }
  getValue (objName:any, i:any){
   // console.log(objName[i].newVar[i]);
 }
  sort(val: any) {
    //alert(val);
    this.arraySource=[];
   this.ELEMENT_DATA ===(this.ELEMENT_DATA.sort((a, b) => a[val] > b[val] ? 1 : a[val] < b[val] ? -1 : 0));
   this.ELEMENT_DATA.forEach(val => this.arraySource.push(Object.assign({}, val)));
    console.log(this.arraySource)
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
        switch (sort.active) {
          case 'name': return compare(a.name, b.name, isAsc);
          case 'age': return compare(a.age, b.age, isAsc);
          default: return 0;
        }
      });
}

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


