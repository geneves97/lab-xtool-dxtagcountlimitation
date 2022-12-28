import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./page/home-page/home-page.module').then(m => m.HomePageModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
