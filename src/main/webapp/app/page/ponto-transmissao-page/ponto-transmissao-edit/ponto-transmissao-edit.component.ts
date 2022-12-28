import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';

import { StandardNgEditComponent } from '../../../@core/template/standard-ng-edit-component';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';

import { LoadOptions } from 'devextreme/data/load_options';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { PontoTransmissaoConfig } from '../ponto-transmissao-config';
import { PontoTransmissaoService } from '../../../service/ponto-transmissao.service';
import { take } from 'rxjs/internal/operators/take';
import { LocalVotacaoService } from '../../../service/local-votacao.service';
import { TipoPontoTransmissaoService } from '../../../service/tipo-ponto-transmissao.service';
import { SituacaoPontoTransmissaoService } from '../../../service/situacao-ponto-transmissao.service';
import {
  TipoPontoTransmissaoEdit,
  TipoPontoTransmissaoEditComponent,
} from '../../@settings/tipo-ponto-transmissao-page/tipo-ponto-transmissao-edit/tipo-ponto-transmissao-edit.component';

class PontoTransmissaoEdit {
  id?: number;
  nome?: string;
  numero?: number;
  endereco?: string;
  habilitado?: boolean;
  dtCriacao?: Date;
  locaisVotacao?: number[];
  tipoPontoTransmissao?: { id: number };
  situacaoPontoTransmissao?: { id: number };
}

@Component({
  selector: 'app-ponto-transmissao-edit',
  templateUrl: './ponto-transmissao-edit.component.html',
  styles: [],
})
export class PontoTransmissaoEditComponent extends StandardNgEditComponent<PontoTransmissaoEdit, number> implements OnInit {
  @ViewChild(DxFormComponent, { static: true })
  form: DxFormComponent;

  config: StandardNgConfig = PontoTransmissaoConfig;

  // Definição de DataSource do componente DxTagBox para o attributo localVotacao
  localVotacaoDxTagBoxDataSource: DataSource = new DataSource({
    // @see https://js.devexpress.com/Documentation/20_2/ApiReference/Data_Layer/CustomStore/
    store: new CustomStore({
      key: 'id',
      byKey: (key: number) => this.localVotacaoService.findById(key).toPromise(),
      load: options => this.localVotacaoService.findAll(options).toPromise(),
    }),
    // Filtro para retornar apenas os LocalVotacao não relacionados com PontoTransmissao
    filter: [['pontoTransmissaoId', '=', 'null']],
  });
  // Definição de DataSource do componente DxSelectBox para o attributo tipoPontoTransmissao
  tipoPontoTransmissaoDxSelectBoxDataSource = new DataSource({
    // @see https://js.devexpress.com/Documentation/20_2/ApiReference/Data_Layer/CustomStore/
    store: new CustomStore({
      key: 'id',
      byKey: (key: number) => this.tipoPontoTransmissaoService.findById(key).toPromise(),
      load: (options: LoadOptions) => this.tipoPontoTransmissaoService.findAll(options).toPromise(),
    }),
    sort: [{ selector: 'nome', desc: false }],
  });

  // Definição de DataSource do componente DxSelectBox para o attributo situacaoPontoTransmissao
  situacaoPontoTransmissaoDxSelectBoxDataSource = new DataSource({
    // @see https://js.devexpress.com/Documentation/20_2/ApiReference/Data_Layer/CustomStore/
    store: new CustomStore({
      key: 'id',
      byKey: (key: number) => this.situacaoPontoTransmissaoService.findById(key).toPromise(),
      load: (options: LoadOptions) => this.situacaoPontoTransmissaoService.findAll(options).toPromise(),
    }),
    sort: [{ selector: 'nome', desc: false }],
  });

  @ViewChild('tipoPontoTransmissaoEditComponent')
  tipoPontoTransmissaoEditComponent: TipoPontoTransmissaoEditComponent;

  tipoPontoTransmissaoAddButtonOptions = {
    text: 'Tipo de Ponto de Transmissão',
    hint: 'Tipo de Ponto de Transmissão',
    icon: 'plus',
    type: 'normal',
    onClick: e => this.tipoPontoTransmissaoEditComponent.create(TipoPontoTransmissaoEdit),
  };

  constructor(
    injector: Injector,
    protected pontoTransmissaoService: PontoTransmissaoService,
    private localVotacaoService: LocalVotacaoService,
    private tipoPontoTransmissaoService: TipoPontoTransmissaoService,
    private situacaoPontoTransmissaoService: SituacaoPontoTransmissaoService
  ) {
    super(injector, pontoTransmissaoService);
  }

  ngOnInit() {
    this.load(PontoTransmissaoEdit);
  }

  async onSaveTipoPontoTransmissao(resource: TipoPontoTransmissaoEdit) {
    await this.tipoPontoTransmissaoDxSelectBoxDataSource.reload();
    this.form.instance.getEditor('tipoPontoTransmissao').option('value', resource.id);
  }
}
