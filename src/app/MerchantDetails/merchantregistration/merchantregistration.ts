import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-merchantregistration',
  imports: [ReactiveFormsModule],
  templateUrl: './merchantregistration.html',
  styleUrl: './merchantregistration.css'
})
export class Merchantregistration implements OnInit{
  registerForm: any;

  http = inject(HttpClient);
  router = inject(Router);
  referralCode: any;
  message = signal<string>('');


  constructor(private fb: FormBuilder,private route : ActivatedRoute){
    this.registerForm = new FormGroup({
      merchantName: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      brandName: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      industry: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      mobile: new FormControl ('', [Validators.required, Validators.pattern('^\\d{10}$')]),
      merchatSiteUrl: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl ('', [Validators.required]),
      referralCode: new FormControl(''),
      referredBy: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.referralCode = params.get('referralCode');
      console.log(this.referralCode);

      this.referralCode = this.registerForm.get('referredBy')?.setValue(this.referralCode);
    })
  }
  onSubmit(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      this.message.set('Please fill all required fields correctly.');
      return;
    }

    if(this.registerForm.valid){
      const formvalue = this.registerForm.value;
      console.log('FormSubmitted', formvalue);

      this.http.post('https://bueteshop.kredasit.com/api/MerchantDetails', formvalue)
      .subscribe({
        next: (response:any) => {
          alert('Merchant Registered Successfully');
          this.router.navigateByUrl('merchantlogin');
        },
        error:(err) => {
          console.error('Registration error',err);

          if(err.error && err.error.message){
            alert(err.error.message);
          }
          else if (err.status == 409) {
            alert('Merchant already registered with this email or mobile number.');
          }
          else {
            alert('Registration failed. Please try Again!');
          }
        }

      })
    }
  }
}
