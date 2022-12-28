import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { Router } from '@angular/router';
import {UserPanelModule} from "../user-panel/user-panel.component";
import {SecurityIdentity} from "../../../../@security/service/security-identity.service";
import {AppInfo, AppInfoService} from "../../../service/app-info.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  user = { email: '' };

  appInfo$: Observable<AppInfo>

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.securityService.logout();
    }
  }];

  constructor(private router: Router,
              private securityService: SecurityIdentity,
              private appInfoService: AppInfoService) {
    this.user.email = securityService.getEmail();
    this.appInfo$ = this.appInfoService.getAppInfo()
  }

  ngOnInit() {
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxToolbarModule,
    UserPanelModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
