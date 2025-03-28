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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
