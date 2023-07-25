import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routes';
import { TranslateModule } from '@ngx-translate/core';
import { Api } from '../shared/networks/api';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { Roles } from '../shared/commons/roles';
import { ModalControl } from '../shared/services/modal-control.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(ProfileRoutes),
  ],
  providers: [Api, NgSelectModule, Roles, ModalControl],
  exports: [RouterModule],
})
export class ProfileModule {}
