
import { Component } from '@angular/core';
import { Bannerimagesupload } from './AdminDetails/bannerimagesupload/bannerimagesupload';

import { Savemerchantstore } from './MerchantDetails/savemerchantstore/savemerchantstore';
import { Merchantcategoryupload } from './MerchantDetails/merchantcategoryupload/merchantcategoryupload';
import { Merchanturl } from './MerchantDetails/merchanturl/merchanturl';

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';
import { Banners } from './banners/banners';
import { Coupons } from './coupons/coupons';
import { Seasonaloffers } from './seasonaloffers/seasonaloffers';
import { Categories } from './categories/categories';
import { Bestoffers } from './bestoffers/bestoffers';
import { Topcoupons } from './topcoupons/topcoupons';
import { Userlogin } from './UserDetails/userlogin/userlogin';
import { Userregistration } from './UserDetails/userregistration/userregistration';
import { Merchantlogin } from './MerchantDetails/merchantlogin/merchantlogin';
import { Merchantregistration } from './MerchantDetails/merchantregistration/merchantregistration';
import { Userlayout } from './UserDetails/userlayout/userlayout';
import { Useradmin } from './UserDetails/useradmin/useradmin';
import { Myearnings } from './UserDetails/myearnings/myearnings';
import { Referaluserpage } from './UserDetails/referaluserpage/referaluserpage';
import { Admin } from './UserDetails/admin/admin';

import { Merchantadmin } from './MerchantDetails/merchantadmin/merchantadmin';
import { Merchantcouponsupload } from './MerchantDetails/merchantcouponsupload/merchantcouponsupload';
import { Referalmerchantpage } from './MerchantDetails/referalmerchantpage/referalmerchantpage';
import { Pickyourproducts } from './MerchantDetails/pickyourproducts/pickyourproducts';
import { Merchantcreation } from './MerchantDetails/merchantcreation/merchantcreation';

import { Merchantuploadproducts } from './MerchantDetails/merchantuploadproducts/merchantuploadproducts';
import { Merchantstoreproducts } from './MerchantDetails/merchantstoreproducts/merchantstoreproducts';
import { Merchantlayout } from './MerchantDetails/merchantlayout/merchantlayout';
import { Adminlayout } from './AdminDetails/adminlayout/adminlayout';
import { Sliderimagesupload } from './AdminDetails/sliderimagesupload/sliderimagesupload';
import { Bannersupload } from './AdminDetails/bannersupload/bannersupload';

import { Couponsapproval } from './AdminDetails/couponsapproval/couponsapproval';
import { Dashboard } from './AdminDetails/dashboard/dashboard';
import { Accountinformation } from './AdminDetails/accountinformation/accountinformation';
import { Reports } from './AdminDetails/reports/reports';
import { Seasonaloffersupload } from './AdminDetails/seasonaloffersupload/seasonaloffersupload';
import { Merchantdashboard } from './MerchantDetails/merchantdashboard/merchantdashboard';
import { Popularity } from './popularity/popularity';
import { Allcategories } from './allcategories/allcategories';
import { Newest } from './newest/newest';
import { Categorybanners } from './AdminDetails/categorybanners/categorybanners';
import { Topcouponbanners } from './AdminDetails/topcouponbanners/topcouponbanners';
import { Faq } from './faq/faq';
import { Howitworks } from './howitworks/howitworks';
import { Missingcashback } from './missingcashback/missingcashback';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';
import { Carrers } from './carrers/carrers';
import { Termsofservices } from './termsofservices/termsofservices';
import { Privacypolicy } from './privacypolicy/privacypolicy';
import { Bestofferbanners } from './AdminDetails/bestofferbanners/bestofferbanners';
import { Pickproducts } from './pickproducts/pickproducts';
import { Productapproval } from './AdminDetails/productapproval/productapproval';
import { Adminlogin } from './AdminDetails/adminlogin/adminlogin';
import { Review } from './UserDetails/review/review';
import { Reviews } from './MerchantDetails/reviews/reviews';
import { Customerreview } from './customerreview/customerreview';
import { Bueteshopreview } from './bueteshopreview/bueteshopreview';
import { Newuser } from './newuser/newuser';
import { Merchantsite } from './merchantsites/merchantsite/merchantsite';


