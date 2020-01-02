import { TestBed } from '@angular/core/testing';

import { FakedbService } from './fakedb.service';

describe('FakedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakedbService = TestBed.get(FakedbService);
    expect(service).toBeTruthy();
  });
});
