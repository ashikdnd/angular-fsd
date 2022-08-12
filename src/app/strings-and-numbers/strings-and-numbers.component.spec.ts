import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsAndNumbersComponent } from './strings-and-numbers.component';

describe('StringsAndNumbersComponent', () => {
  let component: StringsAndNumbersComponent;
  let fixture: ComponentFixture<StringsAndNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringsAndNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsAndNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
