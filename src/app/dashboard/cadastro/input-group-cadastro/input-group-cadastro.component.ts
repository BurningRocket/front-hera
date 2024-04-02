import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-input-group-cadastro',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './input-group-cadastro.component.html',
  styleUrl: './input-group-cadastro.component.css'
})
export class InputGroupCadastroComponent {

}
