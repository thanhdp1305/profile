import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: '[custom-toast-template]',
  styles: [
    `
      .econ-toast {
        position: fixed;
        bottom: 60px;
        left: 50%;
        max-width: 60%;
        padding: 8px 24px;
        display: inline-block;
        background: #718096;
        border-radius: 8px;
        color: #fff;
        z-index: 9999999999999;
        transform: translateX(-50%);
      }
    `,
  ],
  template: `
    <div [@flyInOut]="state" class="econ-toast">
      <span [innerHTML]="msg"></span>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          opacity: 0,
        })
      ),
      transition(
        'inactive => active',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              transform: 'translate(-50%, 200px)',
              opacity: 0,
            }),
            style({
              transform: 'translate(-50%, 0px)',
              opacity: 1,
            }),
          ])
        )
      ),
      transition(
        'active => removed',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              transform: 'translate(-50%, 0px)',
              opacity: 1,
            }),
            style({
              transform: 'translate(-50%, 200px)',
              opacity: 0,
            }),
          ])
        )
      ),
    ]),
  ],
  preserveWhitespaces: false,
})
export class CustomToastTemplateComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  state = 'inactive';
  msg = 'Đây là nội dung thông báo của bạn.';

  // constructor is only necessary when not using AoT
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.state = 'active';
    }, 1);
  }

  ngOnDestroy(): void {}
}
