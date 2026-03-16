import { Router } from '@angular/router';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Pickyourproductsservice } from '../../ServiceComponent/pickyourproductsservice';

@Component({
  selector: 'app-pickyourproducts',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './pickyourproducts.html',
  styleUrl: './pickyourproducts.css'
})
export class Pickyourproducts implements OnInit {


  productform:FormGroup;
  selectedFile= signal<File | null >(null);
  merchantdetails = signal<any>({});



  constructor(private fb:FormBuilder , private pickproductservice : Pickyourproductsservice){
    this.productform=this.fb.group({
      ProductName:['',[Validators.required,Validators.minLength(3)]],
      Price:['',[Validators.required,Validators.min(1)]],
      MerchantID:['',[Validators.required]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],
      ProductImage:['',[Validators.required]],
      UploadedDate:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      this.merchantdetails.set(JSON.parse(merchantdata));
    }

    //this condition when we want required coupon code (or) we are insert the merchantid and merchanturl by using price input field

    if(this.productform.get('Price')){
      this.setData();
    }
  }

  //we are setting the merchant details in merchantid and merchanturl
  setData(){
    this.productform.patchValue({MerchantID: this.merchantdetails().merchantId});
    this.productform.patchValue({MerchantURL: this.merchantdetails().merchantURL});
  }

  onFileSelected(event:any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile.set(file);
      this.productform.patchValue({ProductImage:file});
    }

  }
  upload(){

    this.setData();

    if(!this.selectedFile()){
      alert("Please select a file");
      return;
    }

    const formdata = new FormData();

    formdata.append('ProductName',this.productform.value.ProductName);
    formdata.append('Price',this.productform.value.Price);
    formdata.append('MerchantID',this.productform.value.MerchantID);
    formdata.append('MerchantURL',this.productform.value.MerchantURL);
    formdata.append('ProductImage',this.productform.value.ProductImage);
    formdata.append('UploadedDate',this.productform.value.UploadedDate);

    console.log('Uploading...',formdata);

    this.pickproductservice.Pickyourproducts(formdata).subscribe({
      next:(res:any) => {
        console.log('Upload Success:',res);
        alert('Product uploaded successfully!');
        this.productform.reset();
        this.selectedFile.set(null);
        //reset the file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err) => {
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
      }
    })
  }

}
