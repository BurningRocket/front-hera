import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../interfaces/produto';
import { CardModule } from 'primeng/card';

//cnpj,email,telefone, segmento e cep.

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule,
    ProductsDialogComponent,
    CardModule
  ],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {


  products: Product[] = [];
  produtos: Produto[] = [];
  primeirosProdutos: Produto[] = [];
  cart: any[] = [];

  categorias: any[] = [
    { label: 'Todas as categorias', value: null },
    { label: 'Eletrônicos', value: 'eletronicos' },
    { label: 'Livros', value: 'livros' },
    { label: 'Móveis', value: 'moveis' },
    { label: 'Jogos', value: 'jogos' },
    { label: 'Roupas', value: 'roupas' },
    { label: 'Esportes', value: 'esportes' },
    { label: 'Automotivo', value: 'automotivo' }
  ];

  constructor(private productService: ProductService, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
      console.log('Produtos: ', this.products);

    });

    // this.produtoService.getAll().subscribe((data: any) => {
    //   this.produtos = data;
    //   this.primeirosProdutos = this.produtos.slice(0, 10);
    //   console.log('Produtos: ', this.produtos);
    // }, (error: any) => {
    //   console.log('Erro ao buscar dados do servidor');
    // })

  }

  addToCart(product: Product) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter(p => p.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  isProductAdded(product: Product) {
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart') ?? '');
    }
    return this.cart.some(p => p.id === product.id);
  }
}
