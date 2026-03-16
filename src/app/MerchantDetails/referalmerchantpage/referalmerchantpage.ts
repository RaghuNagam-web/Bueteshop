import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-referalmerchantpage',
  imports: [FormsModule,NgIf],
  templateUrl: './referalmerchantpage.html',
  styleUrl: './referalmerchantpage.css'
})
export class Referalmerchantpage {
  mobileNumber : any = '';

  sendreferaltomerchant(){

    //get merchantdetails from the localStorage
    const merchantDetails = JSON.parse(localStorage.getItem('MerchantDetails') || 'null');

    const referralCode = merchantDetails.referralCode;

    // clean the number (remove spaces, dashes, etc.)
    const cleanedNumber = this.mobileNumber.replace(/\D/g, '');

    const message = `Hey! Check out this amazing platform https://bueteshop.com/merchantregistration/${referralCode} .join using my referral!`;
    const encodedMsg = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/+${cleanedNumber}?text=${encodedMsg}`;

    //open to the whatup app
    window.open(whatsappUrl, '_blank');

  }
}
