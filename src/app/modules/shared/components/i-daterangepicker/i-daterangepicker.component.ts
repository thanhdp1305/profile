import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare let $: any;
declare let moment: any;
@Component({
  selector: 'app-i-daterangepicker',
  templateUrl: './i-daterangepicker.component.html',
  styleUrls: ['./i-daterangepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IDaterangepickerComponent,
    },
  ],
})
export class IDaterangepickerComponent
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
      // $(`#${self.id}`).inputmask({
      //   regex: "^([0-2][0-9]|(3)[0-1])/(((0)[0-9])|((1)[0-2]))/[0-9]{4}( - )([0-2][0-9]|(3)[0-1])/(((0)[0-9])|((1)[0-2]))/[0-9]{4}$",
      //   'placeholder': 'dd/mm/yyyy - dd/mm/yyyy'
      // });

      //Date range picker
      $(`#${self.id}`).daterangepicker({
        timePicker: false,
        timePickerIncrement: 30,
        alwaysShowCalendars: true,
        locale: {
          format: 'DD/MM/YYYY', //hh:mm A
        },
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, 'days'),
            moment().subtract(1, 'days'),
          ],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month'),
            moment().subtract(1, 'month').endOf('month'),
          ],
        },
        startDate: moment().subtract(2, 'month').startOf('month'),
        endDate: moment().endOf('month'),
      });

      $(`#${self.id}`).keyup((e: any) => {
        self.markAsTouched();
        self.date = $(`#${self.id}`).val();
        self.onChange(self.date);
      });

      $(`#${self.id}`).change((e: any) => {
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
