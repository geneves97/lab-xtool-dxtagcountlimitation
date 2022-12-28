import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { PontoTransmissaoService } from '../../../service/ponto-transmissao.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { PontoTransmissaoConfig } from '../ponto-transmissao-config';

class PontoTransmissaoDetail {
  id?: number;
  nome?: string;
  numero?: number;
  endereco?: string;
  habilitado?: boolean;
  dtCriacao?: Date;
}

@Component({
  selector: 'app-ponto-transmissao-detail',
  templateUrl: './ponto-transmissao-detail.component.html',
})
export class PontoTransmissaoDetailComponent extends StandardNgDetailComponent<PontoTransmissaoDetail, number> implements OnInit {
  config: StandardNgConfig = PontoTransmissaoConfig;

  constructor(injector: Injector, PontoTransmissaoService: PontoTransmissaoService) {
    super(injector, PontoTransmissaoService);
  }

  ngOnInit(): void {
    this.load();
  }
}
