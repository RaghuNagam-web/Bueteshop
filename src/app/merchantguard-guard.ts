import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { Merchantcouponsupload } from './MerchantDetails/merchantcouponsupload/merchantcouponsupload';

export interface CanExit {
  canExit: () => boolean | Promise<boolean>;
}

const checkLogin = () : boolean=>{
  const router = inject(Router);
  const login = localStorage.getItem('MerchantDetails');

  if (login) {
    return true;
  } else {
    router.navigate(['/merchantlogin']);
    return false;
  }
};
export const merchantauthGuard: CanActivateFn = (route, state) => {
  return checkLogin();
};

// ---------- CanActivateChild Guard ----------
export const merchantauthChildGuard: CanActivateChildFn = (route, state) => {
  return checkLogin();
};

export const merchantauthdeactivateGuard: CanDeactivateFn<CanExit> = (component, route, state, nextState) =>{
  return component.canExit();
}


