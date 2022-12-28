import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SituacaoPontoTransmissaoListComponent } from './situacao-ponto-transmissao-list/situacao-ponto-transmissao-list.component';
import { SituacaoPontoTransmissaoPageComponent } from './situacao-ponto-transmissao-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: SituacaoPontoTransmissaoPageComponent,
    children: [{ path: '', component: SituacaoPontoTransmissaoListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituacaoPontoTransmissaoPageRoutingModule {}
