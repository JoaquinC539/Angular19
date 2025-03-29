import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SignalService } from './signal.service';

describe('SignalService', () => {
  let service: SignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[SignalService]
    });
    service = TestBed.inject(SignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should get a user after fetched",fakeAsync(()=>{
    service.init();
    tick(3000);
    expect(service.Data).toEqual([{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }])
  }))
  it("should update the signal",fakeAsync(()=>{
    service.updateData([{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }])
    tick(2500);
    expect(service.Data).toEqual([{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }])
  }))
});
