import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {randomIntFromInterval} from '../core/random';

@Component({
  selector: 'app-red-dice',
  templateUrl: './red-dice.component.html'
})
export class RedDiceComponent implements OnInit {

  @Input() private rollRequested: EventEmitter<boolean> = new EventEmitter();

  readonly diceSides = [
    { red: 3, blue: 1, green: 2 },
    { red: 4, blue: 0, green: 2 },
    { red: 4, blue: 2, green: 1 },
    { red: 5, blue: 1, green: 3 },
    { red: 5, blue: 2, green: 3 },
    { red: 6, blue: 3, green: 1 }
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
