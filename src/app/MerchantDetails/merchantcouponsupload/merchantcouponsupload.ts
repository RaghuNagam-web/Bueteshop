import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-merchantcouponsupload',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './merchantcouponsupload.html',
  styleUrl: './merchantcouponsupload.css'
})
export class Merchantcouponsupload implements OnInit{



  isSaved = false;

  canExit(): boolean {
    if (!this.isSaved) {
      return confirm('Do you want to leave from this componentgi?');
    }
    return true;
  }



  couponform:FormGroup;
  selectedFile= signal<File | null >(null);
  merchantdetails = signal<any>({});


  private http = inject(HttpClient);

  constructor(private fb : FormBuilder){
    this.couponform = this.fb.group({
      MerchantId :['',[Validators.required]],
      CouponName: ['',[Validators.required,Validators.minLength(3)]],
      CouponCode: ['',[Validators.required,Validators.pattern('^[A-Za-z0-9_-]{4,15}$')]],
      Category:['',[Validators.required,Validators.minLength(3)]],
      ExpiryDate:['',[Validators.required]],
      TermsAndConditions:['',[Validators.required,Validators.minLength(5)]],
      Title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      Description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      Percentage:['',[Validators.required,  Validators.pattern('^[0-9]*$'),Validators.min(1), Validators.max(100)]],
      DiscountValue:['',[Validators.required,  Validators.pattern('^[0-9]*$'),Validators.min(1), Validators.max(100)]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],
      RequestedSlotId:['',[Validators.required]],
      AdPost:['',[Validators.required]]
    });
  }


  // getting the merchant details from merchant login
  ngOnInit(): void {
    const merchantdata = localStorage.getItem('MerchantDetails');
    if (merchantdata) {
      this.merchantdetails.set(JSON.parse(merchantdata));
    }

    //this condition for coupon code is then only required
    if(this.couponform.get('CouponCode')){
      this.setData();
    }
  }


//we are setting the merchant details in merchantid and merchanturl
  setData(){
    this.couponform.patchValue({MerchantId: this.merchantdetails().merchantId});
    this.couponform.patchValue({MerchantURL: this.merchantdetails().merchantURL});
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if(file){
      this.couponform.patchValue({AdPost:file});
      this.selectedFile.set(file);
    }
}
  upload() {



    if(!this.selectedFile()){
      alert("Please select a file");
      return;
    }
    const formdata = new FormData();
    formdata.append('MerchantId',this.couponform.value.MerchantId);
    formdata.append('CouponCode',this.couponform.value.CouponCode);
    formdata.append('CouponName',this.couponform.value.CouponName);
    formdata.append('Category', this.couponform.value.Category);
    formdata.append('ExpiryDate',this.couponform.value.ExpiryDate);
    formdata.append('TermsAndConditions',this.couponform.value.TermsAndConditions);
    formdata.append('Title',this.couponform.value.Title);
    formdata.append('Description',this.couponform.value.Description);
    formdata.append('Percentage',this.couponform.value.Percentage);
    formdata.append('DiscountValue',this.couponform.value.DiscountValue);
    formdata.append('MerchantURL',this.couponform.value.MerchantURL);
    formdata.append('RequestedSlotId',this.couponform.value.RequestedSlotId);
    formdata.append('AdPost',this.couponform.value.AdPost);


    console.log('Uploading...',this.couponform.value);

    debugger;
    this.http.post('https://bueteshop.kredasit.com/api/MerchantDetails/coupons/upload',formdata,{ responseType: 'text' })
    .subscribe({
      next:(res:any) => {
        console.log('Upload Success:',res);
        alert('Coupon uploaded successfully!');
        this.couponform.reset();
        this.selectedFile.set(null);
        //reset the file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';


        // another coupons upload restore merchantId + merchantURL
        this.setData();
      },
      error:(err)=>{
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
      }
    });
  }

}
