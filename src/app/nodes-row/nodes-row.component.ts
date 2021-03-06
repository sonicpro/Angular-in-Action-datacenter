import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() public node: any;
  
  public isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
}
