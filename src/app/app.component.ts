//Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//primeng
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { TreeSelectModule } from 'primeng/treeselect';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputNumberModule } from 'primeng/inputnumber';



//interfaces
import { ProductService } from './interfaces/productservice';
import { NodeService } from './interfaces/nodeservice';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  AutoCompleteModule,
  RouterOutlet,
  FormsModule,
  ButtonModule,
  DataViewModule,
  RatingModule,
  TagModule,
  TreeSelectModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule,
  TooltipModule,
  DockModule,
  RadioButtonModule,
  SidebarModule,
  CarouselModule,
  BadgeModule,
  PanelMenuModule,
  InputNumberModule,
  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ProductService,
    NodeService
  ]
})
export class AppComponent {
  title = 'prime-app';
}
