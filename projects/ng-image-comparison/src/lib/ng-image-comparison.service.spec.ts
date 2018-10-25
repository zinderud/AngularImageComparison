import { TestBed } from '@angular/core/testing';

import { NgImageComparisonService } from './ng-image-comparison.service';

describe('NgImageComparisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgImageComparisonService = TestBed.get(NgImageComparisonService);
    expect(service).toBeTruthy();
  });
});
