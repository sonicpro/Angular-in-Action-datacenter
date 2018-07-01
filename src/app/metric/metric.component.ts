import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
    private valueField: number = 0;
    private maxField: number = 100;
  
    @Input() public title: string = "";
    @Input() public description: string = "";
    @Input("used")
    public set value(value: number){
      if (isNaN(value)) {
        value = 0;
      }
      this.valueField = value;
    }
    public get value(): number { return this.valueField; }

    @Input("available")
    public set max(max: number){
      if (isNaN(max)) {
        max = 0;
      }
      this.maxField = max;
    }
    public get max(): number { return this.maxField; }

    // This member now protected from invalid inputs by means of accessors.
    isDanger() {
      return this.value / this.max > 0.7;
    }
}
