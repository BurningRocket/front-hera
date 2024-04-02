import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteHeaderComponent } from '../auto-complete-header/auto-complete-header.component';
import { TreeSelectHeaderComponent } from '../tree-select-header/tree-select-header.component';

@Component({
  selector: 'app-dialog-header2',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    AutoCompleteHeaderComponent,
    TreeSelectHeaderComponent,
  ],
  templateUrl: './dialog-header2.component.html',
  styleUrl: './dialog-header2.component.css'
})
export class DialogHeader2Component {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
