import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SecurityAuthTokenHttpInterceptor} from "./interceptor/security-auth-token-http-interceptor.service";
import {SecurityIdentity} from "./service/security-identity.service";
import {NgxPermissionsModule} from "ngx-permissions";

export function initializeSecurity(securityIdentity: SecurityIdentity) {
  console.log("[SecurityModule] initializeSecurity(): Inicializando...")
  return securityIdentity.init()
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SecurityAuthTokenHttpInterceptor, multi: true},
    {
      provide: APP_INITIALIZER,
      useFactory: (securityIdentity: SecurityIdentity) => () => initializeSecurity(securityIdentity),
      multi: true,
      deps: [SecurityIdentity]
    }
  ],
})
export class SecurityModule {

  constructor(@Optional() @SkipSelf() security: SecurityModule) {
    if (security) {
      throw new Error("Módulo Security já importado! O mesmo deve ser importado apenas no módulo core (CoreModule). ")
    }
    console.log("[SecurityModule] Carregado com sucesso!");
  }
}
