import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Scrolltop {
   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
