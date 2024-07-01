import { Component, Output, input, Input, EventEmitter, OnInit, Inject, PLATFORM_ID, DoCheck } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { TempTableComponent } from '../temp-table/temp-table.component';
import {  OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [MatFormField, TempTableComponent, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent implements OnInit, OnDestroy, DoCheck {
  private fromLocalstorage:string='';
  searchForm!: FormGroup;

  // searchForm = new FormGroup({
    
  //   nameFilter1 : new FormControl(this.fromLocalstorage||'')
  // });
  //@Input() public control: any;
  @Output() searchText: string = '';

  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 300; 
  public valueTosend:any;
  @Output() searchEvent = new EventEmitter<string>();
  debouncer: Subject<string> = new Subject<string>();
  
 constructor( @Inject(DOCUMENT) private document: Document,
 @Inject(PLATFORM_ID) private platformId: any, private fb: FormBuilder){
  this.debouncer
       .pipe(debounceTime(300))
       .subscribe((value) => this.searchEvent.emit(value));
 }
 ngDoCheck(): void {
  
 }
 ngOnInit() {
  if  (isPlatformBrowser(this.platformId)) {
    this.searchForm = this.fb.group({
    nameFilter1: [ localStorage.getItem('searchTerm') || ''] // Use an empty string if no value is found
  });
}
else{
  this.searchForm = this.fb.group({
    nameFilter1: [''] // Use an empty string if no value is found
  });
}
 }
 

 ngOnDestroy() {

 }

 getValue(){
  this.valueTosend=(this.searchForm.controls['nameFilter1'].value);
  this.debouncer.next(this.valueTosend);
  //this.searchEvent.emit(this.valueTosend);
 }
 

}
