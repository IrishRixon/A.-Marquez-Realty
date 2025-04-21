import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: Product[] = [
    {
      image: '/assets/images/azure/6.webp',
      head: 'THE SUN, THE SAND, THE SEA',
      body: ' Everything you need for a holiday every day await you in San Fernando, Pampanga Discover a secret beach cove and more at AZURE NORTH',
    },
    {
      image: '/assets/images/azure/8.webp',
      head: 'THE BEST OF PAMPANGA <br> Right at the exit of NLEX',
      body: `Good food, fine furniture, colorful Good food, fine furniture, colorful festivities, a flair for the finer things in life Kapampangans sure know how to live it up. And there’s no better place to experience the good life in Pampanga than in the capital city of San Fernando. And now that the Skyway extension to the North Luzon Expressway is completed, Azure North is approximately just 90 minutes away from Makati`,
    },
    {
      image: '/assets/images/azure/7.png',
      head: 'CONVENIENCES WITHIN MINUTES',
      body: `<ul class='ul-list'>
        <li>1 minute - S&R membership shopping</li>
        <li>3 minutes - Robinson’s Starmills</li>
        <li>4 minutes - SM City Pampanga</li>
        <li>5 minutes - Green City Medical Center</li>
        <li>6 minutes - Our Lady of Sorrows Parish</li>
        <li>7 minutes - Victory Liner Bus</li>
        <li>8 minutes - San Fernandino Hospital</li>
        <li>11 minutes - The University of the Assumption</li>
        <li>12 minutes - St. Scholastica’s Academy</li>
        <li>16 minutes - Metropolitan Cathedral of San Fernando</li>
        <li>17 minutes - The San Fernando City Hall</li>
        <li>40 to 50 minutes - Clark International Airport</li>
    </ul>`,
    },
    {
      image: '/assets/images/azure/9.png',
      head: 'Master Plan',
      body: `Rising on a sprawling prime property, AZURE NORTH is the most anticipated resort-oriented 
residential development north of Metro Manila. <br><br>
 With a white sand beach lagoon, wave and lap pools, an exclusive clubhouse, and resort-inspired 
residences, AZURE NORTH is a paradise waiting to be discovered at the heart of Pampanga.
`,
    },
    {
      image: '/assets/images/azure/18.webp',
      head: 'THE AZURE NORTH BEACH',
      body: `A secret beach cove in the middle of a resort residential development — 
the first of its kind in Northern Luzon. <br><br>
 Powdery white sand, crystal clear waters, and luxurious vacation 
amenities — nestled in the heart of this bustling new metropolis.
<br><br>
 Now, you can kick back and enjoy your beach vacation without ever 
having to leave`,
    },
    {
      image: '/assets/images/azure/19.webp',
      head: `CATCH A WAVE IN SAN FERNANDO`,
      body: `Get Swept Away at the Wave Pool at Azure North. Undulating Waves Create the Perfect Ocean-Inspired Residential Experience`,
    },
    {
      image: '/assets/images/azure/20.webp',
      head: `AZURE NORTH’S 
LUXURIOUS RESORT 
AMENITIES`,
      body: `<ul class='ul-list disc'>
        <li>Beach Pool and Bar</li>
        <li>Wave Pool</li>
        <li>Lap Pool</li>
        <li>Clubhouse</li>
    </ul>`,
    },
    {
      image: '/assets/images/azure/21.webp',
      head: `THE RESORT RESIDENCES AT
 AZURE NORTH`,
      body: ` Three majestic towers that stand 
like mighty sentinels over the 
secret beach cove and the entire 
development.<br><br>- Monaco Tower <br>- Bali Tower <br>- Barbados Tower`
    }
  ];

  getProductsSmall(): Promise<Product[]> {
    return new Promise((resolve) => {
      resolve(this.products);
    });
  }
}
