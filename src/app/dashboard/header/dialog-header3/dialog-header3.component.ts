import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteHeaderComponent } from '../auto-complete-header/auto-complete-header.component';
import { TreeSelectHeaderComponent } from '../tree-select-header/tree-select-header.component';
import { DataviewCartComponent } from '../dataview-cart/dataview-cart.component';
import { BadgeModule } from 'primeng/badge';

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
  ],
  templateUrl: './dialog-header3.component.html',
  styleUrl: './dialog-header3.component.css'
})
export class DialogHeader3Component {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
