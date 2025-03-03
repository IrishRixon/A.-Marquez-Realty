import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ViewportScroller } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { ItemsService } from './services/items/items.service';

@Component({
  selector: 'app-navbar',
  imports: [TieredMenuModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private scrollDispatcher: ScrollDispatcher, 
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2,
    private itemsService: ItemsService
  ) {}

  @ViewChild('nav') nav!: ElementRef;

  items!: MenuItem[];

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

  ngOnInit(): void {
    this.items = this.itemsService.items;
  }
}
