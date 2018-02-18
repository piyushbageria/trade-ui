import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSubmenu2Component } from './watch-submenu2.component';

describe('WatchSubmenu2Component', () => {
  let component: WatchSubmenu2Component;
  let fixture: ComponentFixture<WatchSubmenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchSubmenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchSubmenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
