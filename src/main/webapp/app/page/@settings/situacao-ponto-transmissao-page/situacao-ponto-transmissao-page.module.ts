import { NgModule } from '@angular/core';
import { SituacaoPontoTransmissaoListComponent } from './situacao-ponto-transmissao-list/situacao-ponto-transmissao-list.component';
import { SituacaoPontoTransmissaoPageRoutingModule } from './situacao-ponto-transmissao-page-routing.module';
import { SituacaoPontoTransmissaoPageComponent } from './situacao-ponto-transmissao-page.component';
import { SharedModule } from '../../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [SituacaoPontoTransmissaoListComponent, SituacaoPontoTransmissaoPageComponent],
  imports: [SituacaoPontoTransmissaoPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class SituacaoPontoTransmissaoPageModule {}
