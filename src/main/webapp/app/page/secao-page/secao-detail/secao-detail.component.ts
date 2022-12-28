import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { SecaoService } from '../../../service/secao.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { SecaoConfig } from '../secao-config';

class SecaoDetail {
  id?: number;
  numero?: number;
}

@Component({
  selector: 'app-secao-detail',
  templateUrl: './secao-detail.component.html',
})
export class SecaoDetailComponent extends StandardNgDetailComponent<SecaoDetail, number> implements OnInit {
  config: StandardNgConfig = SecaoConfig;

  constructor(injector: Injector, SecaoService: SecaoService) {
    super(injector, SecaoService);
  }

  ngOnInit(): void {
    this.load();
  }
}
