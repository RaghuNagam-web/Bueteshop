import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

import { Merchantsiteservice } from '../../ServiceComponent/merchantsiteservice';


@Component({
  selector: 'app-merchantstore',
  imports: [CommonModule],
  templateUrl: './merchantstore.html',
  styleUrl: './merchantstore.css'
})
export class Merchantstore implements OnInit {



  merchantdetails = signal<any>(null);

  merchantimages = signal<any>(null);
  constructor(private mechantsiteimageservice : Merchantsiteservice) { }
  ngOnInit(): void {
    const merchantData = localStorage.getItem('MerchantDetails');
    if (merchantData) {
      const parsedData = JSON.parse(merchantData);
      const id = parsedData.merchantId;
      this.merchantdetails.set(id);
    } else {
      console.log('No merchant data found in localStorage');
    }

    this.mechantsiteimageservice.getmerchantsiteimages(this.merchantdetails()).subscribe({
      next:(res:any) => {
        console.log('Merchant Site Images:', res);
        this.merchantimages.set(res);

      },
      error:(err) => {

        console.log('Error fetching merchant site images:', err);

      }
    })
  }
}
