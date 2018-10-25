import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imageData: string[];
  constructor() {
    this.imageData = ['https://preview.ibb.co/jrsA6R/img12.jpg', 'https://preview.ibb.co/mwsA6R/img7.jpg'];
   }

  ngOnInit() {

  }



}

