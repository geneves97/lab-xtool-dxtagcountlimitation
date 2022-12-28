import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonaListComponent } from './zona-list/zona-list.component';
import { ZonaDetailComponent } from './zona-detail/zona-detail.component';
import { ZonaPageComponent } from './zona-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: ZonaPageComponent,
    children: [
      { path: '', component: ZonaListComponent },
      { path: ':id', component: ZonaDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaPageRoutingModule {}
