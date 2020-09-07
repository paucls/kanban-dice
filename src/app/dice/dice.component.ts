import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  readonly diceSides = [
    { red: 3, blue: 1, green: 2 },
    { red: 4, blue: 0, green: 2 },
    { red: 4, blue: 2, green: 1 },
    { red: 5, blue: 1, green: 3 },
    { red: 5, blue: 2, green: 3 },
    { red: 6, blue: 3, green: 1 }
  ];
  readonly outcome = this.diceSides[this.randomIntFromInterval(0, 5)];

  constructor() { }

  ngOnInit(): void {
  }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
