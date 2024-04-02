import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';



@Component({  
  selector: 'app-dock',
  standalone: true,
  imports: [
    DockModule,
    RadioButtonModule,
    SidebarModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class DockComponent implements OnInit {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

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
