import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableModule } from 'primeng/table';
import { TableClientesCadastradosComponent } from './table-clientes-cadastrados/table-clientes-cadastrados.component';

@Component({
  selector: 'app-clientes-cadastrados',
  standalone: true,
  imports: [
    HeaderComponent,
    TableModule,
    TableClientesCadastradosComponent,
  ],
  templateUrl: './clientes-cadastrados.component.html',
  styleUrl: './clientes-cadastrados.component.css'
})
export class ClientesCadastradosComponent {

}
