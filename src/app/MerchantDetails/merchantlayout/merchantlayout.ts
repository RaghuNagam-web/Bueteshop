import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-merchantlayout',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './merchantlayout.html',
  styleUrl: './merchantlayout.css',

})
export class Merchantlayout {
currentpage : string = '';
http = inject(HttpClient);
router = inject(Router);

name = localStorage.getItem('username');

constructor(){
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const url = this.router.url;
      if(url.includes('merchantadmin')){
        this.currentpage = 'Merchant Admin';
      }
      else if(url.includes('merchantcouponsupload')){
        this.currentpage = 'Merchant Coupons Uplaod';
      }
      else if(url.includes('referalmerchantpage')){
        this.currentpage = 'Referal Merchant Page';
      }
      else if(url.includes('review1')){
        this.currentpage = 'Review';
      }
      else if(url.includes('pickyourproducts')){
        this.currentpage = 'Pick Your Products';
      }
      else if(url.includes('merchantcreation')){
        this.currentpage = 'Merchant Creation';
      }

      else if(url.includes('savemerchantstore')){
        this.currentpage = 'Save Merchant Store';
      }
      else if(url.includes('merchantuploadproducts')){
        this.currentpage = 'Merchant Upload Products';
      }
      else if(url.includes('merchantstoreproducts')){
        this.currentpage = 'Merchant Store Products';
      }
      else if(url.includes('merchantcategoryupload')){
        this.currentpage = 'Merchant Category Upload';
      }
      else if(url.includes('merchanturl')){
        this.currentpage = 'Merchant Url';
      }
      else if(url.includes('help')){
        this.currentpage = 'Help';
      }
      else if(url.includes('settings')){
        this.currentpage = 'Settings';
      }
      else{
        this.currentpage = 'Merchant Layout';
      }
    })
}
SignOut() {
  localStorage.removeItem('username');
  localStorage.removeItem('merchantid');
  this.router.navigate(['/']);
}
}
