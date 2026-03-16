
import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
  selector: 'app-review',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './review.html',
  styleUrl: './review.css'
})
export class Review {

  reviewform:FormGroup;
  userdetails = signal<any>({});
  deals = signal<any>([]);


  constructor(private http: HttpClient,private fb:FormBuilder) {
    this.reviewform = this.fb.group({
      userId: [''],
      couponName: [''],
      couponId: [''],
      merchantId: [''],
      review: [''],
      rating: [''],
      purchaseType: ['offline'],
      purchaseAmount: ['1000'],
      purchaseDate: new Date().toISOString(),
      remarks: [''],
    })

  }


  ngOnInit(): void {
    const userdata = localStorage.getItem('userDetails');
    if(userdata){
      this.userdetails.set(JSON.parse(userdata));
    }
    else{
      console.log('No user data found in localStorage');
    }

    if(this.reviewform.get('rating')){
      this.setdata();
    }
    this.getCoupons();
  }

  setdata(){
    this.reviewform.patchValue({userId: this.userdetails().userId});
  }
  submit(){
    const value = this.reviewform.value;

    this.http.post('https://bueteshop.kredasit.com/api/AToZ/submit-rating',value).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Review submitted successfully!');
        this.reviewform.reset();
      },
      error:(err)=>{
        console.log(err);
        alert('Review submission failed!');
      }
    })
  }
  getCoupons(){
    this.http.get<any[]>('https://bueteshop.kredasit.com/api/AdSlot/GetAllAdSlots').subscribe({
      next:(res:any) => {
        console.log('Coupons:', res);
        this.deals.set(res);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  // addReview(couponId: number,merchantID: number){
  //   console.log(couponId,merchantID);                  like this want we want get into the form console only couponid and merchantid
  // }
    addreview = signal<any>(null);
    addReview(data : any){
      console.log(data);
      this.addreview.set(data);
      this.reviewform.patchValue({couponId: data.couponId});                     // this is one way to set the value in the form getting from object
      this.reviewform.patchValue({couponName: data.couponName});
      this.reviewform.patchValue({merchantId: data.merchantID});
    }
}

