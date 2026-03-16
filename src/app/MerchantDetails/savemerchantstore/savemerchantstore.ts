import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savemerchantstore',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './savemerchantstore.html',
  styleUrl: './savemerchantstore.css'
})
export class Savemerchantstore implements OnInit {
  saveform:FormGroup;
  merchantdetails = signal<any>({});

  SelectedFile= signal<File | null >(null);

  private router = inject(Router)
  private http = inject(HttpClient)
  constructor(private fb:FormBuilder){
    this.saveform=this.fb.group({
      StoreID :['',[Validators.required]],
      MerchantID:['',[Validators.required]],
      StoreName:['',[Validators.required,Validators.minLength(3)]],
      StoreAddress:['',[Validators.required,Validators.maxLength(100)]],
      AboutDescription:['',[Validators.required,Validators.maxLength(100)]],
      Tagline:['',[Validators.required,Validators.maxLength(100)]],
      MerchantLogo:['',[Validators.required]],
      LandingBanner:['',[Validators.required]],
      HeroBannerImage:['',[Validators.required]],
      CreatedDate:[''],
      UpdatedDate:[''],
      IsActive:['true',[Validators.required]]
    });
  }

  ngOnInit(): void {
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      this.merchantdetails.set(JSON.parse(merchantdata));
    }

    if(this.saveform.get('StoreID')){
      this.setData();
    }
  }
  setData(){
    this.saveform.patchValue({MerchantID: this.merchantdetails().merchantId});
  }


  onFileSelected(event:any){
    const file = event.target.files[0];
    if(file){
      this.saveform.patchValue({MerchantLogo:file});
      this.saveform.patchValue({LandingBanner:file});
      this.saveform.patchValue({HeroBannerImage:file});
      this.SelectedFile.set(file);
    }
  }
  save(){
    if(!this.SelectedFile){
      alert('Please Select an Image');
      return;
    }
    const formData = new FormData();
    const createdDate = new Date().toISOString(); // If the API expects ISO format
      formData.append('CreatedDate', createdDate);
      formData.append('UpdatedDate', createdDate);

    formData.append('StoreID',this.saveform.value.StoreID);
    formData.append('MerchantID',this.saveform.value.MerchantID);
    formData.append('StoreName',this.saveform.value.StoreName);
    formData.append('StoreAddress',this.saveform.value.StoreAddress);
    formData.append('AboutDescription',this.saveform.value.AboutDescription);
    formData.append('Tagline',this.saveform.value.Tagline);
    formData.append('MerchantLogo',this.saveform.value.MerchantLogo);
    formData.append('LandingBanner',this.saveform.value.LandingBanner);
    formData.append('HeroBannerImage',this.saveform.value.HeroBannerImage);
    // formData.append('CreatedDate',this.saveform.value.CreatedDate);
    // formData.append('UpdatedDate',this.saveform.value.UpdatedDate);
    formData.append('IsActive',this.saveform.value.IsActive);

    console.log('Uploading...',formData);

    this.http.post('https://bueteshop.kredasit.com/api/MerchantStore/SaveMerchantStore',formData).subscribe({
      next:(res:any) =>{
        console.log('Save store Success:',res);
        this.saveform.reset();
        this.SelectedFile.set(null);
        alert('Store saved successfully!');

        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err:any) =>{
        console.error('Save store Error:',err);
        alert('Save store failed. Please check your input or server.');
      }
    });
  }
}
