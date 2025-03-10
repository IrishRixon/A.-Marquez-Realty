import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: Product[] = [
    {
      image: '/assets/images/azure/6.jpg',
      head: 'THE SUN, THE SAND, THE SEA',
      body: ' Everything you need for a holiday every day await you in San Fernando, Pampanga Discover a secret beach cove and more at AZURE NORTH',
    },
    {
      image: '/assets/images/azure/8.jpg',
      head: 'THE BEST OF PAMPANGA Right at the exit of NLEX',
      body: `Good food, fine furniture, colorful Good food, fine furniture, colorful festivities, a flair for the finer things in life Kapampangans sure know how to live it up. And there’s no better place to experience the good life in Pampanga than in the capital city of San Fernando. And now that the Skyway extension to the North Luzon Expressway is completed, Azure North is approximately just 90 minutes away from Makati`,
    },
    {
      image: '/assets/images/azure/7.png',
      head: 'CONVENIENCES WITHIN MINUTES',
      body: ''
    },
    {
      image: '/assets/images/azure/9.png',
      head: 'Master Plan',
      body: ''
    },
    {
      image: '/assets/images/azure/18.jpg',
      head: '',
      body: ''
    },
    {
      image: '/assets/images/azure/19.jpg',
      head: '',
      body: ''
    },
    {
      image: '/assets/images/azure/20.jpg',
      head: '',
      body: ''
    },

  ];

  getProductsSmall(): Promise<Product[]> {
    return new Promise((resolve) => {
      resolve(this.products);
    });
  }
}
