import { NgModule } from '@angular/core';
import { SecaoListComponent } from './secao-list/secao-list.component';
import { SecaoDetailComponent } from './secao-detail/secao-detail.component';
import { SecaoPageRoutingModule } from './secao-page-routing.module';
import { SecaoPageComponent } from './secao-page.component';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import {BrowserModule} from "@angular/platform-browser";
import {DxTagBoxModule, DxTemplateModule} from "devextreme-angular";
import {AppComponent} from "../../app.component";
import {SecaoService} from "../../service/secao.service";

@NgModule({
  declarations: [SecaoListComponent, SecaoDetailComponent, SecaoPageComponent,BrowserModule, DxTemplateModule, DxTagBoxModule,AppComponent],
  imports: [SecaoPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
  bootstrap: [AppComponent],
  providers: [SecaoService],
})
export class SecaoPageModule {}
