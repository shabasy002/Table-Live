import { TestBed } from '@angular/core/testing';

import { ObsToArrayService } from './obs-to-array.service';

describe('ObsToArrayService', () => {
  let service: ObsToArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsToArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
