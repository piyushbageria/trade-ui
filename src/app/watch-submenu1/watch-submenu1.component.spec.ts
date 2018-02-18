import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSubmenu1Component } from './watch-submenu1.component';

describe('WatchSubmenu1Component', () => {
  let component: WatchSubmenu1Component;
  let fixture: ComponentFixture<WatchSubmenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchSubmenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchSubmenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
