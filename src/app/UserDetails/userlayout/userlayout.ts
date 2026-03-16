import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { NavigationEnd, Router,RouterModule} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-userlayout',
  imports: [RouterModule],
  templateUrl: './userlayout.html',
  styleUrl: './userlayout.css',
})
export class Userlayout {
  currentpage: string = '';

  http = inject(HttpClient);
  router = inject(Router);
  name = localStorage.getItem('username');

 constructor() {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const url = this.router.url;

      if(url.includes('referaluserpage')){
        this.currentpage = 'Referaluserpage';
      }
      else if(url.includes('review')){
        this.currentpage = 'Reviews';
      }
      else if(url.includes('myearnings')){
        this.currentpage = 'Myearnings';
      }
      // else if(url.includes('admin')){
      //   this.currentpage = 'admin';
      // }
      else if(url.includes('help')){
        this.currentpage = 'Help';
      }
      else if(url.includes('settings')){
        this.currentpage = 'Settings';
      }
      else {
        this.currentpage = 'User Admin';
      }
    });

 }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
    this.router.navigate(['/']);
  }
}
