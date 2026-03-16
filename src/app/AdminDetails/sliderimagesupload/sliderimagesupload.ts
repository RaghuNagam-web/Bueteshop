import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliderimagesupload',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sliderimagesupload.html',
  styleUrl: './sliderimagesupload.css'
})
export class Sliderimagesupload {
  sliderform:FormGroup;
  selectedFile: File | null = null;
  private router = inject(Router)
  private http = inject(HttpClient)
  constructor(private fb:FormBuilder){
    this.sliderform=this.fb.group({
      Image:['',[Validators.required]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]]
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if(file){
      this.selectedFile = file;
      this.sliderform.patchValue({Image:file});
    }
  }

  upload(){
    if(!this.selectedFile){
      alert('please select an image first.');
      return;
    }
    const formdata = new FormData();
    formdata.append('Image',this.sliderform.value.Image);
    formdata.append('MerchantURL',this.sliderform.value.MerchantURL);
    console.log('Uploading...',formdata);

    this.http.post('https://bueteshop.kredasit.com/api/AdminContent/upload-hero-image',formdata)
    .subscribe({
      next:(res:any)=>{
        console.log('Upload Success:',res);
        alert('Image uploaded successfully!');
        this.sliderform.reset();
        this.selectedFile = null;

        //Reset the file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err)=>{
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
      }
    })
  }
}
