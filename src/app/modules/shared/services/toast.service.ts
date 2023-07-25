import { Injectable, TemplateRef } from '@angular/core';
import { CustomToastTemplateComponent } from '../components/custom-toast-template/custom-toast-template.component';
import { CustomToastService } from './custom-toast.service';
import { DomSanitizer } from '@angular/platform-browser';

declare let $: any;
declare let toastr: any;

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  constructor(
    private customToastService: CustomToastService,
    private sanitize: DomSanitizer
  ) {}

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  jqueryToastAdminLte(
    title: string,
    subTitle: string,
    delay: any = 2500,
    className = '',
    icon = ''
  ) {
    $(document).Toasts('create', {
      title: title,
      body: `${subTitle}`,
      autohide: true,
      delay: delay || 1500,
      class: className || '',
      icon: icon || '',
    });
  }

  sweet2ToastNoti(
    title: string,
    icon = '',
    position = 'center',
    timer: any = 1500
  ) {
    Swal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: timer,
      customClass: {
        header: 'border-0',
      },
    });
  }

  toastSnackBar(msg = 'Đây là nội dung thông báo của bạn.') {
    this.customToastService.config.component = CustomToastTemplateComponent;
    this.customToastService.config.msg = msg;
    this.customToastService.config.timeout = 1500;
    this.customToastService.show(msg);
  }
}
