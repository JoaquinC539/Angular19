import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SignalComponent } from './signal.component';
import { SignalService } from '../../services/signal.service';


describe('SignalComponent', () => {
  let component: SignalComponent;
  let fixture: ComponentFixture<SignalComponent>;
  let service: SignalService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalComponent],

    })
      .compileComponents();

    fixture = TestBed.createComponent(SignalComponent);
    component = fixture.componentInstance;    
    service = TestBed.inject(SignalService);
    service.fetchUser = () => {
      return new Promise((resolve) => {
        resolve([{
          id: "1",
          name: "Steven Spiegal",
          description: "Steven user mock"
        }])
      })
    }
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should get data after signal change", fakeAsync(() => {
    expect(service["data"]()).toEqual([])
    service["data"].set([{
      id: "1",
      name: "Steven Spiegal",
      description: "Steven user mock"
    }])
    tick()
    expect(service.Data.length).toEqual(1)
    tick()
    fixture.detectChanges();
    expect(component.data).toEqual([{
      id: "1",
      name: "Steven Spiegal",
      description: "Steven user mock"
    }])
    expect(component.loading).toBeFalse();
  }))
  it("it should update data accordingly based on the updated boolean",fakeAsync(()=>{
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
    component.updated=true;
    fixture.detectChanges();
    component.updateUsers();
    tick(3000)
    fixture.detectChanges();
    
    expect(component.data).toEqual([{
      id: "1",
      name: "Steven Spiegal",
      description: "Steven user mock"
    }])
  }))
});
