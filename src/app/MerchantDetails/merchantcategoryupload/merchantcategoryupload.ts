import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantcategoryupload',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './merchantcategoryupload.html',
  styleUrl: './merchantcategoryupload.css'
})
export class Merchantcategoryupload implements OnInit{
categoryform:FormGroup;
merchantdetails = signal<any>({});
  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private fb:FormBuilder){
    this.categoryform=this.fb.group({
      merchantId:['',[Validators.required]],
      categoryName:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    const merchantdata = localStorage.getItem('MerchantDetails');
    if(merchantdata){
      this.merchantdetails.set(JSON.parse(merchantdata));
    }

    if(this.categoryform.get('categoryName')){
      this.setData();
    }
  }

  setData(){
    this.categoryform.patchValue({merchantId: this.merchantdetails().merchantId});
  }
  upload() {
    const formvalue = this.categoryform.value;
    this.http.post('https://bueteshop.kredasit.com/api/MerchantCategories',formvalue).subscribe({
      next:(res:any) => {
        console.log('upload category:',res);
        this.categoryform.reset();
        alert('Category uploaded successfully!');
      },
      error:(err:any) => {
        console.log('upload category error:',err);
        alert('Category upload failed!');
      }
    })
  }
}
