import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {StandardNgService} from "../@core/template/standard-ng-service";

@Injectable({
providedIn: 'root'
})
export class MunicipioService extends StandardNgService {

    URL_API: string = `${environment.contextPath}/api/municipio`;

    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

}
