import { TestBed } from '@angular/core/testing';

import { LimitedConcurrencyActionService } from './limited-concurrency-action.service';

describe('LimitedConcurrencyActionService', () => {
  let service: LimitedConcurrencyActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitedConcurrencyActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
