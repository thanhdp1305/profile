import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToastTemplateComponent } from './custom-toast-template.component';

describe('CustomToastTemplateComponent', () => {
  let component: CustomToastTemplateComponent;
  let fixture: ComponentFixture<CustomToastTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomToastTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToastTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
