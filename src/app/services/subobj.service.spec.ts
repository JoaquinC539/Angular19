import { fakeAsync, TestBed, tick } from '@angular/core/testing';

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
  it("should fetch user at the start",fakeAsync(()=>{
    // spyOn(service["dataSubject"],"")
    service["init"]();
    tick(3000);
    service.data$.subscribe((value)=>{
      expect(value).toEqual([{
        id:"1",
        name:"Steven Spiegal",
        description:"Steven user mock"
      }])
    })
  }))
  it("should update data and emit it",fakeAsync(()=>{
    
    service.updateData([{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }])

    service.data$.subscribe((value)=>{
      expect(value).toEqual([{
        id:"1",
        name:"Steven Spiegal",
        description:"Steven user mock"
      }])
    })
  }))

});
