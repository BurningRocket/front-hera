import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteHeaderComponent } from '../auto-complete-header/auto-complete-header.component';

@Component({
  selector: 'app-dialog-header',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    AutoCompleteHeaderComponent,
  ],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.css'
})
export class DialogHeaderComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
