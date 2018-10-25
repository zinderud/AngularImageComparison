import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {ImageComparisonModule} from 'ng-image-comparison';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageComparisonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
