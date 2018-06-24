import { Component, OnInit, OnDestroy } from '@angular/core';

interface Metric {
  used: number,
  available: number
}
interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// Let's supply the data for two imaginery clusters each of three nodes.
export class DashboardComponent implements OnInit, OnDestroy {
  public cpu: Metric;
  public mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any; // JavaScript setInterval() returned value.
  
  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(this.generateData.bind(this), 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  // Will be called by "Refresh" from navigation component, so it is public.
  public generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0};
    this.mem = { used: 0, available: 0};
    for (let i = 1; i < 4; i++) {
      this.cluster1.push(this.randomNode(i));
    }
    for (let i = 4; i < 7; i++) {
      this.cluster2.push(this.randomNode(i));
    }
  }

  private randomNode(i): Node {
    let node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    // Cumulatives for "Overall Metrics" component.
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }


  public randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
