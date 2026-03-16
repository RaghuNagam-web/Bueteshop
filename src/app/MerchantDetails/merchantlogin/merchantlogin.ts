import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-merchantlogin',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './merchantlogin.html',
  styleUrl: './merchantlogin.css'
})
export class Merchantlogin {
  message = signal('');
  signinForm: FormGroup;

  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      remember: [,[Validators.required]]
    });
  }
  login() {
    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }
    if (this.signinForm.valid) {
      const formValue = this.signinForm.value;
      console.log('Form submitted:', formValue);



      this.http.post('https://bueteshop.kredasit.com/api/MerchantDetails/login', formValue).subscribe({
        next:(res:any)=>{
          console.log(res);
          localStorage.setItem('username', formValue.userName);
          localStorage.setItem('merchantid', res.merchantId);

          //merchant details store in localstorge
          localStorage.setItem('MerchantDetails', JSON.stringify(res));

          this.router.navigate(['/merchantlayout/merchantadmin']);
          console.log(res.message)
        },error:(err)=>{
          console.error('Login error:', err);
          this.message.set('Login failed. Please check your credentials.');
        }
      })
    }
  }
}

