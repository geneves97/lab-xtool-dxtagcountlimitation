import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PontoTransmissaoListComponent } from './ponto-transmissao-list/ponto-transmissao-list.component';
import { PontoTransmissaoEditComponent } from './ponto-transmissao-edit/ponto-transmissao-edit.component';
import { PontoTransmissaoDetailComponent } from './ponto-transmissao-detail/ponto-transmissao-detail.component';
import { PontoTransmissaoPageComponent } from './ponto-transmissao-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: PontoTransmissaoPageComponent,
    children: [
      { path: '', component: PontoTransmissaoListComponent },
      {
        path: 'edit',
        children: [
          {
            path: '',
            component: PontoTransmissaoEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'ponto-transmissao:resource:create',
              },
            },
          },
          {
            path: ':id',
            component: PontoTransmissaoEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'ponto-transmissao:resource:update',
              },
            },
          },
        ],
      },
      { path: ':id', component: PontoTransmissaoDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoTransmissaoPageRoutingModule {}
