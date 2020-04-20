import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCenterFormComponent } from './test-center-form.component';

describe('TestCenterFormComponent', () => {
  let component: TestCenterFormComponent;
  let fixture: ComponentFixture<TestCenterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCenterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
