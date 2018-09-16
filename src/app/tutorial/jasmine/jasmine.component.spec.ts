import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineComponent } from './jasmine.component';

describe('JasmineComponent', () => {
  let component: JasmineComponent;
  let fixture: ComponentFixture<JasmineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasmineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
