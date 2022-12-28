import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoPontoTransmissaoListComponent } from './tipo-ponto-transmissao-list/tipo-ponto-transmissao-list.component';
import { TipoPontoTransmissaoEditComponent } from './tipo-ponto-transmissao-edit/tipo-ponto-transmissao-edit.component';
import { TipoPontoTransmissaoPageComponent } from './tipo-ponto-transmissao-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: TipoPontoTransmissaoPageComponent,
    children: [
      { path: '', component: TipoPontoTransmissaoListComponent },
      {
        path: 'edit',
        children: [
          {
            path: '',
            component: TipoPontoTransmissaoEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'tipo-ponto-transmissao:resource:create',
              },
            },
          },
          {
            path: ':id',
            component: TipoPontoTransmissaoEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'tipo-ponto-transmissao:resource:update',
              },
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoPontoTransmissaoPageRoutingModule {}
