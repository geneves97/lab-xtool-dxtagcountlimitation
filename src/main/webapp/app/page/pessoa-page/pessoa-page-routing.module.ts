import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaPageComponent } from './pessoa-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: PessoaPageComponent,
    children: [
      { path: '', component: PessoaListComponent },
      {
        path: 'edit',
        children: [
          {
            path: '',
            component: PessoaEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'pessoa:resource:create',
              },
            },
          },
          {
            path: ':id',
            component: PessoaEditComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              permissions: {
                only: 'pessoa:resource:update',
              },
            },
          },
        ],
      },
      { path: ':id', component: PessoaDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaPageRoutingModule {}
