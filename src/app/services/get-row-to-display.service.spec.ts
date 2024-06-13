import { TestBed } from '@angular/core/testing';

import { GetRowToDisplayService } from './get-row-to-display.service';

describe('GetRowToDisplayService', () => {
  let service: GetRowToDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRowToDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
