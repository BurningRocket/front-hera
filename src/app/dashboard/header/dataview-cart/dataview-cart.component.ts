import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { NgIf } from '@angular/common';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dataview-cart',
  standalone: true,
  imports: [
    DataViewModule,
    RatingModule,
    TagModule,
    NgIf,
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './dataview-cart.component.html',
  styleUrl: './dataview-cart.component.css'
})
export class DataviewCartComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    if(localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart') || '{}');
    }
  }

  getSeverity (product: Product) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };
}
