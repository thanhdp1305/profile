import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  TranslateCacheModule,
  TranslateCacheService,
  TranslateCacheSettings,
} from 'ngx-translate-cache';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from './modules/shared/shared.module';
import { Api } from './modules/shared/networks/api';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalControl } from './modules/shared/services/modal-control.service';
import { environment } from 'src/environments/environment';
import { CoreModule } from './modules/core/core.module';

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vi',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheMechanism: 'LocalStorage',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.serviceWorker,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    SharedModule,
    NgSelectModule,
  ],
  providers: [Api, ModalControl],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private config: NgSelectConfig
  ) {
    // Config Ngx-Translate
    translateCacheService.init();
    translate.addLangs(['en', 'vi']);
    const browserLang = 'en'; //translateCacheService.getCachedLanguage() || 'vi';
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');

    //Ng-select config
    this.config.notFoundText = 'Không tìm thấy kết quả';
    this.config.loadingText = 'Đang tìm...';
    this.config.typeToSearchText = 'Gõ từ khóa để tìm kiếm';
    this.config.bindValue = 'value';
  }
}
