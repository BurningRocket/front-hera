import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../../services/produto.service';


@Component({
  selector: 'app-carousel-responsive',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule,
    RadioButtonModule,
    CommonModule,
  ],
  templateUrl: './carousel-responsive.component.html',
  styleUrl: './carousel-responsive.component.css'
})
export class CarouselResponsiveComponent {
  products: Product[] = [];
  produtos: any[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService, private produtoService: ProdutoService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '1220px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '1100px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  
}
