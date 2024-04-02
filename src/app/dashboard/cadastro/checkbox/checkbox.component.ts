import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    CheckboxModule,
    FormsModule,
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  pizza: string[] = [];
}
