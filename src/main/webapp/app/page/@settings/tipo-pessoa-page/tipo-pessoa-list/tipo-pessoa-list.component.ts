import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { TipoPessoaService } from '../../../../service/tipo-pessoa.service';
import { StandardNgListComponent } from '../../../../@core/template/standard-ng-list-component';
import { TipoPessoaConfig } from '../tipo-pessoa-config';
import { StandardNgConfig } from '../../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';
import { TipoPessoaEdit, TipoPessoaEditComponent } from '../tipo-pessoa-edit/tipo-pessoa-edit.component';

class TipoPessoaListView {
  id?: number;
  nome?: string;
  codigo?: string;
}

@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
})
export class TipoPessoaListComponent extends StandardNgListComponent<TipoPessoaListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  @ViewChild('tipoPessoaEditComponent')
  tipoPessoaEditComponent: TipoPessoaEditComponent;

  config: StandardNgConfig = TipoPessoaConfig;

  constructor(injector: Injector, protected TipoPessoaService: TipoPessoaService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, TipoPessoaService);
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
          onClick: () => this.tipoPessoaEditComponent.create(TipoPessoaEdit),
          onInitialized: (args: any) => {
            const hasCreatePermission = this.ngxPermissionService.getPermission('tipo-pessoa:resource:create');
            const isVisible = !this.config.isReadOnly && hasCreatePermission;
            args.component.option('visible', isVisible);
          },
        },
      },
    ];
  }

  edit(id: number) {
    this.tipoPessoaEditComponent.edit(id);
  }

  onSaveTipoPessoa(event) {
    this.dataSource.reload();
  }
}
