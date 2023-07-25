import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from '../components/modal-template/modal-template.component';
import { ModalType } from '../configs/enums';
import { StatusCodeEnum } from '../enums/status-code';
import { BaseModal } from 'src/app/types/modal';

@Injectable()
export class ModalControl {
  constructor(private ngbModal: NgbModal) {}

  show(params: BaseModal.BaseModalOptions): NgbModalRef | void {
    const modalRef = this.ngbModal.open(ModalTemplateComponent, {
      centered: true,
      ...params?.ngbModalConfig,
    });
    modalRef.componentInstance.title = params?.title || 'modal_title_noti';
    modalRef.componentInstance.message = params?.content || '';
    modalRef.componentInstance.typeAlert = params?.type || ModalType.blank;
    modalRef.componentInstance.twoBtn = params?.showConfirmButton;
    modalRef.componentInstance.iconBtn1 = params?.cancelButton?.icon || '';
    modalRef.componentInstance.titleButton1 =
      params?.cancelButton?.title || 'btn_ok';
    modalRef.componentInstance.callback1 =
      params?.cancelButton?.callback || null;
    modalRef.componentInstance.iconBtn2 = params?.confirmButton?.icon || '';
    modalRef.componentInstance.titleButton2 =
      params?.confirmButton?.title || '';
    modalRef.componentInstance.callback2 =
      params?.confirmButton?.callback || null;
  }

  showError(err: any, errorMsg: any = StatusCodeEnum) {
    if (
      err?.error &&
      err?.error?.error &&
      JSON.stringify(err?.error?.error).toLowerCase() === 'access denied'
    ) {
      this.show({
        content: 'default_error',
        type: ModalType.error,
      });
    } else if (err?.error && err?.error?.code && errorMsg[err?.error?.code]) {
      this.show({
        content: errorMsg[err.error.code],
        type: ModalType.error,
      });
    } else if (
      err?.error &&
      err?.error?.message &&
      errorMsg[err?.error?.message]
    ) {
      this.show({
        content: errorMsg[err?.error?.message],
        type: ModalType.error,
      });
    } else if (err?.error && err?.error?.error) {
      this.show({
        content: err?.error?.error?.toString(),
        type: ModalType.error,
      });
    } else {
      this.show({
        content: 'default_error',
        type: ModalType.error,
      });
    }
  }
}
