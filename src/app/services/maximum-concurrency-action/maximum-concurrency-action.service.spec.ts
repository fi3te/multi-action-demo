import { TestBed } from '@angular/core/testing';

import { MaximumConcurrencyActionService } from './maximum-concurrency-action.service';

describe('ActionService', () => {
  let service: MaximumConcurrencyActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaximumConcurrencyActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
