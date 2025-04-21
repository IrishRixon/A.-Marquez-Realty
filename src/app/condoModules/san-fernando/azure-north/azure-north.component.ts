import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Lenis from 'lenis';
import { Product } from './section-4/interface/product';

@Component({
  selector: 'app-azure-north',
  standalone: false,
  templateUrl: './azure-north.component.html',
  styleUrl: './azure-north.component.scss',
})
export class AzureNorthComponent {
  constructor(private renderer: Renderer2) {
    
  }

  @ViewChild('head') head!: ElementRef;
  @ViewChild('para') para!: ElementRef;
  @ViewChild('image') image!: any;

  showOverlay: boolean = false;
  showSkeleton: boolean = false;

  selectedProduct: Product = {
    image: '/assets/images/azure/8.webp',
    head: 'THE BEST OF PAMPANGA Right at the exit of NLEX',
    body: `Good food, fine furniture, colorful Good food, fine furniture, colorful festivities, a flair for the finer things in life Kapampangans sure know how to live it up. And there’s no better place to experience the good life in Pampanga than in the capital city of San Fernando. And now that the Skyway extension to the North Luzon Expressway is completed, Azure North is approximately just 90 minutes away from Makati`,
  };

  setSelectedProduct(event: Product) {
    this.showOverlay = true;
    this.selectedProduct = event;
  }
}
