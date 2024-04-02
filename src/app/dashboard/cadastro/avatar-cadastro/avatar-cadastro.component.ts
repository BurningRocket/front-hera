import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-avatar-cadastro',
  standalone: true,
  imports: [
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './avatar-cadastro.component.html',
  styleUrl: './avatar-cadastro.component.css'
})
export class AvatarCadastroComponent {

}
