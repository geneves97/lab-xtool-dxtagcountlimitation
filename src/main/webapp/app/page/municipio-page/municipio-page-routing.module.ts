import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipioListComponent } from './municipio-list/municipio-list.component';
import { MunicipioDetailComponent } from './municipio-detail/municipio-detail.component';
import { MunicipioPageComponent } from './municipio-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: MunicipioPageComponent,
    children: [
      { path: '', component: MunicipioListComponent },
      { path: ':id', component: MunicipioDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipioPageRoutingModule {}
