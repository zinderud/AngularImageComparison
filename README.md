# BiforeAfter
 npm i ng-image-comparison
 # usage
add app.module

```
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




<ng-image-comparison  [imageSrcs]="imageData"></ng-image-comparison> 




imageData: string[];
  constructor() {
    this.imageData = ['https://preview.ibb.co/jrsA6R/img12.jpg', 
    'https://preview.ibb.co/mwsA6R/img7.jpg'];
   }
 
```