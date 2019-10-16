import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { MenuItemDirective } from './menu.directive';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements AfterContentInit {

  @ContentChildren(MenuItemDirective) queryItems: QueryList<MenuItemDirective>;​
  items: MenuItemDirective[];

  ngAfterContentInit() {
    this.items = this.queryItems.toArray();
    this.queryItems.changes.subscribe( (items) => {
      this.items = items;
    });
  }
}
