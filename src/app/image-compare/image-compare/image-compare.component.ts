import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList, Renderer2, Input } from '@angular/core';
import * as ImageComparison from 'image-comparison';
import 'style-loader!image-comparison/src/ImageComparison.css';
@Component({
  selector: 'app-image-compare',
  templateUrl: './image-compare.component.html',
  styleUrls: ['./image-compare.component.css']
})
export class ImageCompareComponent implements OnInit, AfterViewInit {

  @Input( ) imageSrcs: string[];
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

