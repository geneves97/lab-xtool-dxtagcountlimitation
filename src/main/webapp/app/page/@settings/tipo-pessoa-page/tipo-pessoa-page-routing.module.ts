import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoPessoaListComponent } from './tipo-pessoa-list/tipo-pessoa-list.component';
import { TipoPessoaEditComponent } from './tipo-pessoa-edit/tipo-pessoa-edit.component';
import { TipoPessoaPageComponent } from './tipo-pessoa-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: TipoPessoaPageComponent,
    children: [
      { path: '', component: TipoPessoaListComponent },
      {
        path: 'edit',
        children: [
          {
            path: '',
            component: TipoPessoaEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'tipo-pessoa:resource:create',
              },
            },
          },
          {
            path: ':id',
            component: TipoPessoaEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'tipo-pessoa:resource:update',
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
export class TipoPessoaPageRoutingModule {}
