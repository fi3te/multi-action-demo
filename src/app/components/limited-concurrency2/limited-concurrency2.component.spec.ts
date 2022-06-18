import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedConcurrency2Component } from './limited-concurrency2.component';

describe('LimitedConcurrency2Component', () => {
  let component: LimitedConcurrency2Component;
  let fixture: ComponentFixture<LimitedConcurrency2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedConcurrency2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitedConcurrency2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
