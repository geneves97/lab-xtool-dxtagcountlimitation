import {Injectable} from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {environment} from "../../../environments/environment";
import {NgxPermissionsService} from "ngx-permissions";
import jwtDecode from "jwt-decode";
import {audit} from "rxjs/operators";

declare var Keycloak: any;

declare var KeycloakAuthorization: any;

/**
 * Classe de Service com as funções de segurança.
 */
@Injectable({
  providedIn: 'root',
})
export class SecurityIdentity {

  private keycloak: KeycloakInstance;

  private authorization: any;

  private _roles: string[];

  private _permissions: string[] = [];

  private _groups: string[];

  private _userInfo: any;

  constructor(private ngxPermissionService: NgxPermissionsService) {
  }



  init(): Promise<boolean> {
    console.log('[SecurityIdentity] Inicializando...')

    const keycloak = Keycloak(environment.keycloak.config)
    return new Promise((resolve, reject) => {
      // Inicializa o Keycloak.
      keycloak.init(environment.keycloak.initOptions)
        .success(() => {
          this.keycloak = keycloak
          // Inicializa a funcionalidade de Autorização.
          this.authorization = new KeycloakAuthorization(this.keycloak)
          this.authorization.ready.then(() => {
            // Carregas as permissões.
            this.loadPermissions().then(() => {
              this.keycloak.loadUserInfo().then((userInfo) => {
                this._userInfo = userInfo
                console.log("[SecurityModule] initializeSecurity(): Finalizado com sucesso!")
                resolve(true)
              })
            })
          })
        })
        .error(err => {
          console.error(err)
          reject()
        })
    })
  }

  private loadPermissions(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.authorization.entitlement(environment.keycloak.config.resourceId).then(rpt => {
        // @ts-ignore
        console.log("[SecurityIdentity] Permissions: ", jwtDecode(rpt).authorization.permissions)
        // @ts-ignore
        const permissions = jwtDecode(rpt).authorization.permissions as [{ rsname: string, scopes: [] }];
        permissions.forEach(p => {
            if(p.scopes) {
              p.scopes.forEach(s => this._permissions.push(`${p.rsname}:${s}`));
              return;
            }
            this._permissions.push(`${p.rsname}`)
          }
        )
        this.ngxPermissionService.addPermission(this._permissions);
        resolve()
      });
    })
  }

  hasPermission(permission) {
    return this._permissions.includes(permission)
  }

  getPermissions() {
    return this._permissions;
  }

  // /**
  //  * Verifica se o usuário logado possui a role
  //  * @param roleName Nome da role
  //  */
  // private hasRole(roleName: string | string[]): boolean {
  //   if (Array.isArray(roleName)) {
  //     const _roleNames = roleName as string[];
  //     return _roleNames.some(r => this.getRoles().includes(r))
  //   }
  //   return this.getRoles().includes((roleName))
  // }
  //
  // /**
  //  * Retorna um array com todas as _roles do usuário logado
  //  */
  // private getRoles(): string[] {
  //   if (!this._roles) {
  //     this._roles = [];
  //     const resource = this.keycloak.tokenParsed.resource_access;
  //     for (const key in resource) {
  //       if (resource.hasOwnProperty(key) && key !== 'account') {
  //         const resourceAccess: any = resource[key];
  //         const clientRoles = resourceAccess.roles || [];
  //         this._roles = this._roles.concat(clientRoles);
  //       }
  //     }
  //   }
  //   return this._roles;
  // }

  /**
   * Retorna todos os grupos ao qual o usuário pertence.
   */
  getGroups(): string[] {
    if (!this._groups) {
      // @ts-ignore
      this._groups = this.keycloak.tokenParsed.groups;
    }
    return this._groups;
  }

  /**
   * Realiza a operação de logout.
   */
  logout(): void {
    this.keycloak.logout();
  }

  /**
   * Retorna o username do usuário logado.
   */
  getUsername(): string {
    // @ts-ignore
    return this.keycloak.tokenParsed.preferred_username;
  }

  /**
   * Retorna o email do usuário logado.
   */
  getEmail(): string {
    // @ts-ignore
    return this.keycloak.tokenParsed.email;
  }

  getUserInfo(): any {
    return this._userInfo;
  }

  // loadUserInfo(): Observable<any> {
  //   const p = new Promise<any>((resolve, reject) => {
  //     this.keycloak.updateToken(5)
  //       .then(() => resolve(this.keycloak.loadUserInfo()))
  //       .catch(() => reject('Failed to refresh token'));
  //   });
  //   return fromPromise(p);
  // }

  getAccessToken(): Observable<string> {
    const p = new Promise<string>((resolve, reject) => {
      if (this.keycloak.token) {
        this.keycloak
          .updateToken(5)
          .then(() => resolve(this.keycloak.token))
          .catch(() => reject('Failed to refresh token'));
      } else {
        reject('Not logged in');
      }
    });
    return fromPromise(p);
  }

}
