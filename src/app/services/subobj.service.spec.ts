import { TestBed } from '@angular/core/testing';

import { SubobjService } from './subobj.service';

describe('SubobjService', () => {
  let service: SubobjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubobjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
