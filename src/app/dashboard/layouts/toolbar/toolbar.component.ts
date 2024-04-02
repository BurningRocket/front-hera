import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    FormsModule,
    TooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
