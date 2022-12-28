import { NgModule } from '@angular/core';
import { SecaoListComponent } from './secao-list/secao-list.component';
import { SecaoDetailComponent } from './secao-detail/secao-detail.component';
import { SecaoPageRoutingModule } from './secao-page-routing.module';
import { SecaoPageComponent } from './secao-page.component';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [SecaoListComponent, SecaoDetailComponent, SecaoPageComponent],
  imports: [SecaoPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class SecaoPageModule {}
