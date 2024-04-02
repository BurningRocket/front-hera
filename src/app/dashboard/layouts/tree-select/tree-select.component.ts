import { Component } from '@angular/core';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
import { NodeService } from '../../../interfaces/nodeservice';




@Component({
  selector: 'app-tree-select',
  standalone: true,
  imports: [
    TreeSelectModule,
    FormsModule
  ],
  templateUrl: './tree-select.component.html',
  styleUrl: './tree-select.component.css'
})
export class TreeSelectComponent {
  nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}
