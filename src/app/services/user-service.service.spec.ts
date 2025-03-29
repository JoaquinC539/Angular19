import {  fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserService } from './user-service.service';
import { provideHttpClient, } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"




describe('UserService', () => {
  let service: UserService;
  let controller:HttpTestingController
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        UserService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    
    service = TestBed.inject(UserService);
    controller=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    controller.verify();
  })

  
  it('should be created', () => {
    expect(service).toBeTruthy();
    controller.expectOne("https://reqres.in/api/users/2");
  });
  it("should get users after init",fakeAsync(()=>{
    const mockUser={ data: { id: 2, first_name: 'John', last_name: 'Doe' } };     

    const mockDataList={
      "page": 2,
      "per_page": 6,
      "total": 12,
      "total_pages": 2,
      "data": [
        {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
          "id": 10,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
          "id": 11,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
          "id": 12,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
      ],
      
    }
    let init:boolean=false;
    service.initialized.subscribe((value)=>{init=value})    
    const req=controller.expectOne("https://reqres.in/api/users/2");
    req.flush(mockUser);
    tick()
    const reqL=controller.expectOne("https://reqres.in/api/users?page=2");
    reqL.flush(mockDataList);
    tick(500)
    expect(init).toBeTrue();
    expect(service.getUser()).toEqual(mockUser.data)
    expect(service.getUserList()).toEqual(mockDataList.data)

  }))
 


});

