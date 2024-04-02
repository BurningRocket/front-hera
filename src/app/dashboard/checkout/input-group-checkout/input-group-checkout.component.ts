import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-input-group-checkout',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './input-group-checkout.component.html',
  styleUrl: './input-group-checkout.component.css'
})
export class InputGroupCheckoutComponent {

}
