import { Component } from '@angular/core';
import { AuthService } from '@common/services/auth.service';

@Component({
  selector: 'app-yout',
  templateUrl: './your.component.html'
})
export class YourComponent {

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }

}
