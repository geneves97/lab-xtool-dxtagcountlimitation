import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { PessoaService } from '../../../service/pessoa.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { PessoaConfig } from '../pessoa-config';

class PessoaDetail {
  id?: number;
  nome?: string;
  dtNascimento?: Date;
}

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
})
export class PessoaDetailComponent extends StandardNgDetailComponent<PessoaDetail, number> implements OnInit {
  config: StandardNgConfig = PessoaConfig;

  constructor(injector: Injector, PessoaService: PessoaService) {
    super(injector, PessoaService);
  }

  ngOnInit(): void {
    this.load();
  }
}
