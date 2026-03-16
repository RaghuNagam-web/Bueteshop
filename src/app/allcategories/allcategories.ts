import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Categoryservice } from '../ServiceComponent/categoryservice';

@Component({
  selector: 'app-allcategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allcategories.html',
  styleUrls: ['./allcategories.css']
})
export class Allcategories implements OnInit {
  deals: any[] = [];
  showAll = false;



  category = signal<string>('');   // this is for selected categoryname

  // categories = signal<string[]>([]);
  isloading = signal(false);
  fetchCouponByCategory = signal<string>('');

  constructor(private categoryservice: Categoryservice, private http: HttpClient) {
    // Runs whenever category changes
    effect(() => {
      const categoryname = this.categoryservice.getcategoryname(); // Correct getter

      if (!categoryname || categoryname.trim() === '') {
        this.loadcoupons(); // Runs when input is cleared (X button)
      } else {
        this.fetchCouponsByCategory(categoryname);
      }
    });
  }

  ngOnInit(): void {
    this.loadcoupons();
  }

  loadcoupons(){
    this.isloading.set(true);
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdSlot/GetAllAdSlots').subscribe({
      next:(res:any) =>{
        console.log('all coupons' , res);
        this.deals = res;
        this.isloading.set(false);
      },
      error:(err:any)=>{
        console.log('Error fetching all coupons:', err);
        this.isloading.set(false);
      }
    })
  }

  fetchCouponsByCategory(categoryname: string) {
    console.log('Fetching coupons by category:', categoryname);
    this.isloading.set(true);
    this.http.get(`https://bueteshop.kredasit.com/api/AToZ/by-category?category=${categoryname}`).subscribe({
      next: (res: any) => {
        console.log('Coupons by ${category}:', res);
        this.deals = res;
        this.isloading.set(false);
      },
      error: (err: any) => {
        console.log('Error fetching coupons by category:', err);
        this.isloading.set(false);

      }
    })
  }

  /** Show first 12 coupons or all */
  get visibleDeals() {
    return this.showAll ? this.deals : this.deals.slice(0, 12);
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  trackById(index: number, item: any) {
    return item.id || index;
  }
}
