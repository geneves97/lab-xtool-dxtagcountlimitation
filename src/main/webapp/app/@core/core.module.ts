import {
  APP_INITIALIZER,
  DEFAULT_CURRENCY_CODE,
  ErrorHandler,
  LOCALE_ID,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {SideNavOuterToolbarModule} from './layout';
import localePt from '@angular/common/locales/pt';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {ExceptionHandler} from './handlers/exception-handler';
import {loadMessages, locale} from "devextreme/localization";
import ptMessages from 'devextreme/localization/messages/pt.json';
import config from "devextreme/core/config";
import {SecurityModule} from "../@security/security.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SecurityModule,
  ],
  exports: [
    HttpClientModule,
    SideNavOuterToolbarModule
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'R$' },
    { provide: ErrorHandler, useClass: ExceptionHandler },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule,
              library: FaIconLibrary) {
    if (core) {
      throw new Error("Módulo Core já importado! O mesmo deve ser importado apenas no módulo raiz (AppModule). ")
    }
    registerLocaleData(localePt);
    library.addIconPacks(fas);
    loadMessages(ptMessages);
    locale(navigator.language);
    config({
      defaultCurrency: 'BRL'
    });
    console.log("CoreModule carregado.");
  }
}
