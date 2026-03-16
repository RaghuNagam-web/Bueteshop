import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './userlogin.html',
  styleUrl: './userlogin.css'
})
export class Userlogin {
message = signal('');
  signinForm: FormGroup;

  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
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

      this.http.post('https://bueteshop.kredasit.com/api/UserDetails/login', formValue)
        .subscribe({
          next: (response: any) => {
              localStorage.setItem('username', formValue.userName);
              localStorage.setItem('userid', response.userId);
              localStorage.setItem('userDetails', JSON.stringify(response));
              this.router.navigate(['/userlayout/useradmin']);
              console.log(response.message)
          },
          error: (err) => {
            console.error('Login error:', err);
            this.message.set('Login failed. Please check your credentials.');
          }
        });
    }

  }
}
