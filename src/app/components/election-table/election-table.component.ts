import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

export interface VotersList {
  name: string;
  age: number;
  phone: number;
  isWhatsappUser: boolean;
  constituency:string;
  isEligibleToVote:boolean;
}

const ELEMENT_DATA: VotersList[] = [
	{ name: 'Arjun', age: 32, phone: 8792424, isWhatsappUser: true, constituency: 'Thiruvanthapuram', isEligibleToVote: true}, 
	{ name: 'Ravi', age: 37, phone: 9898764, isWhatsappUser: false, constituency: 'Kollam', isEligibleToVote: true}
];
function myFunction(){
  
}

interface ColumnConfiguration {
	columnDef: string;
	title: string;
  cell:any;
	//displayStyle: DisplayStyle
}

@Component({
  selector: 'app-election-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule],
  templateUrl: './election-table.component.html',
  styleUrl: './election-table.component.scss'
})
export class ElectionTableComponent implements OnInit {
  columnConfigurations: Array<ColumnConfiguration> = [ 
    { columnDef: 'name', title: 'Name of Citizen', cell:ELEMENT_DATA.map(function (user) {
      return user.name;     
  })}, 
     { columnDef: 'isEligibleToVote', title: 'Is Eligible To Vote', cell:ELEMENT_DATA.map(function (user) {
      return user.isEligibleToVote;  
  })},
     { columnDef: 'age', title: 'Age', cell:ELEMENT_DATA.map(function (user) {
      return user.age;  
  })}, 
     { columnDef: 'phone', title: 'Phone', cell:ELEMENT_DATA.map(function (user) {
      return user.phone;  
  })}
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns: Array<string> = [];

  ngOnInit(): void {
    let val:string="name";
   
    let newArr:Array<VotersList>=ELEMENT_DATA;
    

    //console.log( newArr);
    //console.log(this.myFunction('age'));
    this.displayedColumns = this.columnConfigurations.map((c) => c.columnDef);
  }
}
