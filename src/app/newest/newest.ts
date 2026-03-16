import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-newest',
  imports: [CommonModule],
  templateUrl: './newest.html',
  styleUrl: './newest.css'
})
export class Newest {
  newestcoupons = signal<any>([]);
  isloading = signal(false);
  showAll = false;



  private http = inject(HttpClient);

  ngOnInit(): void {
    this.newest();
  }

  newest() {
    this.isloading.set(true);
    this.http.get('https://bueteshop.kredasit.com/api/AToZ/newest').subscribe({
      next: (res: any) => {
        console.log('newest coupons', res);
        this.newestcoupons.set(res);
        this.isloading.set(false);
      },
      error: (err: any) => {
        console.log('Error fetching newest coupons:', err);
        this.isloading.set(false);
      }
    });
  }

  get visibleDeals() {
      // 12 first, then +4
      return this.showAll ? this.newestcoupons() : this.newestcoupons().slice(0, 12);
    }

    toggleShowMore() {
      this.showAll = !this.showAll;
    }

    trackById(index: number, item: any) {
      return item.id;
    }


}
