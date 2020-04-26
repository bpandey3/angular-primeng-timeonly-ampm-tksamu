import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {
  CalendarModule,
  DropdownModule,
  MultiSelectModule,
  FileUploadModule,
  RadioButtonModule,
  CheckboxModule,
  ConfirmDialogModule,
  TabViewModule,
  DialogModule,
  InputTextareaModule,
  InputMaskModule
} from "primeng/primeng";


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
  DropdownModule,
  MultiSelectModule,
  FileUploadModule,
  RadioButtonModule,
  CheckboxModule,
  ConfirmDialogModule,
  TabViewModule,
  DialogModule,
  InputTextareaModule,
  InputMaskModule
     ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
