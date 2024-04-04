import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteHeaderComponent } from '../auto-complete-header/auto-complete-header.component';
import { TreeSelectHeaderComponent } from '../tree-select-header/tree-select-header.component';
import { HeaderPanelmenuComponent } from '../header-panelmenu/header-panelmenu.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-dialog-header4',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    AvatarModule,
    AutoCompleteHeaderComponent,
    TreeSelectHeaderComponent,
    HeaderPanelmenuComponent,
    LoginDialogComponent
  ],
  templateUrl: './dialog-header4.component.html',
  styleUrl: './dialog-header4.component.css'
})
export class DialogHeader4Component {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
