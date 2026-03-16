import { Router } from '@angular/router';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merchantuploadproducts',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './merchantuploadproducts.html',
  styleUrl: './merchantuploadproducts.css'
})
export class Merchantuploadproducts implements OnInit {
  uploadproduct:FormGroup;
  merchantdetails = signal<any>({});
  SelectedFile = signal<File | null >(null);

  categorylist: any[] = [];
  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private fb:FormBuilder){
    this.uploadproduct=this.fb.group({
      MerchantId:['',[Validators.required]],
      CategoryId:['',[Validators.required]],
      ProductName:['',[Validators.required,Validators.minLength(3)]],
      Brand:['',[Validators.required,Validators.minLength(3)]],
      Price:['',[Validators.required,Validators.min(1)]],
      Description:['',[Validators.required,Validators.minLength(3)]],
      ImageSmall:['',[Validators.required]],
      ImageMedium:['',[Validators.required]],
      ImageLarge:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      this.merchantdetails.set(JSON.parse(merchantdata));
    }

    if(this.uploadproduct.get('ProductName')) {
      this.setData();
    }

    this.category();
  }

  setData(){
    this.uploadproduct.patchValue({MerchantId: this.merchantdetails().merchantId});

  }
  onFileSelected(event:any) {
    const file = event.target.files[0];
    if(file){
      this.uploadproduct.patchValue({ImageSmall:file});
      this.uploadproduct.patchValue({ImageMedium:file});
      this.uploadproduct.patchValue({ImageLarge:file});
      this.SelectedFile.set(file);
    }
  }
  upload(){
    if(!this.SelectedFile()){
      alert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append('MerchantId',this.uploadproduct.value.MerchantId);
    formData.append('CategoryId',this.uploadproduct.value.CategoryId);
    formData.append('ProductName',this.uploadproduct.value.ProductName);
    formData.append('Brand',this.uploadproduct.value.Brand);
    formData.append('Price',this.uploadproduct.value.Price);
    formData.append('Description',this.uploadproduct.value.Description);
    formData.append('ImageSmall',this.uploadproduct.value.ImageSmall);
    formData.append('ImageMedium',this.uploadproduct.value.ImageMedium);
    formData.append('ImageLarge',this.uploadproduct.value.ImageLarge);

    console.log('Uploading...',formData);

    this.http.post('https://bueteshop.kredasit.com/api/MerchantPageProducts/UploadFile',formData).subscribe({
      next:(res:any) => {
        console.log('Upload Success:',res);
        this.uploadproduct.reset();
        this.SelectedFile.set(null);
        alert('Product uploaded successfully!');

        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err:any) => {
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
      }
    });
  }

  category(){
    this.http.get(`https://bueteshop.kredasit.com/api/MerchantCategories?merchantId=${this.merchantdetails().merchantId}&onlyActive=true`).subscribe({
      next:(res:any) => {
        console.log('Category List:',res);
        this.categorylist = res;
      },
      error:(err:any) => {
        console.error('Category List Error:',err);
      }
    });
  }
}
