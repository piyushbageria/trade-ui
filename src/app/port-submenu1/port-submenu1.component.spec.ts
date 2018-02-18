import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortSubmenu1Component } from './port-submenu1.component';

describe('PortSubmenu1Component', () => {
  let component: PortSubmenu1Component;
  let fixture: ComponentFixture<PortSubmenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortSubmenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortSubmenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
