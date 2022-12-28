import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { ZonaService } from '../../../service/zona.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { ZonaConfig } from '../zona-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

class ZonaListView {
  id?: number;
  sigla?: string;
  numero?: number;
}

@Component({
  selector: 'app-zona-list',
  templateUrl: './zona-list.component.html',
})
export class ZonaListComponent extends StandardNgListComponent<ZonaListView, number> implements OnInit {
  @ViewChild(DxDataGridComponent, { static: true })
  dataGrid: DxDataGridComponent;

  config: StandardNgConfig = ZonaConfig;

  constructor(injector: Injector, protected ZonaService: ZonaService, private ngxPermissionService: NgxPermissionsService) {
    super(injector, ZonaService);
  }

  ngOnInit(): void {
    this.load();
  }

  protected prepareToolbar(): Record<string, any>[] {
    return [{}];
  }
}
