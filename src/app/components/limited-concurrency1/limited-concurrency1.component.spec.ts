import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedConcurrencyComponent1 } from './limited-concurrency1.component';

describe('LimitedConcurrencyComponent1', () => {
  let component: LimitedConcurrencyComponent1;
  let fixture: ComponentFixture<LimitedConcurrencyComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedConcurrencyComponent1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitedConcurrencyComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
