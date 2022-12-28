import { DxFormComponent } from 'devextreme-angular/ui/form';
import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { StandardNgConfig } from '../../../../@core/template/standard-ng-config';
import { TipoPontoTransmissaoConfig } from '../tipo-ponto-transmissao-config';
import { TipoPontoTransmissaoService } from '../../../../service/tipo-ponto-transmissao.service';
import { DialogNgEditComponent } from '../../../../@core/template/dialog-ng-edit-component';

export class TipoPontoTransmissaoEdit {
  id?: number;
  nome?: string;
  codigo?: string;
}

@Component({
  selector: 'app-tipo-ponto-transmissao-edit',
  templateUrl: './tipo-ponto-transmissao-edit.component.html',
  styles: [],
})
export class TipoPontoTransmissaoEditComponent extends DialogNgEditComponent<TipoPontoTransmissaoEdit, number> implements OnInit {
  @ViewChild(DxFormComponent, { static: true })
  form: DxFormComponent;

  @Output()
  onAfterSave: EventEmitter<TipoPontoTransmissaoEdit>;

  config: StandardNgConfig = TipoPontoTransmissaoConfig;

  constructor(injector: Injector, protected tipoPontoTransmissaoService: TipoPontoTransmissaoService) {
    super(injector, tipoPontoTransmissaoService);
  }

  ngOnInit() {}
}
