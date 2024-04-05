import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../../interfaces/photoservice';
import { Images } from '../../../interfaces/images';


@Component({
  selector: 'app-banner-products-home1',
  standalone: true,
  imports: [
    GalleriaModule,
  ],
  templateUrl: './banner-products-home1.component.html',
  styleUrl: './banner-products-home1.component.css',
  providers: [
    PhotoService,
  ],
})
export class BannerProductsHome1Component {
}
