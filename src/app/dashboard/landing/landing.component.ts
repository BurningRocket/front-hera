import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CardInicialComponent } from './card-inicial/card-inicial.component';
import { CardPdfComponent } from './card-pdf/card-pdf.component';
import { CardAloneComponent } from './card-alone/card-alone.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeCarouselComponent,
    CardInicialComponent,
    CardPdfComponent,
    CardAloneComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
