import {Component, isDevMode} from '@angular/core';
import {SecurityIdentity} from '../../@security/service/security-identity.service';
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  username: string;

  userInfo: any;

  groups: string[];

  accessToken: string;

  permissions: string[];

  constructor(private identity: SecurityIdentity) {
    if (isDevMode()) {
      this.username = identity.getUsername();
      this.userInfo = identity.getUserInfo();
      this.groups = identity.getGroups();
      identity.getAccessToken().subscribe(token => this.accessToken = jwtDecode(token));
      this.permissions = identity.getPermissions()
    }
  }
}
