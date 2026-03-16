
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Categoryservice {
  category = signal<string>('');  // holds selected category

  constructor() {}

  // Setter: update category value
  setcategoryname(data: string) {
    this.category.set(data);
    console.log('Category set:', this.category());
  }

  // Getter: read current category
  getcategoryname() {
    return this.category();
  }


}
