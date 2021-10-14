import { TestBed } from '@angular/core/testing';

import { LoadTextService } from './load-text.service';

describe('LoadTextService', () => {
  let service: LoadTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
