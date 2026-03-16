import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Merchantsiteservice {
  merchantdetails = signal<any>(null);
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    // const merchantdata = localStorage.getItem('MerchantDetails');
    // if(merchantdata){
    //   this.merchantdetails.set(JSON.parse(merchantdata));
    // }
  }
  getmerchantsiteimages(data : number){
    return this.http.get<any>(`https://bueteshop.kredasit.com/api/MerchantStore/GetMerchantStore/${data}`);
  }
}
