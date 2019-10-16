import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';
import { UserStore } from '@common/store/user.store';
import { RoleEnum } from '@common/model/role.enum';

@Directive({
  selector: '[hasRole]'
})
export class HasRole {

  @Input() set hasRole(role: RoleEnum) {
    if (this.userStore.hasRole(role)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private userStore: UserStore) { }


}
