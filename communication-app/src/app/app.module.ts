import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
} from "@angular/material";
import { FormsModule } from '@angular/forms';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { ItemClientsComponent } from './clients/item-clients/item-clients.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TimerComponent } from './parent-child/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientsComponent,
    ParentChildComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
