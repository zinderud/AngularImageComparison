import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCompareModule } from './image-compare/image-compare.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCompareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
