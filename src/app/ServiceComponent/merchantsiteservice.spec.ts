import { TestBed } from '@angular/core/testing';

import { Merchantsiteservice } from '../merchantsiteservice';

describe('Merchantsiteservice', () => {
  let service: Merchantsiteservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Merchantsiteservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
