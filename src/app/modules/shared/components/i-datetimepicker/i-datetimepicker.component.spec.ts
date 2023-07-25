import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDatetimepickerComponent } from './i-datetimepicker.component';

describe('IDatetimepickerComponent', () => {
  let component: IDatetimepickerComponent;
  let fixture: ComponentFixture<IDatetimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IDatetimepickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
