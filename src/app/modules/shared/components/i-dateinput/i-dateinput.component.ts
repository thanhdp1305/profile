import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-i-dateinput',
  templateUrl: './i-dateinput.component.html',
  styleUrls: ['./i-dateinput.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IDateinputComponent,
    },
  ],
})
export class IDateinputComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input()
  set disabled(value: any) {
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  _disabled = false;

  date = '';

  onChange = (date: string) => {};

  onTouched = () => {};

  touched = false;

  id = '';

  constructor() {
    this.id = this.uuidv4();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const self = this;
    $(document).ready(function () {
      //Input mask
      $(`#${self.id}`).inputmask();

      $(`#${self.id}`).keyup((e: any) => {
        self.markAsTouched();
        self.date = $(`#${self.id}`).val();
        self.onChange(self.date);
      });
    });
  }

  writeValue(date: string): void {
    this.date = date;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
