import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
 
  tableHead=[
    "Name", "Phone Number", "Network Name", "Address", "Use whatsapp"
  ];
  tableValues = [
 
   {
     name: "Nikhil",
     phoneNumber: "9022355615",
     networkName: "Jio",
     address:"Some Address",
     useWhatsapp:false
   },
   {
     name: "Varun",
     phoneNumber: "6022355615",
     networkName: "ACT",
     address:"Some Address",
     
     useWhatsapp:false
   },
   {
    name: "Charan",
    phoneNumber: "6022355615",
    networkName: "Airtel",
    address:"Some Address",
    
    useWhatsapp:true
  },
   
   ];
}
