import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-popularity',
  imports: [CommonModule],
  templateUrl: './popularity.html',
  styleUrl: './popularity.css'
})
export class Popularity implements OnInit {
  popularcoupons = signal<any[]>([]);

    showAll = false;
    constructor( private http : HttpClient){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

      this.http.get('https://bueteshop.kredasit.com/api/AToZ/popular').subscribe({
        next:(res:any) =>{
          console.log('popular coupons',res);
          this.popularcoupons.set(res);

        },
        error:(err:any) =>{
          console.log('Error fetching popular coupons:', err);
        }
      });

    }

    get visibleDeals() {
      // 12 first, then +4
      return this.showAll ? this.popularcoupons() : this.popularcoupons().slice(0, 12);
    }

    toggleShowMore() {
      this.showAll = !this.showAll;
    }

    trackById(index: number, item: any) {
      return item.id;
    }
}
