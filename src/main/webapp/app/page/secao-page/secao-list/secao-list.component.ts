import { Component, Injector, OnInit, ViewChild, Injectable } from '@angular/core';
import { DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';
import { SecaoService } from '../../../service/secao.service';
import { StandardNgListComponent } from '../../../@core/template/standard-ng-list-component';
import { SecaoConfig } from '../secao-config';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { NgxPermissionsService } from 'ngx-permissions';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import ArrayStore from 'devextreme/data/array_store';



class SecaoListView {
  id?: number;
  numero?: number;
}

@Component({
  selector: 'app-secao-list',
  templateUrl: './secao-list.component.html',
})
export class SecaoListComponent extends StandardNgListComponent<SecaoListView, number> implements OnInit {
  @ViewChild(DxTemplateModule, { static: true })
  dataGrid: DxTagBoxModule;

  config: StandardNgConfig = SecaoConfig;

  simpleProducts: string[];

  editableProducts: string[];

  dataSource: any;

  constructor(service: Service) {
    this.dataSource = new ArrayStore({
      data: service.getProducts(),
      key: 'Id',
    });
    this.simpleProducts = service.getSimpleProducts();
    this.editableProducts = this.simpleProducts.slice();
  }

  onCustomItemCreating(args) {
    const newValue = args.text;
    this.editableProducts.unshift(newValue);
    args.customItem = newValue;
  }
  //
  // constructor(injector: Injector, protected SecaoService: SecaoService, private ngxPermissionService: NgxPermissionsService) {
  //   super(injector, SecaoService);
  // }
  //
  // ngOnInit(): void {
  //   this.load();
  // }
  //
  // protected prepareToolbar(): Record<string, any>[] {
  //   return [{}];
  // }
}
// @NgModule({
//   imports: [
//     BrowserModule,
//     DxTemplateModule,
//     DxTagBoxModule,
//   ],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
//   providers: [SecaoService],
// })

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

