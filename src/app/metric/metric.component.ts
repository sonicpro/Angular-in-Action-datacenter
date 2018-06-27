import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
    @Input() public title: string = "";
    @Input() public description: string = "";
    @Input("used") public value: number = 0;
    @Input("available") public max: number = 100;

    isDanger() {
      return this.value / this.max > 0.7;
    }
}
