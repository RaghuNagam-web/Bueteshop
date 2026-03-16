import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports: [ReactiveFormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {



  reviewForm: FormGroup;
  merchantdetails = signal<any>({});
  constructor(private http:HttpClient,private fb:FormBuilder) {
    this.reviewForm = this.fb.group({
      merchantId: [''],
      userId: ['0'],
      couponId:['0'],
      saleAmount:['10000.00'],
      saleDate: new Date().toISOString(),
      review: ['']
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      this.merchantdetails.set(JSON.parse(merchantdata));
    }
    else {
      console.log('No merchant data found in localStorage');
    }

    if(this.reviewForm.get('review')) {
      this.setdata();
    }
  }

  setdata(){
    this.reviewForm.patchValue({merchantId: this.merchantdetails().merchantId});
  }
  submit(){
    const formvalue = this.reviewForm.value;
    console.log(formvalue);
    this.http.post('https://bueteshop.kredasit.com/api/AToZ/submitMerchantSale',formvalue).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Review submitted successfully!');
        this.reviewForm.reset();
      },
      error:(err)=>{
        console.log(err);
        alert('Review submission failed!');
      }
    })
  }
}
