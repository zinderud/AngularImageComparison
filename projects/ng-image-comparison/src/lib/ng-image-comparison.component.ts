import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList, Input } from '@angular/core';
import * as ImageComparison from 'image-comparison';
import 'style-loader!image-comparison/src/ImageComparison.css';
@Component({
  selector: 'ng-image-comparison',
  template: `

  <div #comparisonContainer class="js-comparison-container">
  <img #comparisonImage class="comparison-image" [src]="imageSrcs[0]" alt="">
  <img #comparisonImage class="comparison-image"   [src]="imageSrcs[1]" alt="">
</div>
  `,
  styles: []
})
export class NgImageComparisonComponent implements OnInit, AfterViewInit {

  @Input( ) imageSrcs: string[];
  @ViewChild('comparisonContainer') comparisonContainer: ElementRef;

  @ViewChildren('comparisonImage') comparisonImages: QueryList<any>;
  constructor( ) { }

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

