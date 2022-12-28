import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityIdentity} from '../service/security-identity.service';
import {mergeMap} from 'rxjs/operators';

/**
 * HttpInterceptor que intercepta todas as requisições HTTP para inclusão do HTTP Header de Authorization com o
 * AccessToken do usuário.
 */
@Injectable()
export class SecurityAuthTokenHttpInterceptor implements HttpInterceptor {

  constructor(private securityService: SecurityIdentity) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.securityService.getAccessToken().pipe(
      mergeMap((accessToken: string) => {
        if (accessToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}
