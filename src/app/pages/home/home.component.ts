import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../../services/api-call.service';
import { HightlightDirective } from '../../custom-directives/hightlight.directive';
import { response } from 'express';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, HightlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public newArray: Array<any> = [];

  constructor(private api:ApiCallService){
      
  }
  ngOnInit(): void {
    this.api.getPost().subscribe((response)=>{
      //console.log(response);
      this.newArray=response;
    })
    console.log(this.newArray);
  }
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
