import { Component } from '@angular/core';
import { randomIntFromInterval } from '../core/random';

@Component({
  selector: 'app-green-dice',
  templateUrl: './green-dice.component.html'
})
export class GreenDiceComponent {

  readonly diceSides = [
    { red: 1, blue: 2, green: 3 },
    { red: 0, blue: 1, green: 4 },
    { red: 2, blue: 1, green: 4 },
    { red: 1, blue: 2, green: 5 },
    { red: 2, blue: 3, green: 5 },
    { red: 3, blue: 1, green: 6 }
  ];

  readonly outcome = this.diceSides[randomIntFromInterval(0, 5)];
}
