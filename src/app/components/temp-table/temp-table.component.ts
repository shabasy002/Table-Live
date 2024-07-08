import { CommonModule, DOCUMENT, isPlatformBrowser  } from '@angular/common';
import {Component, Input, OnInit, input,  OnChanges, OnDestroy,SimpleChange, SimpleChanges, DoCheck, AfterContentInit, Inject, PLATFORM_ID} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { HightlightDirective } from '../../custom-directives/hightlight.directive';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { filter, toArray } from 'rxjs/operators';
import { ObsToArrayService } from '../../services/obs-to-array.service';
import { TableModule } from 'primeng/table'; 

import {MatIconModule} from '@angular/material/icon';
import { Output, EventEmitter } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ColumnConfiguration, RationCardType, SelectedSort } from '../../model/column-configutation';
import { SortOrder } from '../../model/column-configutation';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { VotersList } from '../../model/voters-list';
import { Observable, from, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-temp-table',
  standalone: true,
  imports: [MatTableModule, TableModule, SearchFieldComponent, HightlightDirective, ReactiveFormsModule ,MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule, MatCheckboxModule, MatIconModule, MatSortModule],
  templateUrl: './temp-table.component.html',
  styleUrl: './temp-table.component.scss'
})
export class TempTableComponent implements AfterContentInit ,DoCheck, OnInit, OnChanges {
  public columnConfigs: Array<ColumnConfiguration> = [];
  @Input({required:true})
  public dataSource$!:Observable<any>;
  @Input({required:true})
  public columnConfigs$!:Observable<ColumnConfiguration>;

public sortedData: Array<any> = [];
public SearchDataValue:Array<any>=[];
private selectedSortOrder?:SelectedSort;
public filterFields: Array<any> = [];
public filterNames:Array<any>=[];
public filter = new FormControl(this.filterFields);
//public nameFilter = new FormControl("");
public taskTypes : Array<any>=[];
public selected: string | undefined;
searchEvent: string='';

 
constructor( private obstoArrayservice:ObsToArrayService, @Inject(DOCUMENT) private document: Document,
@Inject(PLATFORM_ID) private platformId: any) {
 
  
}

ngDoCheck(): void {
  if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('searchTerm', this.searchEvent);
   

  }
 
  }
ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
     let searchTerm=(localStorage.getItem('searchTerm'));
     if(searchTerm){
      this.getDatafrom(searchTerm);
      
     }
  }

  this.obstoArrayservice.convertObservableToArray(this.columnConfigs$).subscribe(data=> {
    this.columnConfigs = data;
    
  });
  this.obstoArrayservice.convertObservableToArray(this.dataSource$).subscribe(data=> {
    this.SearchDataValue = data;
   
  });
  
  //   if( this.SearchDataValue.includes(x)){
      
  //   }else{
  //     this.SearchDataValue.push(x)
  //   }
  // });
  // this.columnConfigs$.subscribe(x => {
  //   if( this.columnConfigs.includes(x)){
      
  //   }else{
  //     this.columnConfigs.push(x)
  //   }
  // });
}

ngOnChanges(changes: SimpleChanges): void {
  
  
}

ngAfterContentInit(): void {
 
}
protected getDatafrom(e:string){
  this.searchEvent=e;
  
}
protected inputChange(event:any){
  
  const tempColumnconfig = this.columnConfigs.slice();
  
  for(let i=0;i<=this.filterFields.length-1;i++){
    let fetching = this.columnConfigs.filter(x => x.columnDef === this.filterFields[i]);
    if (event.indexOf(this.filterFields[i]) == -1){
          fetching[0].hide=true;
        }else{
          fetching[0].hide=false;
    }
  }

}

protected getColumnsToDisplayForSelect(): ColumnConfiguration[] {

  const filtered = this.columnConfigs.filter(x => x.columnDef !== "");
  filtered.forEach((x,i)=>{
    this.filterFields.push(x.columnDef) ;    
  })
 
  return filtered;
}
   protected getColumnsToDisplay(optionalName?: any): ColumnConfiguration[] {
    if (typeof optionalName === "undefined") {
      
      const filteredTemp = this.columnConfigs$.pipe(filter(x => x.hide !== true));
      filteredTemp.subscribe(x => {
        if( this.columnConfigs.includes(x)){
          
        }else{
          this.columnConfigs.push(x)
        }
      });
      
      const filtered = this.columnConfigs.filter(x => x.hide !== true);
      return filtered;
    }else{
      const rowSearch=this.SearchDataValue.filter(x => x.name.match(optionalName));
      return rowSearch;
    }
  }

  protected getrowtoDisplay(v?:any): any {

    let value = (this.searchEvent);
  
    if (value) {
      var rowFiltered = this.SearchDataValue.filter(x => (x.name.toLowerCase()).match(value.toLowerCase()) && x.hide !==true );
    } else {
      var rowFiltered = this.SearchDataValue.filter(x => x.hide !== true);

    }
    return rowFiltered;
    //console.log(this.SearchDataValue);

  }
  
 
 
  protected isCurrentSortOrder(fieldName:string, sortOrder:SortOrder):boolean{
    return fieldName===this.selectedSortOrder?.columnDef && sortOrder===this.selectedSortOrder.order;
     
  }
  protected sortData($event: any, fieldName:string, sortOrder:SortOrder) {
    
    const data = this.SearchDataValue.slice();
    
    this.selectedSortOrder={columnDef:fieldName, order:sortOrder};
    if(sortOrder === 'ASC'){
     
       this.sortedData=data.sort((a, b) => b[fieldName] > a[fieldName]? 1 : -1);
    }else{
      this.sortedData=data.sort((a, b) => a[fieldName] > b[fieldName]? 1 : -1);
    }
    
    
    this.SearchDataValue.length=0;
    this.sortedData.forEach((x,i)=>{
      this.SearchDataValue.push(x) ;   
      
    })
   
   
    
  }
  
}




