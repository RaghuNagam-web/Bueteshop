import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productservice {

  constructor(private http:HttpClient) { }

  getpendingproducts():Observable<any[]>{
    return this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdminContent/admin/merchant-products');
  }

  postapproveproducts(payload :{productId: number, isApproved: boolean, rejectReason: string, advisedChanges: string}):Observable<any>{

    return this.http.post('https://bueteshop.kredasit.com/api/AdminContent/admin/merchant-products/update-status', payload, { responseType: 'text' });
  }
}
