import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  forwardRef,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TRIM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimValueDirective),
  multi: true,
};
@Directive({
  selector: '[appTrimValue]',
  providers: [TRIM_VALUE_ACCESSOR],
})
export class TrimValueDirective extends DefaultValueAccessor {
  @HostListener('change', ['$event.target.value'])
  ngOnChange = (val: string) => {
    this.onChange(val.trim());
    this.writeValue(val.trim());
  };

  @HostListener('blur', ['$event.target.value'])
  applyTrim(val: string) {
    this.writeValue(val.trim());
  }

  override writeValue(value: any): void {
    if (typeof value === 'string') {
      value = value.trim();
    }
    super.writeValue(value);
  }
}
