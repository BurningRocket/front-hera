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
  selector: 'app-dataview',
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
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.css'
})
export class DataviewComponent {
  products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));
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
