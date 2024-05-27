import { Component, Input } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TempTableComponent } from '../../components/temp-table/temp-table.component';

import { ElectionTableComponent } from '../../components/election-table/election-table.component';
import { ColumnConfiguration } from '../../model/column-configutation';
import { VotersList } from '../../model/voters-list';
import { DisplayStyle } from '../../model/column-configutation';
import { RationCardType } from '../../model/column-configutation';
import { Observable, from, of } from 'rxjs';

import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TableComponent, ElectionTableComponent, TempTableComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})

export class AboutUsComponent  {
   
  @Output() dataSource: Array<any> = [];
  defaultSort="name";
   ELEMENT_DATA: VotersList[] = [
    { name: 'Arjun', age: 32, phone: 8792424, isWhatsappUser: true, constituency: 'Thiruvanthapuram', isEligibleToVote: true, rationCardType: RationCardType.White}, 
    { name: 'Ravi', age: 37, phone: 9898764, isWhatsappUser: false, constituency: 'Kollam', isEligibleToVote: true, rationCardType: RationCardType.Blue},
    { name: 'Akhil', age: 35, phone: 9998764, isWhatsappUser: true, constituency: 'Kochi', isEligibleToVote: true},
    { name: 'Nkhil', age: 16, phone: 9998713, isWhatsappUser: false, constituency: 'Kottayam', isEligibleToVote: false}
  ];
 
   columnConfigurations: Array<ColumnConfiguration> = [ 
    { columnDef: 'name', title: 'Name of Citizen',  sortable:true, displayStyle: DisplayStyle.string     
  }, 
     
     { columnDef: 'age', title: 'Age', sortable:true, displayStyle: DisplayStyle.number
  }, 
  { columnDef: 'constituency', title: 'Constituency', hide:true, displayStyle: DisplayStyle.string 
},
{ columnDef: 'rationCardType', displayStyle: DisplayStyle.string,  title: 'Ration card type'  
},
  { columnDef: 'isEligibleToVote', displayStyle: DisplayStyle.boolean,  title: 'Is Eligible To Vote'
},
     { columnDef: 'phone', title: 'Phone', displayStyle: DisplayStyle.number  
  }
  ];
  @Input()
  newArr: VotersList[] = [];
  ngOnChanges() {
  
  }
  constructor() {
         
  }
}
