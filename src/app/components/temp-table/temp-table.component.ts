import { CommonModule } from '@angular/common';
import {Component, Input, OnInit, input,  OnChanges, OnDestroy,SimpleChange, SimpleChanges} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';

import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { Output, EventEmitter } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ColumnConfiguration, RationCardType, SelectedSort } from '../../model/column-configutation';
import { SortOrder } from '../../model/column-configutation';

import { VotersList } from '../../model/voters-list';
import { Observable, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-temp-table',
  standalone: true,
  imports: [MatTableModule, ReactiveFormsModule ,MatFormFieldModule, MatSelectModule, CommonModule, FormsModule, MatCheckboxModule, MatIconModule, MatSortModule],
  templateUrl: './temp-table.component.html',
  styleUrl: './temp-table.component.scss'
})
export class TempTableComponent implements OnChanges {

  //public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  @Input({ required: true })
  public columnConfigs: Array<ColumnConfiguration> = [];
  @Input({ required: true }) 
  public dataSource: Array<any> = [];
sortedData: Array<any> = [];

private selectedSortOrder?:SelectedSort;
public filterFields: Array<any> = [];
public filter = new FormControl(["name", "age", "phone", "rationCardType", "isEligibleToVote"]);

constructor() {
  
  

}


protected filterMethod(value:string, $event:any){
  
  
  let selctedOrnot=$event.currentTarget.getAttribute("aria-selected");
  let optionValue=value;
  if(selctedOrnot==="true"){
        
  this.columnConfigs.forEach(function(item) {
    if(item.columnDef===optionValue){
      item.hide=true;
    }
});
  }else{
    this.columnConfigs.forEach(function(item) {
      if(item.columnDef===optionValue){
        item.hide=false;
      }
  });
  }
}
protected getColumnsToDisplayForSelect(): ColumnConfiguration[] {

  const filtered = this.columnConfigs.filter(x => x.columnDef !== "");
 
  return filtered;
}
   protected getColumnsToDisplay(): ColumnConfiguration[] {

    const filtered = this.columnConfigs.filter(x => x.hide !== true);
   
    return filtered;
  }
  protected getDataForKeyFromRow(row: Object): any {
    //console.log(row);
    return row as any;
  }
public getSample():any{
    const sampleUnfiltered=this.columnConfigs.filter(x => x.hide !== true);
    console.log(this.dataSource);
    return [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  protected isCurrentSortOrder(fieldName:string, sortOrder:SortOrder):boolean{
    return fieldName===this.selectedSortOrder?.columnDef && sortOrder===this.selectedSortOrder.order;
     
  }
  protected sortData($event: any, fieldName:string, sortOrder:SortOrder) {
    const data = this.dataSource.slice();
    //console.log(this.sortedData);
    this.selectedSortOrder={columnDef:fieldName, order:sortOrder};
    if(sortOrder === 'ASC'){
      //console.log($event.srcElement);
       this.sortedData=data.sort((a, b) => b[fieldName] > a[fieldName]? 1 : -1);
    }else{
      this.sortedData=data.sort((a, b) => a[fieldName] > b[fieldName]? 1 : -1);
    }
    
    //console.log(this.sortedData);
    this.dataSource.length=0;
    this.sortedData.forEach((x,i)=>{
      this.dataSource.push(x) ;    
    })
    console.log(this.dataSource);
    
  }
  
}




