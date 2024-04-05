import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ProductsPageComponent } from '../products-page/products-page.component';

@Component({
  selector: 'app-products-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    ProductsPageComponent,
  ],
  templateUrl: './products-dialog.component.html',
  styleUrl: './products-dialog.component.css'
})
export class ProductsDialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
