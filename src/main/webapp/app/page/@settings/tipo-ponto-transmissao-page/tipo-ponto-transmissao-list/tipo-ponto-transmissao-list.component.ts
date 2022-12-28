import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { TipoPontoTransmissaoService } from '../../../../service/tipo-ponto-transmissao.service';
import { StandardNgListComponent } from '../../../../@core/template/standard-ng-list-component';
import { TipoPontoTransmissaoConfig } from '../tipo-ponto-transmissao-config';
import { StandardNgConfig } from '../../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';
import { TipoPontoTransmissaoEdit, TipoPontoTransmissaoEditComponent } from '../tipo-ponto-transmissao-edit/tipo-ponto-transmissao-edit.component';

class TipoPontoTransmissaoListView {
  id?: number;
  nome?: string;
  codigo?: string;
}

@Component({
  selector: 'app-tipo-ponto-transmissao-list',
  templateUrl: './tipo-ponto-transmissao-list.component.html',
})
export class TipoPontoTransmissaoListComponent extends StandardNgListComponent<TipoPontoTransmissaoListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  @ViewChild('tipoPontoTransmissaoEditComponent')
  tipoPontoTransmissaoEditComponent: TipoPontoTransmissaoEditComponent;

  config: StandardNgConfig = TipoPontoTransmissaoConfig;

  constructor(injector: Injector, protected TipoPontoTransmissaoService: TipoPontoTransmissaoService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, TipoPontoTransmissaoService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [
      {
        location: 'before',
        locateInMenu: 'auto',
        widget: 'dxButton',
        options: {
          text: 'Novo',
          stylingMode: 'contained',
          type: 'default',
          onClick: () => this.tipoPontoTransmissaoEditComponent.create(TipoPontoTransmissaoEdit),
          onInitialized: (args: any) => {
            const hasCreatePermission = this.ngxPermissionService.getPermission('tipo-ponto-transmissao:resource:create');
            const isVisible = !this.config.isReadOnly && hasCreatePermission;
            args.component.option('visible', isVisible);
          },
        },
      },
    ];
  }

  edit(id: number) {
    this.tipoPontoTransmissaoEditComponent.edit(id);
  }

  onSaveTipoPontoTransmissao(event) {
    this.dataSource.reload();
  }
}
