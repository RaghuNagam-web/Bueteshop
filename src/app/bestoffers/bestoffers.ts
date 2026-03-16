import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seasonaloffers } from '../seasonaloffers/seasonaloffers';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Bannersservice } from '../ServiceComponent/bannersservice';

@Component({
  selector: 'app-bestoffers',
  imports: [CommonModule, Seasonaloffers, RouterLink],
  templateUrl: './bestoffers.html',
  styleUrl: './bestoffers.css'
})
export class Bestoffers {
  bestoffercoupons = signal<any[]>([]);
  rightimage = signal('');
  leftimage = signal('');

  rightmerchanturl = signal('');
  leftmerchanturl = signal('');

  isloadingright = signal(true);
  isloadingleft = signal(true);

  showAll = false;

  constructor(private bestoffersbanner : Bannersservice){



    this.bestoffersbanner.getatozcoupons().subscribe({
      next:(res:any) =>{
        console.log('Best Offer coupons',res);
        this.bestoffercoupons.set(res);
      },
      error:(err:any) =>{
        console.log('Error fetching best offer coupons:', err);
      }
    });
    this.bestoffersbanner.getbestofferleftbanner().subscribe({
      next:(res : any) => {
        console.log('Left banner response:', res);
        const cleanBase64 = res.base64.replace(/^BOLeft/, '');
        this.leftimage.set(`data:image/png;base64,${cleanBase64}`);
        this.leftmerchanturl.set(res.merchantUrl);
        this.isloadingleft.set(false);
      },
      error:(err : any) => {
        console.error('Left banner error:', err);
        this.isloadingleft.set(true);
      }
    });

    this.bestoffersbanner.getbestofferrightbanner().subscribe({
      next:(res : any) => {
        console.log('Right banner response:', res);
        const cleanBase64 = res.base64.replace(/^BORight/, '');
        this.rightimage.set(`data:image/png;base64,${cleanBase64}`);
        this.rightmerchanturl.set(res.merchantUrl);
        this.isloadingright.set(false);
      },
      error:(err : any) => {
        console.error('Right banner error:', err);
        this.isloadingright.set(true);
      }
    })
  }
     get visibleDeals() {
      // 12 first, then +4
      return this.showAll ? this.bestoffercoupons() : this.bestoffercoupons().slice(0, 12);
    }

    toggleShowMore() {
      this.showAll = !this.showAll;
    }

    trackById(index: number, item: any) {
      return item.id;
    }
}
