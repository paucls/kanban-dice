import { Component } from '@angular/core';
import { randomIntFromInterval } from '../core/random';

@Component({
  selector: 'app-blue-dice',
  templateUrl: './blue-dice.component.html'
})
export class BlueDiceComponent {

  readonly diceSides = [
    { red: 2, blue: 3, green: 1 },
    { red: 1, blue: 4, green: 0 },
    { red: 1, blue: 4, green: 2 },
    { red: 2, blue: 5, green: 1 },
    { red: 3, blue: 5, green: 2 },
    { red: 1, blue: 6, green: 3 }
  ];

  readonly outcome = this.diceSides[randomIntFromInterval(0, 5)];
}
