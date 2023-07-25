import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-i-datetimepicker',
  templateUrl: './i-datetimepicker.component.html',
  styleUrls: ['./i-datetimepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IDatetimepickerComponent,
    },
  ],
})
export class IDatetimepickerComponent
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

  @Input()
  set maxDate(value: any) {
    this._maxDate = value;
  }
  get maxDate() {
    return this._maxDate;
  }
  _maxDate: string | null = null;

  @Input()
  set minDate(value: any) {
    this._minDate = value;
  }
  get minDate() {
    return this._minDate;
  }
  _minDate: string | null = null;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  date = '';

  onChange = (date: string) => {};

  onTouched = () => {};

  touched = false;

  id = '';

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef<HTMLDivElement>
  ) {
    this.id = this.uuidv4();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const self = this;
    $(document).ready(function () {
      //Input mask
      $(`#${self.id} input`).inputmask();

      //Date picker
      $(`#${self.id}`).datetimepicker({
        format: 'DD/MM/YYYY',
        minDate: self.minDate || false,
        maxDate: self.maxDate || false,
      });

      $(`#${self.id}`).keyup((e: any) => {
        self.markAsTouched();
        self.date = $(`#${self.id} input`).val();
        self.onChange(self.date);
        self.change.emit(self.date);
      });

      $(`#${self.id}`).on('change.datetimepicker', (e: any) => {
        self.markAsTouched();
        self.date = $(`#${self.id} input`).val();
        self.onChange(self.date);
        self.change.emit(self.date);
      });
    });
  }

  writeValue(date: string): void {
    this.date = date;
    const ip_el = this._elementRef.nativeElement.getElementsByTagName('input');
    if (ip_el && ip_el.length > 0) {
      this._renderer.setProperty(ip_el[0], 'value', date);
    }
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

  handleChangeInput(e: any): void {
    console.log(e);
    this.change.emit(e);
  }
}
