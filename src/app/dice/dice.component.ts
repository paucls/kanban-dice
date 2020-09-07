import { Component } from '@angular/core';
import { randomIntFromInterval } from '../core/random';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html'
})
export class DiceComponent {

  readonly diceSides = [
    { red: 3, blue: 1, green: 2 },
    { red: 4, blue: 0, green: 2 },
    { red: 4, blue: 2, green: 1 },
    { red: 5, blue: 1, green: 3 },
    { red: 5, blue: 2, green: 3 },
    { red: 6, blue: 3, green: 1 }
  ];

  readonly outcome = this.diceSides[randomIntFromInterval(0, 5)];
}
