import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-customerreview',
  imports: [CommonModule,],
  templateUrl: './customerreview.html',
  styleUrl: './customerreview.css'
})
export class Customerreview implements  OnInit{
    review = signal<any[]>([]);
    review1 = signal<any[]>([]);
    message = signal(false);
    stars = [1,2,3,4,5];
    constructor(private http : HttpClient){}

  ngOnInit(): void {

 console.log("Customerreview Component Loaded!");
 
    this.http.get('https://bueteshop.kredasit.com/api/AToZ/get-all-reviews').subscribe({
      next:(res:any) =>{
        console.log('All Reviews:', res.reviews);
        this.review.set(res.reviews);
        this.review1.set(res.reviews);
        console.log(this.review());
        console.log(this.review1());
      },
      error:(err) =>{
        console.log(err);
      }
    })
  }

  search(event : any){
    const value = event.target.value;
    console.log(value);
    if(value){
      let filter = this.review().filter(item =>
        item.couponName.toLowerCase().includes(value.toLowerCase())
        );

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
