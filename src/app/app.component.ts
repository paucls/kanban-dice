import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rollRequested: EventEmitter<boolean> = new EventEmitter();

  roll() {
    this.rollRequested.emit(true);
  }
}
