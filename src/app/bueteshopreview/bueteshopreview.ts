import { NgIf, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-bueteshopreview',
  imports: [NgForOf, NgIf],
  templateUrl: './bueteshopreview.html',
  styleUrl: './bueteshopreview.css'
})
export class Bueteshopreview implements OnInit {
  review = signal<any[]>([]);
  review1 = signal<any[]>([]);

  message = signal(false);

  constructor(private http:HttpClient){  }

  ngOnInit(): void {
    this.http.get('https://bueteshop.kredasit.com/api/AToZ/get-merchant-ratings').subscribe({
      next:(res:any)=>{
        console.log('Merchant Ratings:', res);
        this.review.set(res);
        this.review1.set(res);
      },
      error:(err:any) =>{
        console.log('Error fetching merchant ratings:', err);
      }
    })
  }

  search(event : any){
    const value = event.target.value;
    console.log(value);
    if(value){
      
      let filter = this.review().filter(item =>
        item.merchantName.toLowerCase().includes(value.toLowerCase())
        )

      if(filter.length > 0){
        this.message.set(false);
        this.review.set(filter);
      }else{

        this.message.set(true);
        this.review.set(this.review1());
      }
    }
    else{
      this.message.set(false);
      this.review.set(this.review1());
    }
  }

}
