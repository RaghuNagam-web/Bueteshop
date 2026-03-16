import { CommonModule, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-pickproducts',
  imports: [NgStyle,CommonModule],
  templateUrl: './pickproducts.html',
  styleUrl: './pickproducts.css'
})
export class Pickproducts implements OnInit{
  deals: any[] = [];
  isloading =signal(true); // Using a regular boolean state for simplicity
  showAll = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch products when component initializes
    this.fetchProducts();
  }

  // Fetch products from API
  fetchProducts() {
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdminContent/admin/merchant-products')
      .subscribe({
        next: (res: any[]) => {
          this.deals = res;  // Store the fetched products
          this.isloading.set(false); // Turn off loading spinner
        },
        error: (err: any) => {
          console.error('Error fetching all products:', err);
          this.isloading.set(true); // Also turn off loading on error
        }
      });
  }

  // Get visible deals based on whether the user has clicked 'Show More'
  get visibleDeals() {
    return this.showAll ? this.deals : this.deals.slice(0, 4); // Show only 4 items initially
  }

  // Toggle the visibility of all deals
  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  // Track deals by unique ID for better performance with Angular's *ngFor
  trackById(index: number, item: any) {
    return item.id || index;  // Return item.id if available, or fall back to index
  }
}
