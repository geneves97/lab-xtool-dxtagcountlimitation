import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path : 'home',
    loadChildren : () => import('./page/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path : 'local-votacao',
    loadChildren : () => import('./page/local-votacao-page/local-votacao-page.module').then(m => m.LocalVotacaoPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'local-votacao:resource:view'
      }
    }
  },
  {
    path : 'municipio',
    loadChildren : () => import('./page/municipio-page/municipio-page.module').then(m => m.MunicipioPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'municipio:resource:view'
      }
    }
  },
  {
    path : 'pessoa',
    loadChildren : () => import('./page/pessoa-page/pessoa-page.module').then(m => m.PessoaPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'pessoa:resource:view'
      }
    }
  },
  {
    path : 'tipo-pessoa',
    loadChildren : () => import('./page/@settings/tipo-pessoa-page/tipo-pessoa-page.module').then(m => m.TipoPessoaPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'tipo-pessoa:resource:view'
      }
    }
  },
  {
    path : 'ponto-transmissao',
    loadChildren : () => import('./page/ponto-transmissao-page/ponto-transmissao-page.module').then(m => m.PontoTransmissaoPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'ponto-transmissao:resource:view'
      }
    }
  },
  {
    path : 'tipo-ponto-transmissao',
    loadChildren : () => import('./page/@settings/tipo-ponto-transmissao-page/tipo-ponto-transmissao-page.module').then(m => m.TipoPontoTransmissaoPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'tipo-ponto-transmissao:resource:view'
      }
    }
  },
  {
    path : 'situacao-ponto-transmissao',
    loadChildren : () => import('./page/@settings/situacao-ponto-transmissao-page/situacao-ponto-transmissao-page.module').then(m => m.SituacaoPontoTransmissaoPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'situacao-ponto-transmissao:resource:view'
      }
    }
  },
  {
    path : 'secao',
    loadChildren : () => import('./page/secao-page/secao-page.module').then(m => m.SecaoPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'secao:resource:view'
      }
    }
  },
  {
    path : 'zona',
    loadChildren : () => import('./page/zona-page/zona-page.module').then(m => m.ZonaPageModule),
    canActivate : [NgxPermissionsGuard],
    data : {
      permissions : {
        only : 'zona:resource:view'
      }
    }
  },
  {
    path : '**',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
