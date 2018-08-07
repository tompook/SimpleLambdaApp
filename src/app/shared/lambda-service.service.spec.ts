import { TestBed, inject } from '@angular/core/testing';

import { LambdaServiceService } from './lambda-service.service';

describe('LambdaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LambdaServiceService]
    });
  });

  it('should be created', inject([LambdaServiceService], (service: LambdaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
