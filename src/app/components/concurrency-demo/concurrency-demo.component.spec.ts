import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyDemoComponent } from './concurrency-demo.component';

describe('ConcurrencyDemoComponent', () => {
  let component: ConcurrencyDemoComponent;
  let fixture: ComponentFixture<ConcurrencyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcurrencyDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcurrencyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
