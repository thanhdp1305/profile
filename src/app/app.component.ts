import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ModalControl } from './modules/shared/services/modal-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-15-base';

  constructor(
    private swUpdate: SwUpdate,
    private myModal: ModalControl
  ) {
    this.handleNewVersion();
  }

  async handleNewVersion() {
    if (this.swUpdate.isEnabled) {
      //v1.1
      console.log('swUpdate.isEnabled');
      const isNewVersion = await this.swUpdate.activateUpdate();
      if (isNewVersion) {
        window.location.reload();
        return;
        this.myModal.show({
          title: 'version_dialog_title',
          content: 'version_dialog_descriptions',
          showConfirmButton: true,
          cancelButton: {
            title: 'version_dialog_later',
            callback: () => {
              //
            }
          },
          confirmButton: {
            title: 'version_dialog_download_now',
            callback: () => {
              window.location.reload();
            }
          },
          ngbModalConfig: {
            backdrop: 'static'
          }
        });
      }
    }
  }
}
