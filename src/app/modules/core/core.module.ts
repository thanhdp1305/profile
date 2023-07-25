import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routes';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { Api } from '../shared/networks/api';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GuestMainComponent } from './components/guest-main/guest-main.component';
import { Roles } from '../shared/commons/roles';
import { HeaderComponent } from './components/header/header.component';
import { ModalControl } from '../shared/services/modal-control.service';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    GuestMainComponent,
  ],
  imports: [CommonModule, TranslateModule, RouterModule.forChild(CoreRoutes)],
  providers: [Api, NgSelectModule, Roles, ModalControl],
  exports: [RouterModule],
})
export class CoreModule {}
