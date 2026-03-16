import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-referaluserpage',
  imports: [FormsModule,NgIf],
  templateUrl: './referaluserpage.html',
  styleUrl: './referaluserpage.css'
})
export class Referaluserpage {

  mobileNumber: any = '';
  sendreferaltouser(){

    //get all userdetails from the localstorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || 'null');

    const referalcode = userDetails.referralCode;

    // clean the number (remove spaces, dashes, etc.)
    const cleanedNumber = this.mobileNumber.replace(/\D/g, '');

    const message = `Hey! Check out this amazing platform https://bueteshop.com/userregistration/${referalcode} .join using my referral!`;
    const encodedMsg = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/+${cleanedNumber}?text=${encodedMsg}`;

    //open to the whatup app
    window.open(whatsappUrl, '_blank');
  }
}
