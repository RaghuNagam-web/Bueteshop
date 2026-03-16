import { Dashboard } from './../AdminDetails/dashboard/dashboard';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, effect, HostListener, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Scrolltop } from '../ServiceComponent/scrolltop';
import { ReactiveFormsModule } from '@angular/forms';
import { Customerreview } from "../customerreview/customerreview";
import { Bueteshopreview } from '../bueteshopreview/bueteshopreview';
import { Newuser } from '../newuser/newuser';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule,Customerreview,Bueteshopreview,Newuser],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  islogin = signal<boolean>(false);
  username = signal<string>('');
  userdata = signal<string>('');
  merchantdata = signal<string>('');
  constructor(private Scrolltopservice:Scrolltop,private router:Router){
    // console.log(this.islogin());
    // effect(() => {
    //   console.log('login:',this.islogin());
    // })
  }
  scroll(){
    this.Scrolltopservice.scrollToTop();
  }

  stickynav = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.stickynav = yOffset > 10; // Show button after scrolling 300px
    }


    ngOnInit(): void {
      this.time();
    }

    time(){
      setInterval(() => {
        this.getusername();
      }, 1000);
    }

    getusername(){
      const userdetails = localStorage.getItem('userDetails');

      if (userdetails) {
        const userData = JSON.parse(userdetails);
        const username = userData.username;
        // console.log('name:',username);
        this.userdata.set(username);
        this.username.set(username);
        this.islogin.set(true);
      }
      else{
        // console.log('No user data found in localStorage');
        this.islogin.set(false);

        const merchantdetails = localStorage.getItem('MerchantDetails');

        if(merchantdetails){
          const merchantData = JSON.parse(merchantdetails);
          const merchantname = merchantData.merchantName;
          // console.log('name:',merchantname);
          this.merchantdata.set(merchantname);
          this.username.set(merchantname);
          this.islogin.set(true);
        }
        else{
          // console.log('No merchant data found in localStorage');
          this.islogin.set(false);
        }
      }
    }

    navigate(){
      if(this.userdata()){
        this.router.navigate(['/userlayout/useradmin']);
      }
      else if(this.merchantdata()){
        this.router.navigate(['/merchantlayout/merchantadmin']);
      }
    }

    logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('userDetails');
      localStorage.removeItem('MerchantDetails');
      this.islogin.set(false);
    }

    review1 = signal('customer');
    review( data :string ){
      this.review1.set(data);
    }
}
