
import {
  Component, OnInit, AfterViewInit, ViewChild,
  ViewChildren, ElementRef, QueryList, Input, ChangeDetectorRef, Renderer2
} from '@angular/core';
import * as ImageComparison from 'image-comparison';
import 'style-loader!image-comparison/src/ImageComparison.css';

@Component({
  selector: 'ng-image-comparison',
  template: `

  <div #comparisonContainer class="js-comparison-container">
  <img #comparisonImage0 class="comparison-image"    [src]="imageSrcs[0]" alt="">
  <img #comparisonImage1 class="comparison-image"    [src]="imageSrcs[1]" alt="">
</div>
  `,
  styles: []
})
export class NgImageComparisonComponent implements OnInit, AfterViewInit {
  @Input() imageSrcs: string[] = [];
  @Input() before: string;
  @Input() after: string;
  @ViewChild('comparisonContainer') comparisonContainer: ElementRef;
  /*
  @ViewChildren('comparisonImage') comparisonImages: QueryList<any>; */
  @ViewChild('comparisonImage1') comparisonImage1: ElementRef;
  @ViewChild('comparisonImage0') comparisonImage0: ElementRef;
  isShow = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  public show(data: string[], before?, after?) {
    this.imageSrcs = data;
    this.after = after;
    this.before = before;
    this.createImageComparison();
    this.isShow = true;



  }
  ngAfterViewInit() {
    if (this.imageSrcs.length > 0) {
      this.after = this.after;
      this.before = this.before;
      this.createImageComparison();

    }

  }

  private createImageComparison(): any {
    this.renderer.setProperty(this.comparisonImage0.nativeElement, 'src', this.imageSrcs[0]);
    this.renderer.setProperty(this.comparisonImage1.nativeElement, 'src', this.imageSrcs[1]);
    const comparison = new ImageComparison({
      container: this.comparisonContainer.nativeElement,
      startPosition: 70,
      data: [
        {
          image: this.comparisonImage0.nativeElement,
          label: this.before
        },
        {
          image: this.comparisonImage1.nativeElement,
          label: this.after
        }
      ],
    });

    /*   comparison._setImageSize(); */

  }
}











