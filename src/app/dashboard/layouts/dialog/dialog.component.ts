import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
