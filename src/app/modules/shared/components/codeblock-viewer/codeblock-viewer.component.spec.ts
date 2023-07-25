import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockViewerComponent } from './codeblock-viewer.component';

describe('CodeblockViewerComponent', () => {
  let component: CodeblockViewerComponent;
  let fixture: ComponentFixture<CodeblockViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeblockViewerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeblockViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
