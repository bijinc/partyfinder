import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add-user', component: AddComponent },
  { path: 'home', component: MapComponent },
  { path: 'add-event', component: EventComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
