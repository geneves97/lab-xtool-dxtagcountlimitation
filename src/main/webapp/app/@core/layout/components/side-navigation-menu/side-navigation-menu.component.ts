import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  OnDestroy, OnInit,
  Output,
  ViewChild,
  Injector
} from '@angular/core';
import {DxTreeViewComponent, DxTreeViewModule} from 'devextreme-angular/ui/tree-view';
import {navigation} from '../../../../app-navigation';
import * as events from 'devextreme/events';
import {SecurityIdentity} from "../../../../@security/service/security-identity.service";

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DxTreeViewComponent, {static: true})
  menu: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<string>();

  @Output()
  openMenu = new EventEmitter<any>();

  items: any[];

  constructor(private elementRef: ElementRef,
              private identity: SecurityIdentity,
              private injector: Injector) {
  }

  private _selectedItem: String;
  @Input()
  set selectedItem(value: String) {
    this._selectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  ngOnInit(): void {
    this.createMenu();
  }

  private createMenu() {
    this.items = navigation
      .filter(item => this.hasPermission(item))
      .map((item) => {
        if (item.path && !(/^\//.test(item.path))) {
          item.path = `/${item.path}`;
        }
        return {...item, expanded: !this._compactMode}
      });
  }

  private hasPermission(item): boolean {
    if (item?.data?.permissions?.only) {
      return this.identity.hasPermission(item?.data?.permissions?.only);
    }
    return true;
  }

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }

  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this._selectedItem);
    }
  }


  onItemClick(event) {
    this.selectedItemChanged.emit(event);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}

@NgModule({
  imports: [DxTreeViewModule],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent]
})
export class SideNavigationMenuModule {
}
