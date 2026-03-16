import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newuser',
  imports: [],
  templateUrl: './newuser.html',
  styleUrl: './newuser.css'
})
export class Newuser {
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('https://bueteshop.kredasit.com/api/UserDetails/getPublicStats').subscribe({
      next:(res:any) =>{
        console.log('Public Status',res);
      },
      error:(err) =>{
        console.log(err);
      }
    })
  }

}
