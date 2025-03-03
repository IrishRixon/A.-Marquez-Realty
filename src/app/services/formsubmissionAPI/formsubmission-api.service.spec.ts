import { TestBed } from '@angular/core/testing';

import { FormsubmissionAPIService } from './formsubmission-api.service';

describe('FormsubmissionAPIService', () => {
  let service: FormsubmissionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsubmissionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
