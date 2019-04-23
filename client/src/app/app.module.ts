import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from "../auth.service";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddComponent } from './add/add.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    MapComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
