import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useradmin',
  imports: [NgIf],
  templateUrl: './useradmin.html',
  styleUrl: './useradmin.css'
})
export class Useradmin implements OnInit{
  userdetails = signal<any>(null);

  private http = inject(HttpClient);

  private router = inject(Router);
  constructor(){}

  ngOnInit(): void {
    const userId = localStorage.getItem('userid');
    this.http.get(`https://bueteshop.kredasit.com/api/UserDetails/${userId}`).subscribe({
      next:(res:any) => {
        console.log('user details',res);
        this.userdetails.set(res);
      }
    })
  }
}
