import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
@Component({
  selector: 'app-angular-debounce',
  standalone: true,
  imports: [],
  templateUrl: './angular-debounce.component.html',
  styleUrl: './angular-debounce.component.scss'
})
export class AngularDebounceComponent implements OnDestroy  {
  searchInput = new Subject<string>();

  constructor() {
    this.searchInput
      .pipe(debounceTime(300))
      .subscribe((searchTerm: string) => {
        // Call your search function here
        this.performSearch(searchTerm);
      });
  }

  onSearchInputChange(searchTerm: any) {
    this.searchInput.next(searchTerm);
  }

  performSearch(searchTerm: string) {
    // Perform the actual search operation here
    console.log(`Searching for: ${searchTerm}`);
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }
}
