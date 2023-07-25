import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDateinputComponent } from './i-dateinput.component';

describe('IDateinputComponent', () => {
  let component: IDateinputComponent;
  let fixture: ComponentFixture<IDateinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IDateinputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDateinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
