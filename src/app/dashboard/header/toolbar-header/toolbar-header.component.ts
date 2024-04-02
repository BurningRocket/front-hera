import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { DialogHeaderComponent } from '../dialog-header/dialog-header.component';
import { DialogHeader2Component } from '../dialog-header2/dialog-header2.component';
import { TreeSelectHeaderComponent } from '../tree-select-header/tree-select-header.component';
import { DialogHeader3Component } from '../dialog-header3/dialog-header3.component';
import { DialogHeader4Component } from '../dialog-header4/dialog-header4.component';

@Component({
  selector: 'app-toolbar-header',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    FormsModule,
    TooltipModule,
    DialogHeaderComponent,
    DialogHeader2Component,
    TreeSelectHeaderComponent,
    DialogHeader3Component,
    DialogHeader4Component,
  ],
  templateUrl: './toolbar-header.component.html',
  styleUrl: './toolbar-header.component.css'
})
export class ToolbarHeaderComponent {

}
