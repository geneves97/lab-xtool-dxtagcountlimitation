import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { SecaoService } from '../../../service/secao.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { SecaoConfig } from '../secao-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class SecaoListView {
  id?: number;
  numero?: number;
}

@Component({
  selector: 'app-secao-list',
  templateUrl: './secao-list.component.html',
})
export class SecaoListComponent extends StandardNgListComponent<SecaoListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = SecaoConfig;

  constructor(injector: Injector, protected SecaoService: SecaoService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, SecaoService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [{}];
  }
}
