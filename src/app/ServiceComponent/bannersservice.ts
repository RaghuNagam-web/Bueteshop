import { Topcoupons } from './../topcoupons/topcoupons';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// export interface Categorybanners {
//   fileName: string,
//   contentType: string,
//   frame: string,
//   merchantURL: string,
//   formData: FormData,
// }
@Injectable({
  providedIn: 'root'
})
export class Bannersservice {

  constructor(private http:HttpClient) { }

  //Post Api's
  categoryleftbanner(formData: FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=CatLeft&ContentType=CatLeft&Frame=CatLeft&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData, { responseType: 'text' });
  }

  categoryrightbanner(formData : FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=CatRight&ContentType=CatRight&Frame=CatRight&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData, { responseType: 'text' }
    )
  }

  //Get Api's

  getcategoryleftbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=CatLeft');
  }

  getcategoryrightbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=CatRight');
  }


  //API'S for Topcoupons Banners

  //Post Api's

  topcouponsleftbanner(formData: FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=TcLeft&ContentType=TcLeft&Frame=TcLeft&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData,{ responseType: 'text' });
  }

  topcouponsrightbanner(formData : FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=TcRight&ContentType=TcRight&Frame=TcRight&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData,{ responseType: 'text' });
  }


  //Get Api's

  gettopcouponsleftbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=TcLeft');
  }

  gettopcouponsrightbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=TcRight');
  }



  //API'S for BestOffer Banners

  //Post Api's

  bestofferleftbanner(formData: FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=BOLeft&ContentType=BOLeft&Frame=BOLeft&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData);
  }

  bestofferrightbanner(formData : FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/Cat_TC_BO/add-or-update-Cat-Banner?FileName=BORight&ContentType=BORight&Frame=BORight&MerchantURL=http%3A%2F%2Fnike.in'
      ,formData,{ responseType: 'text' });
  }


  //Get Api's


  getatozcoupons(): Observable<any[]>{
    return this.http.get<any[]>('https://bueteshop.kredasit.com/api/AToZ/BestOffers');
  }
  getbestofferleftbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=BOLeft');
  }

  getbestofferrightbanner(): Observable<any>{
    return this.http.get('https://bueteshop.kredasit.com/api/Cat_TC_BO/get-Cat_TC_BO?position=BORight');
  }
}
