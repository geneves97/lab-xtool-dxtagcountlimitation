import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { ZonaService } from '../../../service/zona.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { ZonaConfig } from '../zona-config';

class ZonaDetail {
  id?: number;
  sigla?: string;
  numero?: number;
}

@Component({
  selector: 'app-zona-detail',
  templateUrl: './zona-detail.component.html',
})
export class ZonaDetailComponent extends StandardNgDetailComponent<ZonaDetail, number> implements OnInit {
  config: StandardNgConfig = ZonaConfig;

  constructor(injector: Injector, ZonaService: ZonaService) {
    super(injector, ZonaService);
  }

  ngOnInit(): void {
    this.load();
  }
}
