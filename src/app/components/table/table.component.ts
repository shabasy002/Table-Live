import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule, DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';
export interface UserTable {
  name: string;
  phone: number;
  Address:string;
}
const ELEMENT_DATA: UserTable[] = [
  { name: 'Hydrogen', phone: 1.0079, Address: 'Trivandrum'},
  { name: 'Oxygen', phone: 2.0079, Address: 'Kollam'}

 
];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = [ 'name', 'phone', 'Address'];
  dataSource = new ExampleDataSource();
}
export class ExampleDataSource extends DataSource<UserTable> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<UserTable[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserTable[]> {
    return this.data;
  }

  disconnect() {}
}