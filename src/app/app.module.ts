import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ShowTimeComponent } from './cmps/show-time/show-time.component';
import { ShowCoordsComponent } from './cmps/show-coords/show-coords.component';

@NgModule({
  declarations: [AppComponent, ShowTimeComponent, ShowCoordsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
