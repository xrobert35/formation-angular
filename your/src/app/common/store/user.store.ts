import { Injectable } from '@angular/core';
import { User } from '@common/model/user.model';
import { RoleEnum } from '@common/model/role.enum';

@Injectable()
export class UserStore {
  user: User;

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  hasRole(role: RoleEnum) {
    return this.user && this.user.role === role;
  }
}
