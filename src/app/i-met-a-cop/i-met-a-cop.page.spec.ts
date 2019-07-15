import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMetACopPage } from './i-met-a-cop.page';

describe('IMetACopPage', () => {
  let component: IMetACopPage;
  let fixture: ComponentFixture<IMetACopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMetACopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMetACopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
