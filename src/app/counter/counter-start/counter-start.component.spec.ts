import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStartComponent } from './counter-start.component';

describe('CounterStartComponent', () => {
  let component: CounterStartComponent;
  let fixture: ComponentFixture<CounterStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
