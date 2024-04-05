import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-pdf',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
  ],
  templateUrl: './card-pdf.component.html',
  styleUrl: './card-pdf.component.css'
})
export class CardPdfComponent {

}
