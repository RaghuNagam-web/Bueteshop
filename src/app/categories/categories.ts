import {  NavigationEnd, Router, RouterModule } from '@angular/router';
import { Component, inject, OnInit, signal} from '@angular/core';

import { CommonModule, NgStyle, } from '@angular/common';

import { Bannersservice } from '../ServiceComponent/bannersservice';
import { Seasonaloffers } from "../seasonaloffers/seasonaloffers";
import { HttpClient } from '@angular/common/http';
import { Categoryservice } from '../ServiceComponent/categoryservice';



@Component({
  selector: 'app-categories',
  imports: [NgStyle, RouterModule, CommonModule, Seasonaloffers],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories implements OnInit {

  rightimage = signal('');
  leftimage = signal('');

  rightmerchantUrl = signal('');
  leftmerchantUrl = signal('');

  isloadingright = signal(true);
  isloadingleft = signal(true);

  constructor(private category: Bannersservice , private categoryname : Categoryservice , private router: Router) {

    // 🔹 Load Left Banner
    this.category.getcategoryleftbanner().subscribe({
      next: (res) => {
        console.log('Left banner response:', res);

        const cleanBase64 = res.base64.replace(/^CatLeft/, ''); // it is used remove the CatLeft from the image and it will comes from api to disply the image we using this line


        this.leftimage.set(`data:image/png;base64,${cleanBase64}`);
        this.leftmerchantUrl.set(res.merchantUrl);
        if(this.leftimage()){
          console.log(this.leftimage())
        }
        this.isloadingleft.set(false);
      },
      error: (err) => {
        console.error('Left banner error:', err);
        this.isloadingleft.set(true);
      }
    });

    // 🔹 Load Right Banner
    this.category.getcategoryrightbanner().subscribe({
      next: (res) => {
        console.log('Right banner response:', res);

        const cleanBase64 = res.base64.replace(/^CatRight/, '');

        this.rightimage.set(`data:image/png;base64,${cleanBase64}`);
        this.rightmerchantUrl.set(res.merchantUrl);
        this.isloadingright.set(false);
      },
      error: (err) => {
        console.error('Right banner error:', err);
        this.isloadingright.set(true);
      }
    });

    // 👇 Listen to router navigation events (no filter used)
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     // Reset dropdown text when route changes
    //     this.selectedCategory.set(null);
    //     this.categoryname.getcategoryname('');
    //     console.log('Dropdown reset to More Categories');
    //   }
    // });
  }

 atozavaliablecoupons = signal<any[]>([]);
 atozavaliablecoupons1 = signal<any[]>([]);
 message = signal(false);
 isloading = signal(true);
  // Selected category
  selectedCategory = signal<string | null>(null);

  // NEW SIGNALS FOR DROPDOWN + FILTER
  dropdownVisible = signal(false);


  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AToZ/available-categories')
      .subscribe({
        next: (res: any) => {
          console.log('available categories:', res);
          this.atozavaliablecoupons.set(res);
          this.atozavaliablecoupons1.set(res);
          this.isloading.set(false);
        },
        error: (err: any) => {
          console.log('Error fetching available coupons:', err);
          this.isloading.set(true);
        }
      });
  }

search(event : any){
  const value = event.target.value.trim();
  console.log('value',value);
   // 🔹 Update the category signal so other components react
  this.categoryname.setcategoryname(value);
   this.atozavaliablecoupons.set(this.atozavaliablecoupons1());
  if(value){

    let filter = this.atozavaliablecoupons().filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
      );

      if(filter.length > 0){
         this.atozavaliablecoupons.set(filter);
         this.message.set(false);
      }
      else{
        this.atozavaliablecoupons.set([]);
        this.message.set(true);
      }
  }
  else{
    this.atozavaliablecoupons.set(this.atozavaliablecoupons1());
     this.message.set(false);

      // 🔹 Reset selectedCategory so same category can be clicked again
    this.selectedCategory.set(null);
  }
}




  // 🔽 DROPDOWN FUNCTIONS

  toggleDropdown() {
    this.dropdownVisible.set(!this.dropdownVisible());
  }
  categorysearch(name: string) {
    this.categoryname.setcategoryname(name);
    this.selectedCategory.set(name);
    this.dropdownVisible.set(false); // 👈 close dropdown on selection
  }

}

