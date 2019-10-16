import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = formBuilder.group({​
      email: ['jacky', [Validators.required, Validators.email]],​
      password: [null, Validators.required]​
    });​
  }

  async login() {​
    if (this.loginForm.valid) {​
      const logged = await this.authService.login(this.loginForm.value).toPromise();
      if (logged) {​
        this.router.navigate(['your']);​
      } else {​
        console.log('Bad credential');
      }​
    }​
  }
}​
