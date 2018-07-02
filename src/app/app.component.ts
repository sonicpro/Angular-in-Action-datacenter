import { Component, ViewChild } from '@angular/core';
// Causes coupling, jotted away and replaced by the local "#dashboard" variable in the template.
// import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // @ViewChild(DashboardComponent) private dashboard: DashboardComponent;

  // public refresh() {
  //   this.dashboard.generateData();
  // }
}
