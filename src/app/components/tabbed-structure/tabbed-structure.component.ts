import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../../services/api-call.service';
import { response } from 'express';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabbed-structure',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './tabbed-structure.component.html',
  styleUrl: './tabbed-structure.component.scss'
})
export class TabbedStructureComponent implements OnInit{
 public userArray:Array<any>=[];
 public userKeys:Array<any>=[];
 public arrayKeys:Array<any>=[];
 constructor(private api:ApiCallService){
  
 }
  ngOnInit(): void {
    this.api.getPost().subscribe((response)=>{
      
      this.userArray=response;
      this.userKeys=response[0];
    })
   
    this.getuserKeys();
   this.getuserValues();
  }

  getuserKeys():any{
  
    for(var key in this.userArray[0]){
      //console.log(key);
      if (this.arrayKeys.includes(key)) {

      }else{
        this.arrayKeys.push(key)
      }
     
      
    
    }
   return(this.arrayKeys);
  }
  getuserValues():any{
  
   
   return(Object.values(this.userArray));
  }
  typeOf(value:any) :any{
    if(typeof value=== 'object'){
      var cleaned = JSON.stringify(value, null, 2);
      return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
        return match.replace(/"/g, "");
    })
    }else{
      return value;
    }
    
  }
  getUserdetails(N:string): any{
       for(var i=0;i<this.userArray.length-1;i++){
       
        if(this.userArray[i].name===N){
          var addr = JSON.stringify(this.userArray[i].address);
         
          return addr;
        }
          
      }
      
  }
}
