import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectArraysComponent } from './object-arrays.component';

describe('ObjectArraysComponent', () => {
  let component: ObjectArraysComponent;
  let fixture: ComponentFixture<ObjectArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
