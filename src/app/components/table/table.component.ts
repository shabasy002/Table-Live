import { Component, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableHead: Array<any> = [];
  @Input() tableValues: Array<any> = [];
  // tableHead=[
  //   "Name", "Phone Number", "Address", "Use whatsapp"
  // ];
  // tableValues = [
  
  //   {
  //     name: "Arun",
  //     phoneNumber: "7022355615",
  //     address:"Some Address",
  //     useWhatsapp:true
  //   },
  //   {
  //     name: "Akhil",
  //     phoneNumber: "8022355615",
  //     address:"Some Address",
  //     useWhatsapp:false
  //   }
    
  //   ];
    
}