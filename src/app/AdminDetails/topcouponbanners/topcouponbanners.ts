
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bannersservice } from '../../ServiceComponent/bannersservice';

@Component({
  selector: 'app-topcouponbanners',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './topcouponbanners.html',
  styleUrl: './topcouponbanners.css'
})
export class Topcouponbanners {

  topcouponbannerform:FormGroup;

  selectedFile : File | null = null;
  uploading = signal<boolean>(false);
  frame='';

  constructor(private fb:FormBuilder , private topcouponbanners:Bannersservice){
    this.topcouponbannerform = this.fb.group({
      FileName:['',[Validators.required,Validators.minLength(3)]],
      ContentType:['',[Validators.required,Validators.minLength(3)]],
      Frame:['',[Validators.required,Validators.minLength(3)]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],
      UploadDate:['',[Validators.required]],
      ImageData:['',[Validators.required]]
    });
  }
  onFileSelected(event : any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile = file;
      this.topcouponbannerform.patchValue({ImageData:file});
    }
  }
  upload(){
    if(!this.selectedFile){
      alert('please select an image first.');
      return;
    }
    else{
      this.frame = this.topcouponbannerform.get('Frame')?.value
      alert('frame '+ this.frame);
    }


    const formData = new FormData();

    formData.append('FileName',this.topcouponbannerform.value.FileName);
    formData.append('ContentType',this.topcouponbannerform.value.ContentType);
    formData.append('Frame',this.topcouponbannerform.value.Frame);
    formData.append('MerchantURL',this.topcouponbannerform.value.MerchantURL);
    formData.append('UploadDate',this.topcouponbannerform.value.UploadDate);
    formData.append('ImageData',this.topcouponbannerform.value.ImageData);

    console.log('Uploading...',formData);

    this.uploading.set(true);

    if(this.frame == "TcLeft"){
      this.topcouponbanners.topcouponsleftbanner(formData).subscribe({
        next:(res:any) => {
          console.log('Upload Success:',res);
          alert('Left Banner uploaded successfully!');
          this.topcouponbannerform.reset();
          this.selectedFile = null;
          this.uploading.set(false);
          //Reset the file input
          const fileInput = document.getElementById('fileInput') as HTMLInputElement;
          if(fileInput) fileInput.value = '';
        },
        error:(err) => {
          console.error('Upload Error:',err);
          alert('Upload failed. Please check your input or server.');
          this.uploading.set(false);
        }
      });
    }
    else {
      this.topcouponbanners.topcouponsrightbanner(formData).subscribe({
        next:(res:any) => {
          console.log('Upload Success:',res);
          alert('Right Banner uploaded successfully!');
          this.topcouponbannerform.reset();
          this.selectedFile = null;
          this.uploading.set(false);
          //Reset the file input
          const fileInput = document.getElementById('fileInput') as HTMLInputElement;
          if(fileInput) fileInput.value = '';
        },
        error:(err) => {
          console.error('Upload Error:',err);
          alert('Upload failed. Please check your input or server.');
          this.uploading.set(false);
        }
      });
    }

  }
}
