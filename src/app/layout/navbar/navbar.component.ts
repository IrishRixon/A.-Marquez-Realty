import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ViewportScroller } from '@angular/common';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private scrollDispatcher: ScrollDispatcher, 
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2
  ) {}

  @ViewChild('nav') nav!: ElementRef;

  navColorBasedOnScroll() {
    this.scrollDispatcher.scrolled().subscribe(() => {{
      const scrollPosition = this.viewportScroller.getScrollPosition();
      const verticalPosition = scrollPosition[1];

      if(verticalPosition >= 70) {
        this.renderer.addClass(this.nav.nativeElement, 'fully-visible');
      }
      else {
        this.renderer.removeClass(this.nav.nativeElement, 'fully-visible');
      }
    }});
  }

  ngAfterViewInit(): void {
    this.navColorBasedOnScroll();
  }
}
