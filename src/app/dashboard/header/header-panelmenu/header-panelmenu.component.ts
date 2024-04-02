import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-header-panelmenu',
  standalone: true,
  imports: [
    PanelMenuModule,
    LoginDialogComponent,
  ],
  templateUrl: './header-panelmenu.component.html',
  styleUrl: './header-panelmenu.component.css'
})
export class HeaderPanelmenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {
                              label: 'Bookmark',
                              icon: 'pi pi-fw pi-bookmark'
                          },
                          {
                              label: 'Video',
                              icon: 'pi pi-fw pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  { 
                      separator: true 
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },
          {
              label: 'Usuário',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'Login',
                      icon: 'pi pi-fw pi-user-plus',
                      url: './1',
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  
              ]
          },
          {
              label: 'Events',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'Save',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Delete',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  },
                  {
                      label: 'Archieve',
                      icon: 'pi pi-fw pi-calendar-times',
                      items: [
                          {
                              label: 'Remove',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  }
              ]
          }
      ];
  }
}
