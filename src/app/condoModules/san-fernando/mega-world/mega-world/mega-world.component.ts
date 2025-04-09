import { Component } from '@angular/core';
import Lenis from 'lenis';

@Component({
  selector: 'app-mega-world',
  standalone: false,
  templateUrl: './mega-world.component.html',
  styleUrl: './mega-world.component.scss'
})
export class MegaWorldComponent {

  ngAfterViewInit(): void {
    // Initialize Lenis
    // const lenis = new Lenis({
    //   autoRaf: true,
    // });
  }
}
