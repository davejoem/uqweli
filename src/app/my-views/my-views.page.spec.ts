import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyViewsPage } from './my-views.page';

describe('MyViewsPage', () => {
  let component: MyViewsPage;
  let fixture: ComponentFixture<MyViewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyViewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyViewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
