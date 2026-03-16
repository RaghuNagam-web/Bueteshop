import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Banners } from "../banners/banners";
import { Coupons } from "../coupons/coupons";
import { Seasonaloffers } from "../seasonaloffers/seasonaloffers";
import { Pickproducts } from "../pickproducts/pickproducts";

@Component({
  selector: 'app-home',
  imports: [Carousel, Banners, Coupons, Seasonaloffers, Pickproducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
