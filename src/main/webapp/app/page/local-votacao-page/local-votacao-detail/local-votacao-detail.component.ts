import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { LocalVotacaoService } from '../../../service/local-votacao.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { LocalVotacaoConfig } from '../local-votacao-config';

class LocalVotacaoDetail {
  id?: number;
  nome?: string;
  numero?: number;
  cep?: string;
}

@Component({
  selector: 'app-local-votacao-detail',
  templateUrl: './local-votacao-detail.component.html',
})
export class LocalVotacaoDetailComponent extends StandardNgDetailComponent<LocalVotacaoDetail, number> implements OnInit {
  config: StandardNgConfig = LocalVotacaoConfig;

  constructor(injector: Injector, LocalVotacaoService: LocalVotacaoService) {
    super(injector, LocalVotacaoService);
  }

  ngOnInit(): void {
    this.load();
  }
}
