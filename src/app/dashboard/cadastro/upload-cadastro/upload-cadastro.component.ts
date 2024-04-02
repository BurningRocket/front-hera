import { Component } from '@angular/core';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-upload-cadastro',
  standalone: true,
  imports: [
    FileUploadModule,
    ToastModule,
  ],
  templateUrl: './upload-cadastro.component.html',
  styleUrl: './upload-cadastro.component.css',
  providers: [
    MessageService,
  ]

})
export class UploadCadastroComponent {
  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
