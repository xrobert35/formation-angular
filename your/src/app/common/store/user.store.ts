import { Injectable } from '@angular/core';
import { User } from '@common/model/user.model';

@Injectable()
export class UserStore {
  user: User;

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}
