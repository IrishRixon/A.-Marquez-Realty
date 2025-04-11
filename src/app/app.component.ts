import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ARealty';

  constructor(private primeng: PrimeNG, private renderer: Renderer2, private router: Router) {
    this.primeng.theme.set({
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
        darkModeSelector: '.my-app-dark',
      },
    });
  }

  @ViewChild('header') header!: ElementRef;

  closeHeader() {
    this.renderer.addClass(this.header.nativeElement, 'close');
  }

  openHeader() {
    this.renderer.removeClass(this.header.nativeElement, 'close')
  }

  ngAfterViewInit(): void {
    // Initialize Lenis 
    // const lenis = new Lenis({
    //   autoRaf: true,
    // });
  }
} 
