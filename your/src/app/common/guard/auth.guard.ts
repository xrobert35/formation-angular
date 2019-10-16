import * as lodash from 'lodash';

import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '@common/services/auth.service';
import { map } from 'rxjs/operators';
import { UserStore } from '@common/store/user.store';


@Injectable()
export class EnsureUserAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private userStore: UserStore) { }

  canActivate() {
    if (!lodash.isEmpty(this.authService.getToken())) {
      return this.authService.me().pipe(map(user => {
        this.userStore.setUser(user);
        return true;
      }));
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
