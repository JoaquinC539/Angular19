import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,HttpHandler]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
