import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../interfaces/productservice';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-categorias-inicial',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule,
  ],
  templateUrl: './categorias-inicial.component.html',
  styleUrl: './categorias-inicial.component.css'
})
export class CategoriasInicialComponent {

}
