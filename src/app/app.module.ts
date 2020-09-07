import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { BlueDiceComponent } from './blue-dice/blue-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    BlueDiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
