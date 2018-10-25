import { Component, OnInit, AfterViewInit , ViewChild, ViewChildren, ElementRef, QueryList, Renderer2} from '@angular/core';
import * as ImageComparison from 'image-comparison';
import 'style-loader!image-comparison/src/ImageComparison.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('comparisonContainer') comparisonContainer: ElementRef;

 @ViewChildren('comparisonImage') comparisonImages: QueryList<any>;
 constructor(private renderer: Renderer2, ) { }

 ngOnInit() {

 }

ngAfterViewInit() {
     this.createImageComparison();

}

 private createImageComparison(): any {
   const comparison = new ImageComparison({
     container: this.comparisonContainer.nativeElement,
     startPosition: 70,
     data: this.comparisonImages.map((element: any) => {
       return {
         image: element.nativeElement,
       };
     }),
   });

   comparison._setImageSize();
 }

}

