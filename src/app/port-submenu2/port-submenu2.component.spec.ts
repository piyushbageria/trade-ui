import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortSubmenu2Component } from './port-submenu2.component';

describe('PortSubmenu2Component', () => {
  let component: PortSubmenu2Component;
  let fixture: ComponentFixture<PortSubmenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortSubmenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortSubmenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
