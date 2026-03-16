
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-banners',
  imports: [CommonModule],
  templateUrl: './banners.html',
  styleUrl: './banners.css'
})
export class Banners implements  OnInit{
http = inject(HttpClient);
rightimage = signal('');
leftimage = signal('');                                                                           /// USING SIGNALS
rightmerchanturl = signal('');
leftmerchanturl = signal('');

loadingright = signal(true);
loadingleft = signal(true);
ngOnInit(): void {

this.http.get("https://bueteshop.kredasit.com/api/TopBanner/get-TTC-banner?position=Right").subscribe((res:any)=>{
  console.log("Right banner",res.base64);
  this.rightimage.set(`data:image/png;base64,${res.base64}`);
  this.rightmerchanturl.set(res.merchantURL);
  this.loadingright.set(false);
});

// left banner

    this.http.get("https://bueteshop.kredasit.com/api/TopBanner/get-TTC-banner?position=Left").subscribe((res: any) => {
        console.log("left banner", res.base64);
        this.leftimage.set(`data:image/png;base64,${res.base64}`);
        this.leftmerchanturl.set(res.merchantURL);
        this.loadingleft.set(false);
      });
  }
}