import { authChildGuard, authGuard } from './authguard-guard';
import { merchantauthChildGuard, merchantauthdeactivateGuard, merchantauthGuard } from './merchantguard-guard';








export const routes: Routes = [
  {path:'',component:Home},
  {path:'header',component:Header},
  {path:'carousel',component:Carousel},
  {path:'banners',component:Banners},
  {path:'coupons',component:Coupons},
  {path:'pickproducts',component:Pickproducts},
  {path:'seasonaloffers',component:Seasonaloffers},
  {path:'footer',component:Footer},
  {path:'customerreview',component:Customerreview, outlet:'popup'},
  {path:'bueteshopreview',component:Bueteshopreview, outlet:'popup'},
  {path:'newuser',component:Newuser,outlet:'popup'},
  {path:'faq',component:Faq},
  {path:'howitworks',component:Howitworks},
  {path:'missingcashback',component:Missingcashback},
  {path:'contactus',component:Contactus},
  {path:'aboutus',component:Aboutus},
  {path:'carrers',component:Carrers},
  {path:'termsofservices',component:Termsofservices},
  {path:'privacypolicy',component:Privacypolicy},
  {path:'merchantsite',component:Merchantsite},



  {path:'',component:Categories,
    children:[
      {path:'popularity',component:Popularity},
      {path:'allcategories',component:Allcategories},
      {path:'newest',component:Newest},
    ]
  },
  {path:'topcoupons',component:Topcoupons},
  {path:'bestoffers',component:Bestoffers},
  {path:'userlogin',component:Userlogin},
  {path:'userregistration',component:Userregistration},
  {path:'userregistration/:referralCode',component:Userregistration},
  {path:'merchantlogin',component:Merchantlogin},
  {path:'merchantregistration',component:Merchantregistration},
  {path:'merchantregistration/:referralCode',component:Merchantregistration},

  {path:'userlayout',component:Userlayout,
    canActivate:[authGuard],
    canActivateChild:[authChildGuard],
    children: [
      {path:'useradmin',component:Useradmin},
      {path:'referaluserpage',component:Referaluserpage },
      {path:'review',component:Review},
      {path:'myearnings',component:Myearnings},
      {path:'admin',component:Admin},
    ]
  },

  {path:'merchantlayout',component:Merchantlayout,
    canActivate:[merchantauthGuard],
    canDeactivate:[merchantauthChildGuard],
    children:[
      // {path:'merchantdashboard',component:Merchantdashboard},
      {path:'merchantadmin',component:Merchantadmin},
      {path:'merchantcouponsupload',component:Merchantcouponsupload,canDeactivate:[merchantauthdeactivateGuard]},
      {path:'referalmerchantpage',component:Referalmerchantpage},
      {path:'pickyourproducts',component:Pickyourproducts},
      {path:'reviews',component:Reviews},
      {path:'merchantcreation',component:Merchantcreation},
      {path:'merchanturl',component:Merchanturl},
      {path:'savemerchantstore',component:Savemerchantstore},
      {path:'merchantuploadproducts',component:Merchantuploadproducts},
      {path:'merchantstoreproducts',component:Merchantstoreproducts},
      {path:'merchantcategoryupload',component:Merchantcategoryupload},
    ]
  },


  {path:'adminlayout',component:Adminlayout,
    
    children: [
      // {path:'dashboard',component:Dashboard},
      // {path:'accountinformation',component:Accountinformation},
      // {path:'reports',component:Reports},
      {path:'adminlogin',component:Adminlogin},
      {path:'admin',component:Admin},
      {path:'sliderimagesupload',component:Sliderimagesupload},
      {path:'bannerimagesupload',component:Bannerimagesupload},
      {path:'bannersupload',component:Bannersupload},
      {path:'categorybanners',component:Categorybanners},
      {path:'topcouponbanners',component:Topcouponbanners},
      {path:'bestofferbanners',component:Bestofferbanners},
      {path:'seasonaloffersupload',component:Seasonaloffersupload},
      {path:'couponsapproval',component:Couponsapproval},
      {path:'productapproval',component:Productapproval},
    ]
  },



];
