import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-alone',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
  ],
  templateUrl: './card-alone.component.html',
  styleUrl: './card-alone.component.css'
})
export class CardAloneComponent {

}
