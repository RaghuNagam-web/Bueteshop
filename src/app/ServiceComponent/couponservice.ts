import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Coupon {
  id: number;
  couponName: string;
  requestedSlotId: number; // only for pending coupons
  assignedSlotId: number;  // only for approved coupon
  title: string;
  merchantName: string;
  isApproved: boolean;
  merchantURL: string;
  slotID: number;
}

@Injectable({
  providedIn: 'root'
})
export class Couponservice {
  // approvedCoupons(couponId: number) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http:HttpClient) { }

  getPendingCoupons(): Observable<any[]> {
    return this.http.get<any[]>('https://bueteshop.kredasit.com/api/Admin/PendingCoupons');
  }

  approveCoupon(couponId : number): Observable<any> {
    const payload = {couponId};
    return this.http.post('https://bueteshop.kredasit.com/api/Admin/ApproveCoupon', payload, { responseType: 'text' });
  }

  // getAllApprovedCoupons(): Observable<any[]> {
  //    return this.http.get<any[]>('https://bueteshop.kredasit.com/api/Admin/coupons');
  // }
}
