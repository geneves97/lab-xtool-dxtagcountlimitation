import { NgModule } from '@angular/core';
import { PontoTransmissaoListComponent } from './ponto-transmissao-list/ponto-transmissao-list.component';
import { PontoTransmissaoEditComponent } from './ponto-transmissao-edit/ponto-transmissao-edit.component';
import { PontoTransmissaoDetailComponent } from './ponto-transmissao-detail/ponto-transmissao-detail.component';
import { PontoTransmissaoPageRoutingModule } from './ponto-transmissao-page-routing.module';
import { PontoTransmissaoPageComponent } from './ponto-transmissao-page.component';
import { TipoPontoTransmissaoPageModule } from '../@settings/tipo-ponto-transmissao-page/tipo-ponto-transmissao-page.module';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [PontoTransmissaoListComponent, PontoTransmissaoEditComponent, PontoTransmissaoDetailComponent, PontoTransmissaoPageComponent],
  imports: [PontoTransmissaoPageRoutingModule, TipoPontoTransmissaoPageModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class PontoTransmissaoPageModule {}
