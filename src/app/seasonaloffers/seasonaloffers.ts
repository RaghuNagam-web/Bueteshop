import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, HostListener, inject, OnInit, signal} from '@angular/core';
import { ɵInternalFormsSharedModule } from "@angular/forms";
@Component({
  selector: 'app-seasonaloffers',
  imports: [CommonModule, ɵInternalFormsSharedModule],
  templateUrl: './seasonaloffers.html',
  styleUrl: './seasonaloffers.css'
})
export class Seasonaloffers implements OnInit {
  images = signal<{ src: SafeUrl; url: string }[]>([]);
  groupedImages = signal<{ src: SafeUrl; url: string }[][]>([]);
  isloading = signal(true);

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  private itemsPerSlide = 4; // default

  ngOnInit(): void {
    this.setItemsPerSlide(window.innerWidth);

    this.http.get<any[]>('https://bueteshop.kredasit.com/api/SeasonalOffer_Images/get-SeasonalOffers-images')
      .subscribe({
        next: (res) => {
          const formatted = res.map(item => ({
            src: this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + item.base64),
            url: item.merchantUrl?.startsWith('http') ? item.merchantUrl : `https://${item.merchantUrl}`
          }));

          this.images.set(formatted);
          this.groupImages();
          this.isloading.set(false);
          console.log(res)
        },
        error: (err) => console.log(err)
      });
  }

  // Recalculate items per slide on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setItemsPerSlide(event.target.innerWidth);
    this.groupImages();
  }

  private setItemsPerSlide(width: number) {
    if (width >= 992){
       this.itemsPerSlide = 4;
    }
    else if (width >= 768) {
      this.itemsPerSlide = 3;
    }
    else if (width >= 576){
      this.itemsPerSlide = 2;
    }
    else {
      this.itemsPerSlide = 1;
    }
  }

  private groupImages() {
    const allImages = this.images();
    const chunked = [];
    for (let i = 0; i < allImages.length; i += this.itemsPerSlide) {
      chunked.push(allImages.slice(i, i + this.itemsPerSlide));
    }
    this.groupedImages.set(chunked);
  }

  showAll = signal(false);

  showAllImages() {
    this.showAll.set(true); // Set showAll to true;
  }

  hideAllImages() {
    this.showAll.set(false); // Set showAll to false;
  }
}
