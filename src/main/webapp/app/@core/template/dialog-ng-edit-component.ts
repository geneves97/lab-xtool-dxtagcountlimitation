import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {DxFormComponent} from "devextreme-angular/ui/form";
import {Observable, Subscription} from "rxjs";
import {take} from "rxjs/operators";
import notify from "devextreme/ui/notify";
import {StandardNgConfig} from "./standard-ng-config";
import {EventEmitter, Injector, Output} from "@angular/core";
import {StandardNgService} from "./standard-ng-service";

export abstract class DialogNgEditComponent<T, ID> {

  abstract form: DxFormComponent;

  formData: T;

  visible = false;

  saveSub: Subscription;

  pageTitle: string;

  abstract config: StandardNgConfig;

  public title: Title;

  private activatedRoute: ActivatedRoute;

  private router: Router;

  abstract onAfterSave = new EventEmitter<T>();

  protected constructor(
    protected injector: Injector,
    private service: StandardNgService
  ) {
    this.title = injector.get(Title);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  create(type: (new () => T)) {
    this.title.setTitle(this.config.editModule.createTitle);
    this.formData = new type();
    this.showDialog();
  }

  edit(id: ID) {
    this.title.setTitle(this.config.editModule.editTitle);
    this.findById(id)
      .pipe(take(1))
      .subscribe(resource => {
        this.formData = resource
        this.showDialog();
      });
  }


  doSave(event) {
    event.preventDefault();
    const message = this.formData['id'] ? this.config.editModule.onSuccessEditMessage : this.config.editModule.onSuccessCreateMessage;
    this.saveSub = this.save()
      .pipe(take(1))
      .subscribe((resource: T) => {
        notify(
          {
            message,
            position: 'top center',
          },
          'success',
          5000,
        );
        this.closeDialog();
        this.onAfterSave.emit(resource);
      });
  }

  protected findById(id: ID): Observable<T> {
    return this.service.findById(id);
  }

  protected save(): Observable<T> {
    return this.service.save(this.formData);
  }

  private showDialog() {
    this.visible = true;
  }

  private closeDialog() {
    this.visible = false;
  }

}
