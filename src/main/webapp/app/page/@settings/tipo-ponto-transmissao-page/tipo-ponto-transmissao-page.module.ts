import { NgModule } from '@angular/core';
import { TipoPontoTransmissaoListComponent } from './tipo-ponto-transmissao-list/tipo-ponto-transmissao-list.component';
import { TipoPontoTransmissaoEditComponent } from './tipo-ponto-transmissao-edit/tipo-ponto-transmissao-edit.component';
import { TipoPontoTransmissaoPageRoutingModule } from './tipo-ponto-transmissao-page-routing.module';
import { TipoPontoTransmissaoPageComponent } from './tipo-ponto-transmissao-page.component';
import { SharedModule } from '../../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [TipoPontoTransmissaoListComponent, TipoPontoTransmissaoEditComponent, TipoPontoTransmissaoPageComponent],
  exports: [TipoPontoTransmissaoEditComponent],
  imports: [TipoPontoTransmissaoPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class TipoPontoTransmissaoPageModule {}
