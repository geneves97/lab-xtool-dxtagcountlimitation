import { NgModule } from '@angular/core';
import { MunicipioListComponent } from './municipio-list/municipio-list.component';
import { MunicipioDetailComponent } from './municipio-detail/municipio-detail.component';
import { MunicipioPageRoutingModule } from './municipio-page-routing.module';
import { MunicipioPageComponent } from './municipio-page.component';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [MunicipioListComponent, MunicipioDetailComponent, MunicipioPageComponent],
  imports: [MunicipioPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class MunicipioPageModule {}
