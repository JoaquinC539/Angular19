import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {  provideHttpClient } from '@angular/common/http';

import {  HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './services/user-service.service';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let userService:UserService;
  let httpmock:HttpTestingController
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[UserService,provideHttpClient(),
        provideHttpClientTesting()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    userService=TestBed.inject(UserService);
    httpmock=TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    httpmock.expectOne("https://reqres.in/api/users/2").flush({data:{}})
    expect(component).toBeTruthy();
  });
  it("title shoud be Miniwork",()=>{
    httpmock.expectOne("https://reqres.in/api/users/2").flush({data:{}})
    component.title="Miniwork"
    const title=document.getElementById("apptitle");
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain("Miniwork")
  })
  it('should show loader when loading is true', () => {
    httpmock.expectOne("https://reqres.in/api/users/2").flush({data:{}})
    component.loading = true;
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('app-screen-loader');
    expect(loader).toBeTruthy();
  });
  it("should set loading to false when initialized emits true ",fakeAsync(()=>{
    httpmock.expectOne("https://reqres.in/api/users/2").flush({data:{}})
    expect(component.loading).toBeTrue();
    userService["initSubject"].next(true)
    tick(1000)
    expect(component.loading).toBeFalse();
  }))
});
