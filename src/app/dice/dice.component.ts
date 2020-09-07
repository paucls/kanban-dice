import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  red = this.randomIntFromInterval(3, 6);
  blue = this.randomIntFromInterval(0, 3);
  green = this.randomIntFromInterval(1, 3);

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
