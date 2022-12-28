import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { MunicipioService } from '../../../service/municipio.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { MunicipioConfig } from '../municipio-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class MunicipioListView {
  id?: number;
  nome?: string;
  sede?: boolean;
}

@Component({
  selector: 'app-municipio-list',
  templateUrl: './municipio-list.component.html',
})
export class MunicipioListComponent extends StandardNgListComponent<MunicipioListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = MunicipioConfig;

  constructor(injector: Injector, protected MunicipioService: MunicipioService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, MunicipioService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [{}];
  }
}
