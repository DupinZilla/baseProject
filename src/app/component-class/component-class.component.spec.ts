import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentClassComponent } from './component-class.component';

describe('ComponentClassComponent', () => {
  let component: ComponentClassComponent;
  let fixture: ComponentFixture<ComponentClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
