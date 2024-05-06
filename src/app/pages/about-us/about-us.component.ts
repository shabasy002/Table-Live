import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ElectionTableComponent } from '../../components/election-table/election-table.component';
import { ColumnConfiguration } from '../../model/column-configutation';
import { VotersList } from '../../model/voters-list';
import { DisplayStyle } from '../../model/column-configutation';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TableComponent, ElectionTableComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})

export class AboutUsComponent {
  
   ELEMENT_DATA: VotersList[] = [
    { name: 'Arjun', age: 32, phone: 8792424, isWhatsappUser: true, constituency: 'Thiruvanthapuram', isEligibleToVote: true}, 
    { name: 'Ravi', age: 37, phone: 9898764, isWhatsappUser: false, constituency: 'Kollam', isEligibleToVote: true},
    { name: 'Akhil', age: 35, phone: 9998764, isWhatsappUser: true, constituency: 'Kocchi', isEligibleToVote: true},
    { name: 'Nkhil', age: 16, phone: 9998713, isWhatsappUser: false, constituency: 'Kottayam', isEligibleToVote: false}
  ];
  columnConfigurations: Array<ColumnConfiguration> = [ 
    { columnDef: 'name', title: 'Name of Citizen', displayStyle: DisplayStyle.string,   cell:this.ELEMENT_DATA.map(function (user) {
      return user.name;     
  })}, 
     
     { columnDef: 'age', title: 'Age', displayStyle: DisplayStyle.number, cell:this.ELEMENT_DATA.map(function (user) {
      return user.age;  
  })}, 
  { columnDef: 'constituency', title: 'Constituency', hide:true, displayStyle: DisplayStyle.string, cell:this.ELEMENT_DATA.map(function (user) {
    return user.constituency;  
})},
  { columnDef: 'isEligibleToVote', displayStyle: DisplayStyle.boolean,  title: 'Is Eligible To Vote', cell:this.ELEMENT_DATA.map(function (user) {
    return user.isEligibleToVote;  
})},
     { columnDef: 'phone', title: 'Phone', displayStyle: DisplayStyle.number,  cell:this.ELEMENT_DATA.map(function (user) {
      return user.phone;  
  })}
  ];
}
