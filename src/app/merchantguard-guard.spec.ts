import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { merchantguardGuard } from './merchantguard-guard';

describe('merchantguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => merchantguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
