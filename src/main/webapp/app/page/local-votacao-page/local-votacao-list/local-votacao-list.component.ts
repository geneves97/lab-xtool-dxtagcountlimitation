import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { LocalVotacaoService } from '../../../service/local-votacao.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { LocalVotacaoConfig } from '../local-votacao-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class LocalVotacaoListView {
  id?: number;
  nome?: string;
  numero?: number;
  cep?: string;
}

@Component({
  selector: 'app-local-votacao-list',
  templateUrl: './local-votacao-list.component.html',
})
export class LocalVotacaoListComponent extends StandardNgListComponent<LocalVotacaoListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = LocalVotacaoConfig;

  constructor(injector: Injector, protected LocalVotacaoService: LocalVotacaoService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, LocalVotacaoService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [{}];
  }
}
