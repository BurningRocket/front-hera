import { Component } from '@angular/core';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
import { NodeService } from '../../../interfaces/nodeservice';

@Component({
  selector: 'app-tree-select-header',
  standalone: true,
  imports: [
    TreeSelectModule,
    FormsModule,
  ],
  templateUrl: './tree-select-header.component.html',
  styleUrl: './tree-select-header.component.css'
})
export class TreeSelectHeaderComponent {
  nodes!: any[];

  selectedNodes: any;

  constructor(private nodeService: NodeService) {
      this.nodeService.getFiles().then((files) => (this.nodes = files));
  }
}
