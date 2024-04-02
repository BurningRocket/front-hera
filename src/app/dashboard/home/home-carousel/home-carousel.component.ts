import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../interfaces/produto';

//cnpj,email,telefone, segmento e cep.

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports:[
    CarouselModule,
    TagModule,
    ButtonModule,
    ProductsDialogComponent,
  ],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  products: Product[] = [] ;
  produtos: Produto[] = [];
  primeirosProdutos: Produto [] = [];

  responsiveOptions: any[] | undefined; //Se não for any ele é indefinido

  constructor(private productService: ProductService, private produtoService: ProdutoService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.produtoService.getAll().subscribe((data:any) => {
        this.produtos = data;
        this.primeirosProdutos = this.produtos.slice(0,10);
        console.log('Produtos: ',this.produtos);
      }, (error: any) => {
         console.log('Erro ao buscar dados do servidor');
     })

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
