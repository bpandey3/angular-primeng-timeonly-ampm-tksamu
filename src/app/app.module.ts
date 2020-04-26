import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CalendarModule } from "primeng";


@NgModule({
  imports:      [ 
   BrowserModule, FormsModule, BrowserAnimationsModule, 
   CalendarModule
     ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
