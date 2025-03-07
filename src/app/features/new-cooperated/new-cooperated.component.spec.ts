/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCooperatedComponent } from './new-cooperated.component';

describe('NewCooperatedComponent', () => {
  let component: NewCooperatedComponent;
  let fixture: ComponentFixture<NewCooperatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCooperatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCooperatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
