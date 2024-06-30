import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObsToArrayService {

  constructor() { }
  convertObservableToArray(observable: Observable<any>): Observable<any[]> {
    return observable.pipe(toArray());
  }
}
