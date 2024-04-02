import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InputGroupCheckoutComponent } from './input-group-checkout/input-group-checkout.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    HeaderComponent,
    InputGroupCheckoutComponent,
    
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
