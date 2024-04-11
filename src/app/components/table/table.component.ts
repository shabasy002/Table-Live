import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'
import { arrayBuffer } from 'stream/consumers';

// export interface UserTable {
//   name: string;
//   phone: number;
//   Address:string;
// }
// const ELEMENT_DATA: UserTable[] = [
//   { name: 'Hydrogen', phone: 1.0079, Address: 'Trivandrum'},
//   { name: 'Oxygen', phone: 2.0079, Address: 'Kollam'}

 
// ];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableHead=[
    "Name", "Phone Number", "Address"
  ];
  tableValues = [
  
    {
      name: "Arun",
      phoneNumber: "7022355615",
      address:"Some Address"
    },
    {
      name: "Akhil",
      phoneNumber: "8022355615",
      address:"Some Address"
    }
    
    ];
    
}