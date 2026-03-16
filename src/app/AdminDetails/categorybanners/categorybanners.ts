import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bannersservice } from '../../ServiceComponent/bannersservice';


@Component({
  selector: 'app-categorybanners',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './categorybanners.html',
  styleUrl: './categorybanners.css'
})
export class Categorybanners {
  categorybannerform:FormGroup;

  uploading = signal<boolean>(false);
  selectedFile : File | null = null;
  frame = ''



  constructor(private fb:FormBuilder , private category : Bannersservice){
    this.categorybannerform = this.fb.group({
      FileName:['',[Validators.required,Validators.minLength(3)]],
      ContentType:['',[Validators.required,Validators.minLength(3)]],
      Frame:['',[Validators.required,Validators.minLength(3)]],
      MerchantURL:['',[Validators.required,Validators.pattern('https?://.+')]],
      UploadDate:['',[Validators.required]],
      ImageData:['',[Validators.required]]
    });
  }
  onFileSelected(event : any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile = file;
      this.categorybannerform.patchValue({ImageData:file});
    }
  }
  upload(){
    if(!this.selectedFile){
      alert('please select an image first.');
      return;
    }
    else{
      this.frame = this.categorybannerform.get('Frame')?.value
      alert('frame :'+ this.frame)
    }


    const formData = new FormData();

    formData.append('FileName',this.categorybannerform.value.FileName);
    formData.append('ContentType',this.categorybannerform.value.ContentType);
    formData.append('Frame',this.categorybannerform.value.Frame);
    formData.append('MerchantURL',this.categorybannerform.value.MerchantURL);
    formData.append('UploadDate',this.categorybannerform.value.UploadDate);
    formData.append('ImageData',this.categorybannerform.value.ImageData);

    console.log('Uploading...',formData);

    this.uploading.set(true);



    if(this.frame == "CatLeft"){
      this.category.categoryleftbanner(formData).subscribe({
        next:(res:any) => {
          debugger
          console.log('Upload Success:',res);
          alert('Left Banner uploaded successfully!');
          this.categorybannerform.reset();
          this.selectedFile = null;
          this.uploading.set(false);
          //Reset the file input
          const fileInput = document.getElementById('fileInput') as HTMLInputElement;
          if(fileInput) fileInput.value = '';
        },
        error:(err) => {
          console.error('Upload Error:',err);
          alert('Upload failed. Please check your input or server.');
          this.uploading.set(false);
        }
      });
    }
    else{
      this.category.categoryrightbanner(formData).subscribe({
      next:(res:any) => {
        console.log('Upload Success:',res);
        alert('Right Banner uploaded successfully!');
        this.categorybannerform.reset();
        this.selectedFile = null;
        this.uploading.set(false);
        //Reset the file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      },
      error:(err) => {
        console.error('Upload Error:',err);
        alert('Upload failed. Please check your input or server.');
        this.uploading.set(false);
      }
    });
    }
  }
}
