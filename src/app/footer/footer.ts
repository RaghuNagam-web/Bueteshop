import { Scrolltop } from './../ServiceComponent/scrolltop';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [NgStyle, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
emailform:FormGroup;

private http = inject(HttpClient);

  constructor(private fb:FormBuilder , private Scrolltopservice:Scrolltop){
    this.emailform = this.fb.group({
      emailAddress:['',Validators.required],
    });
  }
  subscribe(){
    console.log(this.emailform.value);
    this.http.post('https://bueteshop.kredasit.com/api/AToZ/NewsLetter-Post',this.emailform.value, { responseType: 'text' } ).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Subscribed successfully!');
        this.emailform.reset();
      },
      error:(err)=>{
        console.error(err);
      }

    });
  }
  scroll(){
    this.Scrolltopservice.scrollToTop();
  }
}

