import { Component, Output, input, Input, EventEmitter } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TempTableComponent } from '../temp-table/temp-table.component';
@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [MatFormField, TempTableComponent, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  
  @Input() public control: any;
  @Output() searchText: string = '';
  public nameFilter = new FormControl("");
  public valueTosend:any;
  @Output() searchEvent = new EventEmitter<any>();
 constructor(){
  
 }

 getValue($event:any){
  this.valueTosend=(this.nameFilter.value);
  this.searchEvent.emit(this.valueTosend);
 }
 

}
