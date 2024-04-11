import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   tableHead=[
     "Name", "Phone Number", "Address", "Use whatsapp"
   ];
   tableValues = [
  
    {
      name: "Arun",
      phoneNumber: "7022355615",
      address:"Some Address",
      useWhatsapp:true
    },
    {
      name: "Akhil",
      phoneNumber: "8022355615",
      address:"Some Address",
      useWhatsapp:false
    }
    
    ];
}
