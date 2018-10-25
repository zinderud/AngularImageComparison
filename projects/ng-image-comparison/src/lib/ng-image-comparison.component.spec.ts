import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageComparisonComponent } from './ng-image-comparison.component';

describe('NgImageComparisonComponent', () => {
  let component: NgImageComparisonComponent;
  let fixture: ComponentFixture<NgImageComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImageComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImageComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
