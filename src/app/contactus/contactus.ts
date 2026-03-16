import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  contactForm:FormGroup;

  private http = inject(HttpClient)
  constructor(private fb : FormBuilder){
    this.contactForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required]],
      contactNumber:['',[Validators.required]],
      message:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  onSubmit(){
      const formvalue = this.contactForm.value;
      console.log(formvalue);

      this.http.post('https://bueteshop.kredasit.com/api/Contact/Submit',formvalue).subscribe({
        next:(res : any) => {
          console.log(res);
          alert('Message sent successfully!');
        },
        error:(err) => {
          console.log('message not sent successfully:', err);
        }
      });
  }
}
