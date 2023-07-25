import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

declare namespace BaseModal {
  export interface BaseModalOptions {
    title?: string;
    content: string;
    type?: string;
    showConfirmButton?: boolean;
    hideAllButton?: boolean;
    cancelButton?: ButtonOptions;
    confirmButton?: ButtonOptions;
    ngbModalConfig?: NgbModalOptions;
  }

  export interface ButtonOptions {
    icon?: string;
    title?: string;
    callback?: (...args: any) => void;
  }
}
