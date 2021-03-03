import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rollRequested: EventEmitter<boolean> = new EventEmitter();

  greenDiceCount = Array(2);

  roll() {
    this.rollRequested.emit(true);
  }

  addGreenDice() {
    this.greenDiceCount = Array(this.greenDiceCount.length + 1);
  }
}
