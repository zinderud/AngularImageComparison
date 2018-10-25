import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCompareComponent } from './image-compare/image-compare.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [ImageCompareComponent],
  exports: [ImageCompareComponent],
})
export class ImageCompareModule { }
