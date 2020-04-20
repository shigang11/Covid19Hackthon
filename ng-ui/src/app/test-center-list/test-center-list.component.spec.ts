import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCenterListComponent } from './test-center-list.component';

describe('TestCenterListComponent', () => {
  let component: TestCenterListComponent;
  let fixture: ComponentFixture<TestCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
