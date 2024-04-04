import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteHeaderComponent } from '../auto-complete-header/auto-complete-header.component';
import { TreeSelectHeaderComponent } from '../tree-select-header/tree-select-header.component';
import { DataviewCartComponent } from '../dataview-cart/dataview-cart.component';
import { BadgeModule } from 'primeng/badge';
import { Product } from '../../../interfaces/product';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-header3',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    AutoCompleteHeaderComponent,
    TreeSelectHeaderComponent,
    DataviewCartComponent,
    BadgeModule,
    DataViewModule,
    CommonModule
  ],
  templateUrl: './dialog-header3.component.html',
  styleUrl: './dialog-header3.component.css'
})
export class DialogHeader3Component {
  visible: boolean = false;
  products: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.updateCart()
  }

  updateCart() {
    if(localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart') || '{}');
    }
  }

  showDialog() {
    this.updateCart();
    this.visible = true;
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.updateCart();
  }
}
