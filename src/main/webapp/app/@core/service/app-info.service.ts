import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export class AppInfo {
  app: { name: string };
  git: { commit: { id: string } };
  build: { version: string }
}

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  URL_API: string = `${environment.contextPath}/actuator/info`;

  constructor(private httpClient: HttpClient) {
  }

  public getAppInfo(): Observable<AppInfo> {
    return this.httpClient.get<AppInfo>(this.URL_API);
  }

}
