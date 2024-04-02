import { Component } from '@angular/core';
import { AutoCompleteComponent } from './layouts/auto-complete/auto-complete.component';
import { DataviewComponent } from './layouts/dataview/dataview.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeSelectComponent } from './layouts/tree-select/tree-select.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from './layouts/dialog/dialog.component';
import { DockComponent } from './layouts/dock/dock.component';
import { CarouselResponsiveComponent } from './layouts/carousel-responsive/carousel-responsive.component';
import { RadioButton, RadioButtonModule } from 'primeng/radiobutton';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AutoCompleteComponent,
    DataviewComponent,
    TreeSelectModule,
    TreeSelectComponent,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    ToolbarComponent,
    DialogModule,
    DialogComponent,
    DockComponent,
    CarouselResponsiveComponent,
    HeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

}
