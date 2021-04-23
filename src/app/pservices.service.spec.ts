import { TestBed } from '@angular/core/testing';

import { PservicesService } from './pservices.service';

describe('PservicesService', () => {
  let service: PservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
