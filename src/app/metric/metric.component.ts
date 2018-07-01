import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {
    @Input("used") public value: number = 0;
    @Input("available") public max: number = 100;

    ngOnChanges(changes) {
      if (changes.value && isNaN(changes.value.currentValue)) {
        this.value = 0;
      }
      if (changes.max && isNaN(changes.max.currentValue)) {
        this.max = 100;
      }
    }

    isDanger() {
      return this.value / this.max > 0.7;
    }
}
