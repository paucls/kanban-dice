import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { randomIntFromInterval } from '../core/random';

@Component({
  selector: 'app-blue-dice',
  templateUrl: './blue-dice.component.html'
})
export class BlueDiceComponent implements OnInit {

  @Input() private rollRequested: EventEmitter<boolean> = new EventEmitter();

  readonly diceSides = [
    { red: 2, blue: 3, green: 1 },
    { red: 1, blue: 4, green: 0 },
    { red: 1, blue: 4, green: 2 },
    { red: 2, blue: 5, green: 1 },
    { red: 3, blue: 5, green: 2 },
    { red: 1, blue: 6, green: 3 }
  ];

  outcome = this.roll();

  ngOnInit() {
    if (this.rollRequested) {
      this.rollRequested.subscribe(() => this.outcome = this.roll());
    }
  }

  roll() {
    return this.diceSides[randomIntFromInterval(0, 5)];
  }
}
