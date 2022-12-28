import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { PessoaService } from '../../../service/pessoa.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { PessoaConfig } from '../pessoa-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class PessoaListView {
  id?: number;
  nome?: string;
  dtNascimento?: Date;
}

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
})
export class PessoaListComponent extends StandardNgListComponent<PessoaListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = PessoaConfig;

  constructor(injector: Injector, protected PessoaService: PessoaService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, PessoaService);
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
            const hasCreatePermission = this.ngxPermissionService.getPermission('pessoa:resource:create');
            const isVisible = !this.config.isReadOnly && hasCreatePermission;
            args.component.option('visible', isVisible);
          },
        },
      },
    ];
  }
}
