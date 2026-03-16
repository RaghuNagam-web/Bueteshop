import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  imports: [NgIf],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  images = signal<{ src: SafeUrl, url: string }[]>([]);
  isLoading = signal(true);
  http = inject(HttpClient);

  constructor(private sanitizer: DomSanitizer) {}

  
  ngOnInit(): void {
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdminContent/get-hero-images')
      .subscribe({
        next: (res) => {
          const formattedImages = res.map(item => ({
            src: this.sanitizer.bypassSecurityTrustUrl(
              'data:image/jpeg;base64,' + item.base64
            ),
            url: item.merchantUrl?.startsWith('http')
              ? item.merchantUrl
              : `https://${item.merchantUrl}`
          }));
          this.images.set(formattedImages);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        }
      });
  }
}
