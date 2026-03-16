import { TestBed } from '@angular/core/testing';

import { Pickyourproductsservice } from '../pickyourproductsservice';

describe('Pickyourproductsservice', () => {
  let service: Pickyourproductsservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pickyourproductsservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
