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

}
