import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { SituacaoPontoTransmissaoService } from '../../../../service/situacao-ponto-transmissao.service';
import { StandardNgListComponent } from '../../../../@core/template/standard-ng-list-component';
import { SituacaoPontoTransmissaoConfig } from '../situacao-ponto-transmissao-config';
import { StandardNgConfig } from '../../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class SituacaoPontoTransmissaoListView {
  id?: number;
  nome?: string;
  codigo?: string;
}

@Component({
  selector: 'app-situacao-ponto-transmissao-list',
  templateUrl: './situacao-ponto-transmissao-list.component.html',
})
export class SituacaoPontoTransmissaoListComponent extends StandardNgListComponent<SituacaoPontoTransmissaoListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = SituacaoPontoTransmissaoConfig;

  constructor(injector: Injector, protected SituacaoPontoTransmissaoService: SituacaoPontoTransmissaoService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, SituacaoPontoTransmissaoService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [];
  }

  onSaveSituacaoPontoTransmissao(event) {
    this.dataSource.reload();
  }
}
