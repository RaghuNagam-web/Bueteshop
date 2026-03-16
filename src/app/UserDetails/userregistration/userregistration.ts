import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userregistration',
  imports: [ReactiveFormsModule],
  templateUrl: './userregistration.html',
  styleUrl: './userregistration.css'
})
export class Userregistration {
  http = inject(HttpClient);
  register: any;
  router = inject(Router);

  referralCode: any;
  // error = signal<string>('');

  message = signal<string>('');



constructor(private fb: FormBuilder, private route : ActivatedRoute){
  this.register = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')]),
    referralCode: new FormControl(''),
    referredBy: new FormControl(''),
    // registeredDate: new FormControl(''),
    address: new FormControl('', [Validators.required]),
  });
}

ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.referralCode = params.get('referralCode');
      console.log(this.referralCode);
      if (this.referralCode) {
        this.register.get('referredBy')?.setValue(this.referralCode);
      }
      console.log(this.register.value);
    })
  }
   onRegister() {


     if (this.register.invalid) {
       this.register.markAllAsTouched();
       this.message.set('Please fill all required fields correctly.');
       return;
     }



     if(this.register.valid){
      const formvalue = this.register.value;
      console.log('Form submitted:', formvalue);

      this.http.post('https://bueteshop.kredasit.com/api/UserDetails/register', formvalue).subscribe({
      next: (response: any) => {
        alert('User Registered Successfully');
        this.router.navigateByUrl('userlogin');
      },
      error:(err) => {
          console.error('Registration error',err);

          if(err.error && err.error.message){
            alert(err.error.message);
          }
          else if (err.status == 409) {
            alert('User already registered with this email or mobile number.');
          }
          else {
            alert('Registration failed. Please try Again!');
          }
        }
    });
    }
  }
}
