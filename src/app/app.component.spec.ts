import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[,HttpClient,HttpHandler]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it("title shoud be Miniwork",()=>{
    component.title="Miniwork"
    const title=document.getElementById("apptitle");
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain("Miniwork")
  })
  it("should display loader when loading",()=>{
    component.loading=true;
    const loader=document.querySelector(".text-white");
    expect(loader).toBeTruthy();
  })


 
});
