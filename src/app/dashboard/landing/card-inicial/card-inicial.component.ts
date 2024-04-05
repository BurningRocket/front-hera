import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-inicial',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
  ],
  templateUrl: './card-inicial.component.html',
  styleUrl: './card-inicial.component.css'
})
export class CardInicialComponent {

}
