// import { Seasonaloffers } from './../../seasonaloffers/seasonaloffers';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-seasonaloffersupload',
//   imports: [ReactiveFormsModule,CommonModule],
//   templateUrl: './seasonaloffersupload.html',
//   styleUrl: './seasonaloffersupload.css'
// })
// export class Seasonaloffersupload {
// seasonaloffersform:FormGroup;

// private router = inject(Router)
// private http = inject(HttpClient)
// constructor(private fb:FormBuilder){
//   this.seasonaloffersform=this.fb.group({
//     Data:['',[Validators.required]],
//     MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],
//     postion:['']
//   });
// }

//   upload(){
//     // debugger
//     // console.log(this.seasonaloffersform.value);

//     this.http.post('https://bueteshop.kredasit.com/api/SeasonalOffer_Images/SeasonalOffer_Images',this.seasonaloffersform.value).subscribe(
//       (res:any)=>{
//         console.log(res);
//       }
//     );
//   }
// }

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seasonaloffersupload',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './seasonaloffersupload.html',
  styleUrls: ['./seasonaloffersupload.css']
})
export class Seasonaloffersupload {
  seasonaloffersform: FormGroup;
  selectedFile: File | null = null;

  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.seasonaloffersform = this.fb.group({
      Data: ['', [Validators.required]],  // file
      MerchantURL: ['', [Validators.required, Validators.pattern('https?://.+')]],
      position: ['']
    });
  }

  // ✅ file selection event
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.seasonaloffersform.patchValue({ Data: file }); //Push data to formgroup
    }
  }

  // ✅ upload method
  upload() {
    // if (!this.selectedFile) {
    //   alert('Please select an image first.');
    //   return;
    // }


    const formData = new FormData();
    formData.append('Data', this.seasonaloffersform.value.Data); // ✅ append actual file object, not just name
    formData.append('MerchantURL', this.seasonaloffersform.value.MerchantURL);
    formData.append('position', this.seasonaloffersform.value.position || '');

    console.log('Uploading...', formData);

    this.http.post(
      'https://bueteshop.kredasit.com/api/SeasonalOffer_Images/SeasonalOffer_Images',
      formData
    ).subscribe({
      next: (res: any) => {
        console.log('Upload Success:', res);
        alert('Offer uploaded successfully!');
        this.seasonaloffersform.reset();
        this.selectedFile = null;

        // reset the file input
        
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error: (err) => {
        console.error('Upload Error:', err);
        alert('Upload failed. Please check your input or server.');
      }
    });
  }
}
