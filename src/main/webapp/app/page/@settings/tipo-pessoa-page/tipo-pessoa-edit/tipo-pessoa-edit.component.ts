import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { StandardNgConfig } from '../../../../@core/template/standard-ng-config';
import { TipoPessoaConfig } from '../tipo-pessoa-config';
import { TipoPessoaService } from '../../../../service/tipo-pessoa.service';
import { DialogNgEditComponent } from '../../../../@core/template/dialog-ng-edit-component';

export class TipoPessoaEdit {
  id?: number;
  nome?: string;
  codigo?: string;
}

@Component({
  selector: 'app-tipo-pessoa-edit',
  templateUrl: './tipo-pessoa-edit.component.html',
  styles: [],
})
export class TipoPessoaEditComponent extends DialogNgEditComponent<TipoPessoaEdit, number> implements OnInit {
  @ViewChild(DxFormComponent, { static: true })
  form: DxFormComponent;

  @Output()
  onAfterSave: EventEmitter<TipoPessoaEdit>;

  config: StandardNgConfig = TipoPessoaConfig;

  constructor(injector: Injector, protected tipoPessoaService: TipoPessoaService) {
    super(injector, tipoPessoaService);
  }

  ngOnInit() {}
}
