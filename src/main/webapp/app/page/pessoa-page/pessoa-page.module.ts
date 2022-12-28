import { NgModule } from '@angular/core';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaPageRoutingModule } from './pessoa-page-routing.module';
import { PessoaPageComponent } from './pessoa-page.component';
import { TipoPessoaPageModule } from '../@settings/tipo-pessoa-page/tipo-pessoa-page.module';
import { SharedModule } from '../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [PessoaListComponent, PessoaEditComponent, PessoaDetailComponent, PessoaPageComponent],
  imports: [PessoaPageRoutingModule, TipoPessoaPageModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class PessoaPageModule {}
