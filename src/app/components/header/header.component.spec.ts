import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../../services/user-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

class MockUserService {
  getUser() {
    return { first_name: 'Test', last_name: 'User' };
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers:[
        { provide:UserService,useClass:MockUserService},
        { provide: ActivatedRoute, useValue: {} },
        { provide: RouterLink, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should log logout when logout clicked",()=>{
    spyOn(console,"log");
    component.handleLogOut();
    expect(console.log).toHaveBeenCalled()    
  })
  it("should see user in screen",()=>{
    const name=compiled.querySelector("#userName");
    expect(name?.textContent).toBe(" Test User ")
  })
});
