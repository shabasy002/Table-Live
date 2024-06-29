import { Component, Output, input, Input, EventEmitter, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TempTableComponent } from '../temp-table/temp-table.component';
import {  OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [MatFormField, TempTableComponent, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  searchForm = new FormGroup({
    nameFilter1 : new FormControl("")
  });
  @Input() public control: any;
  @Output() searchText: string = '';

  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 300; 
  

  public valueTosend:any;
  @Output() searchEvent = new EventEmitter<string>();
   debouncer: Subject<string> = new Subject<string>();
  
 constructor(){
  this.debouncer
       .pipe(debounceTime(0))
       .subscribe((value) => this.searchEvent.emit(value));
 }
 ngOnInit() {

 }

 ngOnDestroy() {

 }
 nothing(){

 }
 getValue(){
  this.valueTosend=(this.searchForm.controls['nameFilter1'].value);
  this.debouncer.next(this.valueTosend);
  //this.searchEvent.emit(this.valueTosend);
 }
 

}
