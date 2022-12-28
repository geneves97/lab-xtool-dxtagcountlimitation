import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalVotacaoListComponent } from './local-votacao-list/local-votacao-list.component';
import { LocalVotacaoDetailComponent } from './local-votacao-detail/local-votacao-detail.component';
import { LocalVotacaoPageComponent } from './local-votacao-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: LocalVotacaoPageComponent,
    children: [
      { path: '', component: LocalVotacaoListComponent },
      { path: ':id', component: LocalVotacaoDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalVotacaoPageRoutingModule {}
