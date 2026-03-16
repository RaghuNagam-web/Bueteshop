import { Component, ViewEncapsulation } from '@angular/core';
import { Merchantsitenav } from "../merchantsitenav/merchantsitenav";
import { RouterModule } from "@angular/router";
import { Merchantstore } from "../merchantstore/merchantstore";
import { Merchantbreadcrumb } from "../merchantbreadcrumb/merchantbreadcrumb";
import { Loadingbannerimage } from '../loadingbannerimage/loadingbannerimage';


@Component({
  selector: 'app-merchantsite',
  imports: [Merchantsitenav, RouterModule, Merchantstore, Merchantsitenav, Merchantbreadcrumb, Loadingbannerimage],
  templateUrl: './merchantsite.html',
  styleUrl: './merchantsite.css',
  encapsulation: ViewEncapsulation.None
})
export class Merchantsite {

}
