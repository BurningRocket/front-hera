import { Component } from '@angular/core';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarHeaderComponent,
    DialogHeaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    
}
