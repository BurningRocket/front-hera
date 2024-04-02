import { Component } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputGroupCadastroComponent } from './input-group-cadastro/input-group-cadastro.component';
import { UploadCadastroComponent } from './upload-cadastro/upload-cadastro.component';
import { AvatarCadastroComponent } from './avatar-cadastro/avatar-cadastro.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CheckboxComponent,
    InputGroupCadastroComponent,
    UploadCadastroComponent,
    AvatarCadastroComponent,
    HeaderComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
