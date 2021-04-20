import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMealComponent } from './my-meal/my-meal.component';
import { OurfoodComponent } from './ourfood/ourfood.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMealComponent,
    OurfoodComponent,
    ContactusComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
