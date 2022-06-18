import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumConcurrencyComponent } from './maximum-concurrency.component';

describe('MaximumConcurrencyComponent', () => {
  let component: MaximumConcurrencyComponent;
  let fixture: ComponentFixture<MaximumConcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumConcurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximumConcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
