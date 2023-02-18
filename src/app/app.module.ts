import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ShowTimeComponent } from './cmps/show-time/show-time.component';
import { ShowCoordsComponent } from './cmps/show-coords/show-coords.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { TimerComponent } from './cmps/timer/timer.component';
import { WhoWatchComponent } from './cmps/who-watch/who-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    ShowCoordsComponent,
    CountDownComponent,
    TimerComponent,
    WhoWatchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
