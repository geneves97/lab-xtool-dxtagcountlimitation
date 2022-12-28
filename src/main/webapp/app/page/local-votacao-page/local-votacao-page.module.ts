import { NgModule } from '@angular/core';
import { LocalVotacaoListComponent } from './local-votacao-list/local-votacao-list.component';
import { LocalVotacaoDetailComponent } from './local-votacao-detail/local-votacao-detail.component';
import { LocalVotacaoPageRoutingModule } from './local-votacao-page-routing.module';
import { LocalVotacaoPageComponent } from './local-votacao-page.component';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [LocalVotacaoListComponent, LocalVotacaoDetailComponent, LocalVotacaoPageComponent],
  imports: [LocalVotacaoPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class LocalVotacaoPageModule {}
