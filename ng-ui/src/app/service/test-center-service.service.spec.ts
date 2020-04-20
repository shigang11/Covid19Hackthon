import { TestBed } from '@angular/core/testing';

import { TestCenterServiceService } from './test-center-service.service';

describe('TestCenterServiceService', () => {
  let service: TestCenterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCenterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
