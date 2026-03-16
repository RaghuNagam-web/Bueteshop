import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  imports: [ReactiveFormsModule],
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.css'
})
export class Adminlogin {

  @Output() Login = new EventEmitter<any>();
  loginForm:FormGroup;

  username = signal<string>('BueteshopAdmin');
  password = signal<any>('Admin1@#');
  isloggedIn = signal(false);
  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  login() {
    const enteredUsername = this.loginForm.value.username;
    const enteredPassword = this.loginForm.value.password;

    console.log('Entered:', enteredUsername, enteredPassword);

    if (enteredUsername === 'BueteshopAdmin' && enteredPassword === 'Admin1@#') {
      this.isloggedIn.set(true);
      this.Login.emit(this.isloggedIn);
      this.router.navigate(['/adminlayout/sliderimagesupload']);
    }
    else {
      this.isloggedIn.set(false);
      this.Login.emit(this.isloggedIn);
      alert('Invalid username or password');
    }
  }


}
