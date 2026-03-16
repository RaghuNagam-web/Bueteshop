import { TestBed } from '@angular/core/testing';

import { Bannersservice } from './bannersservice';

describe('Bannersservice', () => {
  let service: Bannersservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bannersservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
