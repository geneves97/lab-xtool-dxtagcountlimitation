import { NgModule } from '@angular/core';
import { TipoPessoaListComponent } from './tipo-pessoa-list/tipo-pessoa-list.component';
import { TipoPessoaEditComponent } from './tipo-pessoa-edit/tipo-pessoa-edit.component';
import { TipoPessoaPageRoutingModule } from './tipo-pessoa-page-routing.module';
import { TipoPessoaPageComponent } from './tipo-pessoa-page.component';
import { SharedModule } from '../../../@shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [TipoPessoaListComponent, TipoPessoaEditComponent, TipoPessoaPageComponent],
  exports: [TipoPessoaEditComponent],
  imports: [TipoPessoaPageRoutingModule, SharedModule, NgxPermissionsModule.forChild()],
})
export class TipoPessoaPageModule {}
