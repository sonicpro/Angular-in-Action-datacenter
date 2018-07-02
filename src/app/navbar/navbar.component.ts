import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // We will be able to listen to this property using event binding syntax (parentheses).
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  public refresh(): void {
    this.onRefresh.emit();
  }
}
