
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface Pickyourproducts {
//   ProductName: string,
//   Price: string,
//   MerchantID: string,
//   MerchantURL: string,
//   ProductImage: string,
//   UploadedDate: string
// }
@Injectable({
  providedIn: 'root'
})

export class Pickyourproductsservice {
  constructor(private http:HttpClient) { }

  //post api for pick Products

  Pickyourproducts(formdata : FormData): Observable<any> {
    return this.http.post('https://bueteshop.kredasit.com/api/MerchantDetails/upload-MerchantProduct',formdata);
  }
}
