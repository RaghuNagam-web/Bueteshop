import { NgIf } from '@angular/common';

import { Component,inject,signal } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { Adminlogin } from '../adminlogin/adminlogin';


@Component({
  selector: 'app-adminlayout',
  imports: [RouterOutlet, RouterModule, RouterLinkActive,Adminlogin, NgIf],
  templateUrl: './adminlayout.html',
  styleUrl: './adminlayout.css'
})
export class Adminlayout {
  recievedata = signal(false);

  currentpage : string = '';
  private router = inject(Router);


  constructor(){

  // ✔ Redirect when not logged in and trying to access child admin pages
  const username = localStorage.getItem('username');

  if (!username) {
    // user not logged in → force redirect to adminlogin
    this.router.navigate(['/adminlayout']);
  }

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const url = this.router.url;

      if(url.includes('sliderimagesupload')){
        this.currentpage = 'Slider Images Upload';
      }
      else if(url.includes('bannersupload')){
        this.currentpage = 'Homepage Banners';
      }
      else if(url.includes('categorybanners')){
        this.currentpage = 'Categories Banners';
      }
      else if(url.includes('topcouponbanners')){
        this.currentpage = 'TopCoupon Banners';
      }
      else if(url.includes('bestofferbanners')){
        this.currentpage = 'BestOffers Banners';
      }
      else if(url.includes('seasonaloffersupload')){
        this.currentpage = 'Seasonal Offers Upload';
      }
      else if(url.includes('couponsapproval')){
        this.currentpage = 'Coupons Approval';
      }
      else if(url.includes('help')){
        this.currentpage = 'Help';
      }
      else if(url.includes('settings')){
        this.currentpage = 'Settings';
      }
      else {
        this.currentpage = 'Admin Login';
      }
    });
  }
  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('adminid');
    this.router.navigate(['/']);
  }
  data(data:any){
    this.recievedata.set(data());
    console.log('recievedata :',this.recievedata());
  }



}
