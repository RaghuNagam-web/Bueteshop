import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Couponservice } from '../../ServiceComponent/couponservice';


@Component({
  selector: 'app-couponsapproval',
  imports: [CommonModule],
  templateUrl: './couponsapproval.html',
  styleUrl: './couponsapproval.css'
})
export class Couponsapproval implements OnInit {
  pendingCoupons: any[] = [];
  approvedCoupons: any[] = [];

  isLoading = signal(false);
  // Track which coupon(s) are being approved
  isApproving = signal<{ [key: number]: boolean }>({});

  constructor (private coupon : Couponservice) {}

  ngOnInit(): void {
    this.refresh();
  }

  getPendingCoupons() {
    this.isLoading.set(true);
    this.coupon.getPendingCoupons().subscribe({
      next:(res:any) =>{
        this.pendingCoupons = res || [];
        this.isLoading.set(false);
      },
      error:(err) =>{
        console.log('Error fetching pending coupons:', err);
        this.isLoading.set(false);
      }
    });
  }


  approveCoupon(couponId: number) {
                                            // this.isApproving[couponId] = true;  // Disable the button while approval without signal
    // Set button loading state
  this.isApproving.update(state => ({
    ...state,
    [couponId]: true
  }));

    this.coupon.approveCoupon(couponId).subscribe({
      next: (res: any) => {
        console.log('Coupon approved:', res);
        alert(res || 'Coupon approved successfully!');
        const approved = this.pendingCoupons.find(c => c.id === couponId);
        if (approved) {

          //Move to approved list
          this.approvedCoupons.unshift({
            id : approved.id,
            couponName : approved.couponName,
            assignedSlotId : approved.requestedSlotId
          });

          // Remove from pending list
          this.pendingCoupons = this.pendingCoupons.filter(c => c.id !== couponId);
        }

        // remove loading state
      this.isApproving.update(state => {
        const updated = { ...state };
        delete updated[couponId];
        return updated;
      });

        // delete this.isApproving[couponId]; //re-enable the button with out signal
      },
      error: (err: any) => {
        console.error('Error approving coupon:', err);

        // remove loading state
      this.isApproving.update(state => {
        const updated = { ...state };
        delete updated[couponId];
        return updated;
      });
        // delete this.isApproving[couponId];  // re-enable the button if error
      }
    });
  }

  // getAllApprovedCoupons() {
  //   this.isLoading = true;
  //   this.coupon.getAllApprovedCoupons().subscribe({
  //     next: (res: any) => {
  //       console.log('Approved Coupons API response:', res);

  //       // map fields to ensure consistent structure
  //       this.approvedCoupons = (res || []).map((c: any) => ({
  //         id: c.id,
  //         couponName: c.couponName,
  //         assignedSlotId: c.assignedSlotId
  //       }));

  //       this.isLoading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching approved coupons:', err);
  //       this.isLoading = false;
  //     }
  //   });
  // }

  // ✅ Refresh
  refresh() {
    this.getPendingCoupons();
    // this.getAllApprovedCoupons();

  }

  // ✅ TrackBy for *ngFor
  trackById(index: number, item: any): number {
    return item.id;
  }

}
