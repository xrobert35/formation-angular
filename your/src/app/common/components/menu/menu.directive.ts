import {  Input, Directive } from '@angular/core';

@Directive({
  selector: 'app-menu-item',
})
export class MenuItemDirective {
  @Input() libelle: string;
  @Input() routerLink: string;
}
