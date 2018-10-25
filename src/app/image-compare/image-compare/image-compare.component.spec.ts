import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompareComponent } from './image-compare.component';

describe('ImageCompareComponent', () => {
  let component: ImageCompareComponent;
  let fixture: ComponentFixture<ImageCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
