import { CommonModule } from '@angular/common';
import {Component, Input, OnInit, input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {ColumnConfiguration} from '../../model/column-configutation'
import {VotersList} from '../../model/voters-list'







@Component({
  selector: 'app-election-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule],
  templateUrl: './election-table.component.html',
  styleUrl: './election-table.component.scss'
})

export class ElectionTableComponent implements OnInit {
  @Input() columnConfigurations: Array<any> = [];
  @Input() ELEMENT_DATA: Array<any> = [];
  //dataSource = this.ELEMENT_DATA;
  displayedColumns: Array<string> = [];
  property:number = 0;
  
   increment_property(): void{
    this.property++;
  }
  ngOnInit(): void {
    let val:string="name";
   
    //let newArr:Array<VotersList>=ELEMENT_DATA;
    

    //console.log( newArr);
    //console.log(this.myFunction('age'));
    this.displayedColumns = this.columnConfigurations.map((c) => c.columnDef);
  }
}
