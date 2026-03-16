import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-coupons',
  imports: [CommonModule],
  templateUrl: './coupons.html',
  styleUrl: './coupons.css'
})
export class Coupons {
  getPendingCoupons() {
    throw new Error('Method not implemented.');
  }
deals: any[] = [];
  showAll = false;
  isLoading = signal(true);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons() {
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdSlot/GetAllAdSlots')
      .subscribe({
        next: (res: any) => {
          // console.log('Coupons:', res);
          // ✅ Handle API structure properly
          // If API returns array directly:
          this.deals = res;

          // If API returns { data: [...] }
          // this.deals = res.data;

          this.isLoading.set(false);
        },
        error: (err:any) => {
          console.error('Error fetching coupons:', err);
          this.isLoading.set(true);
        }
      });
  }

  get visibleDeals() {
    // First 12, then show more on click
    return this.showAll ? this.deals : this.deals.slice(0, 12);
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  trackById(index: number, item: any) {
    return item.id || index;
  }
}
