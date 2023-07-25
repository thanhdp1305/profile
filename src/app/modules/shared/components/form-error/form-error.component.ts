import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit {
  @Input() isSubmit = false;
  @Input() useSubmit = true;
  @Input() detail: any = {};
  // @Input() errorMessages: any = {
  //   required: "Vui lòng nhập dữ liệu",
  //   pattern: "Định dạng không đúng"
  // };
  @Input() errorMessages: any = {};
  @Input() control!: AbstractControlDirective | AbstractControl | any;

  constructor() {}

  ngOnInit(): void {}

  shouldShowErrors(): boolean {
    if (this.useSubmit) {
      return (
        this.control &&
        this.control.errors &&
        (this.control?.dirty || this.control?.touched || this.isSubmit) &&
        this.isSubmit
      );
    } else {
      return (
        this.control &&
        this.control.errors &&
        (this.control.dirty || this.control.touched)
      );
    }
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) =>
      this.getMessage(field, this.control.errors[field])
    );
  }

  private getMessage(type: string, params: any) {
    return this.errorMessages[type] || '';
  }
}
