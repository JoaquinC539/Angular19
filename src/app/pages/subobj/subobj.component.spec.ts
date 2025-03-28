import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubobjComponent } from './subobj.component';

describe('SubobjComponent', () => {
  let component: SubobjComponent;
  let fixture: ComponentFixture<SubobjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubobjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
