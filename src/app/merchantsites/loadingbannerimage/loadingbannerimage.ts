import { CommonModule, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Merchantsiteservice } from '../../ServiceComponent/merchantsiteservice';

@Component({
  selector: 'app-loadingbannerimage',
  imports: [CommonModule],
  templateUrl: './loadingbannerimage.html',
  styleUrl: './loadingbannerimage.css'
})
export class Loadingbannerimage {



  merchantdata = signal<any>(null);

  merchantimages = signal<any>(null);

  constructor(private mechantsiteimageservice : Merchantsiteservice) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      const parsedData = JSON.parse(merchantdata);

      const id =parsedData.merchantId;
      this.merchantdata.set(id);
    }
    else{
      console.log('No merchant data found in localStorage');
    }

    this.mechantsiteimageservice.getmerchantsiteimages(this.merchantdata()).subscribe({
      next:(res:any) => {
        console.log('Merchant Site Images:', res);
        this.merchantimages.set(res);

      },
      error:(err) => {

        console.log('Error fetching merchant site images:', err);
      }
    })
  }

  share(): void {
    const url = window.location.href;  // Get the current page URL

    if (navigator.share) {
      navigator.share({
        text: 'Checkout this cool website!',
        url: url
      }).catch((error) => console.error('Error sharing', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
      }).catch((error) => console.error('Error copying to clipboard', error));
    }
  }

}
