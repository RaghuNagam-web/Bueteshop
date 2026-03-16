import { Component, inject, OnInit, signal } from '@angular/core';
import { Seasonaloffers } from '../seasonaloffers/seasonaloffers';
import { Coupons } from '../coupons/coupons';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Bannersservice } from '../ServiceComponent/bannersservice';

@Component({
  selector: 'app-topcoupons',
  imports: [CommonModule, Coupons, Seasonaloffers,RouterModule],
  templateUrl: './topcoupons.html',
  styleUrl: './topcoupons.css'
})
export class Topcoupons {
  rightimage = signal('');
  leftimage = signal('');

  rightmerchanturl = signal('');
  leftmerchanturl = signal('');

  isloadingright = signal(true);
  isloadingleft = signal(true);

  constructor(private topcouponsbanners: Bannersservice) {

    // 🔹 Load Left Banner
    this.topcouponsbanners.gettopcouponsleftbanner().subscribe({
      next: (res) => {
        console.log('Left banner response:', res);

        const cleanBase64 = res.base64.replace(/^TcLeft/, '');


        this.leftimage.set(`data:image/png;base64,${cleanBase64}`);
        this.leftmerchanturl.set(res.merchantUrl);
        this.isloadingleft.set(false);
      },
      error: (err) => {
        console.error('Left banner error:', err);
        this.isloadingleft.set(true);
      }
    });

    // 🔹 Load Right Banner
    this.topcouponsbanners.gettopcouponsrightbanner().subscribe({
      next: (res) => {
        console.log('Right banner response:', res);

        const cleanBase64 = res.base64.replace(/^TcRight/, '');

        this.rightimage.set(`data:image/png;base64,${cleanBase64}`);
        this.rightmerchanturl.set(res.merchantUrl);
        this.isloadingright.set(false);
      },
      error: (err) => {
        console.error('Right banner error:', err);
        this.isloadingright.set(true);
      }
    });

  }
}
