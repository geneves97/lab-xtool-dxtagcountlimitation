import { Component, Injector, OnInit } from '@angular/core';
import { StandardNgDetailComponent } from '../../../@core/template/standard-ng-detail-component';
import { MunicipioService } from '../../../service/municipio.service';
import { StandardNgConfig } from '../../../@core/template/standard-ng-config';
import { MunicipioConfig } from '../municipio-config';

class MunicipioDetail {
  id?: number;
  nome?: string;
  sede?: boolean;
}

@Component({
  selector: 'app-municipio-detail',
  templateUrl: './municipio-detail.component.html',
})
export class MunicipioDetailComponent extends StandardNgDetailComponent<MunicipioDetail, number> implements OnInit {
  config: StandardNgConfig = MunicipioConfig;

  constructor(injector: Injector, MunicipioService: MunicipioService) {
    super(injector, MunicipioService);
  }

  ngOnInit(): void {
    this.load();
  }
}
