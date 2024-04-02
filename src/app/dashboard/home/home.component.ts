import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
