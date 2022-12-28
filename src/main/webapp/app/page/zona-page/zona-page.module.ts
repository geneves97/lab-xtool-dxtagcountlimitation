import { NgModule } from '@angular/core';
import { ZonaListComponent } from './zona-list/zona-list.component';
import { ZonaDetailComponent } from './zona-detail/zona-detail.component';
import { ZonaPageRoutingModule } from './zona-page-routing.module';
import { ZonaPageComponent } from './zona-page.component';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [ZonaListComponent, ZonaDetailComponent, ZonaPageComponent],
  imports: [ZonaPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class ZonaPageModule {}
