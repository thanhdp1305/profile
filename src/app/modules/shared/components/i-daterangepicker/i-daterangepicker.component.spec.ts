import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDaterangepickerComponent } from './i-daterangepicker.component';

describe('IDaterangepickerComponent', () => {
  let component: IDaterangepickerComponent;
  let fixture: ComponentFixture<IDaterangepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IDaterangepickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
