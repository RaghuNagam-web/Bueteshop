import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-merchantsitenav',
  imports: [CommonModule],
  templateUrl: './merchantsitenav.html',
  styleUrl: './merchantsitenav.css'
})
export class Merchantsitenav {
  searchfield:boolean = false;

  search(){
   this.searchfield = !this.searchfield;
   console.log(this.searchfield);
  }
}
