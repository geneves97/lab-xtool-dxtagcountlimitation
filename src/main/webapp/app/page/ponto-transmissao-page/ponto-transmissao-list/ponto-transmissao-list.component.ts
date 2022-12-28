import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { PontoTransmissaoService } from '../../../service/ponto-transmissao.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { PontoTransmissaoConfig } from '../ponto-transmissao-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class PontoTransmissaoListView {
  id?: number;
  nome?: string;
  numero?: number;
  endereco?: string;
  habilitado?: boolean;
  dtCriacao?: Date;
}

@Component({
  selector: 'app-ponto-transmissao-list',
  templateUrl: './ponto-transmissao-list.component.html',
})
export class PontoTransmissaoListComponent extends StandardNgListComponent<PontoTransmissaoListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = PontoTransmissaoConfig;

  constructor(injector: Injector, protected PontoTransmissaoService: PontoTransmissaoService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, PontoTransmissaoService);
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
          onClick: this.create.bind(this),
          onInitialized: (args: any) => {
            const hasCreatePermission = this.ngxPermissionService.getPermission('ponto-transmissao:resource:create');
            const isVisible = !this.config.isReadOnly && hasCreatePermission;
            args.component.option('visible', isVisible);
          },
        },
      },
    ];
  }
}
