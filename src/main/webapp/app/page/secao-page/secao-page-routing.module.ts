import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecaoListComponent } from './secao-list/secao-list.component';
import { SecaoDetailComponent } from './secao-detail/secao-detail.component';
import { SecaoPageComponent } from './secao-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: SecaoPageComponent,
    children: [
      { path: '', component: SecaoListComponent },
      { path: ':id', component: SecaoDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecaoPageRoutingModule {}
