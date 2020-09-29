import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {randomIntFromInterval} from "../core/random";

@Component({
  selector: 'app-pink-dice',
  templateUrl: './pink-dice.component.html'
})
export class PinkDiceComponent implements OnInit {

@Input() private rollRequested: EventEmitter<boolean> = new EventEmitter();

  readonly diceSides = [0, 2, 3, 4, 5, 15];

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
