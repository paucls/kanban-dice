import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlueDiceComponent } from './blue-dice/blue-dice.component';
import { GreenDiceComponent } from './green-dice/green-dice.component';
import { RedDiceComponent } from './red-dice/red-dice.component';
import { PinkDiceComponent } from './pink-dice/pink-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueDiceComponent,
    GreenDiceComponent,
    RedDiceComponent,
    PinkDiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
