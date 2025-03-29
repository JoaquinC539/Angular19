import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SubobjComponent } from './subobj.component';
import { SubobjService } from '../../services/subobj.service';

describe('SubobjComponent', () => {
  let component: SubobjComponent;
  let fixture: ComponentFixture<SubobjComponent>;
  let service:SubobjService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubobjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubobjComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SubobjService);
    fixture.detectChanges();

  });
  afterEach(()=>{
    component["datasub"].unsubscribe();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("data should be gotten after service emits",(fakeAsync(()=>{
    service["dataSubject"].next([{
      id: "1",
      name: "Steven Spiegal",
      description: "Steven user mock"
    }])
    fixture.detectChanges();
    expect(component.data).toEqual([{
      id: "1",
      name: "Steven Spiegal",
      description: "Steven user mock"
    }])
    
  })));
  it("should log the error when emitted error",()=>{
    spyOn(console,"error");
    service["dataSubject"].error("err");    
    fixture.detectChanges();
    expect(console.error).toHaveBeenCalled();
  });
  it("should update the users of the service",fakeAsync(()=>{
    expect(component.updated).toBeFalse();
    component.updateUsers();
    tick(3000)
    fixture.detectChanges();
    expect(component.data).toEqual([
      {
        id:"2",
        name:"John Doe",
        description:"John user mock"
      },
      {
        id:"3",
        name:"George Lucas",
        description:"Lucas user mock"
      },
    ])
    expect(component.updated).toBeTrue(),

    component.updateUsers();
    tick(3000)
    fixture.detectChanges();
    expect(component.data).toEqual([{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }])

  }))

});
