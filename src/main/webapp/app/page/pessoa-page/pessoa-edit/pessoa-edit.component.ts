import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';

import { StandardNgEditComponent } from '../../../@core/template/standard-ng-edit-component';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';

import { LoadOptions } from 'devextreme/data/load_options';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { PessoaConfig } from '../pessoa-config';
import { PessoaService } from '../../../service/pessoa.service';
import { take } from 'rxjs/internal/operators/take';
import { TipoPessoaService } from '../../../service/tipo-pessoa.service';
import { TipoPessoaEdit, TipoPessoaEditComponent } from '../../@settings/tipo-pessoa-page/tipo-pessoa-edit/tipo-pessoa-edit.component';

class PessoaEdit {
  id?: number;
  nome?: string;
  dtNascimento?: Date;
  tipoPessoa?: { id: number };
}

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styles: [],
})
export class PessoaEditComponent extends StandardNgEditComponent<PessoaEdit, number> implements OnInit {
  @ViewChild(DxFormComponent, { static: true })
  form: DxFormComponent;

  config: StandardNgConfig = PessoaConfig;

  // Definição de DataSource do componente DxSelectBox para o attributo tipoPessoa
  tipoPessoaDxSelectBoxDataSource = new DataSource({
    // @see https://js.devexpress.com/Documentation/20_2/ApiReference/Data_Layer/CustomStore/
    store: new CustomStore({
      key: 'id',
      byKey: (key: number) => this.tipoPessoaService.findById(key).toPromise(),
      load: (options: LoadOptions) => this.tipoPessoaService.findAll(options).toPromise(),
    }),
    sort: [{ selector: 'nome', desc: false }],
  });

  @ViewChild('tipoPessoaEditComponent')
  tipoPessoaEditComponent: TipoPessoaEditComponent;

  tipoPessoaAddButtonOptions = {
    text: 'Tipo de Pessoa',
    hint: 'Tipo de Pessoa',
    icon: 'plus',
    type: 'normal',
    onClick: e => this.tipoPessoaEditComponent.create(TipoPessoaEdit),
  };

  constructor(injector: Injector, protected pessoaService: PessoaService, private tipoPessoaService: TipoPessoaService) {
    super(injector, pessoaService);
  }

  ngOnInit() {
    this.load(PessoaEdit);
  }

  async onSaveTipoPessoa(resource: TipoPessoaEdit) {
    await this.tipoPessoaDxSelectBoxDataSource.reload();
    this.form.instance.getEditor('tipoPessoa').option('value', resource.id);
  }
}
