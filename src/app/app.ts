import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finalbeauty');

    showButton = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showButton = yOffset > 300; // Show button after scrolling 300px
    }

    scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
