import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-myearnings',
  imports: [NgIf],
  templateUrl: './myearnings.html',
  styleUrl: './myearnings.css'
})
export class Myearnings implements OnInit {

  // earnings = signal<any[]>([]);     // store array
  userdata = signal<number>(0);     // store count
  message = signal('');

  id = localStorage.getItem('userid');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`https://bueteshop.kredasit.com/api/AToZ/my-earnings/${this.id}`)
      .subscribe({
        next: (res : any) => {
          console.log('earnings:', res.totalPoints);

          this.userdata.set(res.totalPoints);         // store array
          // this.userdata.set(res.totalPoints.length);  // store count

          console.log("count:", this.userdata());
        },
        error: (err) => {
          console.log(err);
          this.message.set("No earnings found");
          // this.earnings.set([]);
        }
      });
  }
}
