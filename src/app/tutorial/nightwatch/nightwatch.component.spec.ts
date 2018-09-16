import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightwatchComponent } from './nightwatch.component';

describe('NightwatchComponent', () => {
  let component: NightwatchComponent;
  let fixture: ComponentFixture<NightwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
