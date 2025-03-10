import { Component } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Product } from './interface/product';

@Component({
  selector: 'app-section-4',
  standalone: false,
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss'
})
export class Section4Component {
  constructor(private productService: ProductsService) {}

  products!: Product[];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
        this.products = products;
    });

   this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ]
}

}
