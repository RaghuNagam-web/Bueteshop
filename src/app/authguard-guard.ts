import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router} from '@angular/router';


  const checkLogin = () : boolean=>{
  const router = inject(Router);
  const login = localStorage.getItem('userDetails');

  if (login) {
    return true;
  } else {
    router.navigate(['/userlogin']);
    return false;
  }
};
  export const authGuard: CanActivateFn = (route, state) => {
  return checkLogin();
};

// ---------- CanActivateChild Guard ----------
export const authChildGuard: CanActivateChildFn = (route, state) => {
  return checkLogin();
};
