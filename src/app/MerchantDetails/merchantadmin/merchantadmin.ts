import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchantadmin',
  imports: [NgIf],
  templateUrl: './merchantadmin.html',
  styleUrl: './merchantadmin.css'
})
export class Merchantadmin implements OnInit {
  merchantdata = signal<any>(null);

  private http = inject(HttpClient)
  private router = inject(Router)
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const merchantId = localStorage.getItem('merchantid');
    this.http.get(`https://bueteshop.kredasit.com/api/MerchantDetails/${merchantId}`).subscribe({
      next:(res:any) => {
        console.log('Merchant details',res);
        this.merchantdata.set(res);
      }
    })
  }
}
