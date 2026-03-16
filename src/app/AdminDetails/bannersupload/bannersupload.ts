import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bannersupload',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bannersupload.html',
  styleUrl: './bannersupload.css'
})
export class Bannersupload {
  bannerform:FormGroup;
  selectedFile:File|null=null;

  private http = inject(HttpClient);
  constructor(private fb:FormBuilder){
    this.bannerform=this.fb.group({
      Data:['',[Validators.required]],
      postion:['',[Validators.required]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],

    });
  }
  onFileSelected(event : any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile = file;
      this.bannerform.patchValue({Data:file});
    }
  }
  upload(){
    if(!this.selectedFile){
      alert('please select an image first.');
      return;
    }


    const formData = new FormData();
    formData.append('Data',this.bannerform.value.Data);
    formData.append('postion',this.bannerform.value.postion);
    formData.append('MerchantURL',this.bannerform.value.MerchantURL);

    console.log('Uploading...',formData);

    this.http.post(
      'https://bueteshop.kredasit.com/api/TopBanner/TTC_Images',
      formData
    ).subscribe({
      next:(res:any)=>{
        console.log('Upload Success:',res);
        alert('Banner uploaded successfully!');
        this.bannerform.reset();
        this.selectedFile = null;
        //Reset the file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err)=>{
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
      }
    });
  }
}
