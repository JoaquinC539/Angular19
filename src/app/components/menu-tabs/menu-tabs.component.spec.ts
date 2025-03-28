import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabsComponent } from './menu-tabs.component';
import { ActivatedRoute } from '@angular/router';

describe('MenuTabsComponent', () => {
  let component: MenuTabsComponent;
  let fixture: ComponentFixture<MenuTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTabsComponent],
      providers:[
        {provide:ActivatedRoute,useValue:{}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
