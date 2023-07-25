import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import {
  NgbActiveModal,
  NgbDropdownModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Api } from '../shared/networks/api';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { IDatetimepickerComponent } from './components/i-datetimepicker/i-datetimepicker.component';
import { IDateinputComponent } from './components/i-dateinput/i-dateinput.component';
import { IDaterangepickerComponent } from './components/i-daterangepicker/i-daterangepicker.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragDropDirective } from './directives/drag-drop.directive';
import { CodeblockViewerComponent } from './components/codeblock-viewer/codeblock-viewer.component';
import { CustomToastTemplateComponent } from './components/custom-toast-template/custom-toast-template.component';
import { TrimValueDirective } from './directives/trim-value.directive';

@NgModule({
  declarations: [
    FormErrorComponent,
    ModalTemplateComponent,
    IDatetimepickerComponent,
    IDateinputComponent,
    IDaterangepickerComponent,
    DragDropDirective,
    CodeblockViewerComponent,
    CustomToastTemplateComponent,
    TrimValueDirective,
  ],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    NgSelectModule,
    NgbDropdownModule,
  ],
  providers: [Api, NgbActiveModal],
  exports: [
    FormErrorComponent,
    IDatetimepickerComponent,
    IDateinputComponent,
    IDaterangepickerComponent,
    DragDropDirective,
    CodeblockViewerComponent,
    TrimValueDirective,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
