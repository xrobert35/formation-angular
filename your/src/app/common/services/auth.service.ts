import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@common/model/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return window.localStorage.getItem('auth-token');
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post('/auth/authenticate', credentials, {responseType: 'text'}).pipe(map((token) => {
      window.localStorage.setItem('auth-token', token);
      return true;
    }), catchError(() => {
      return of(false);
    }));
  }

  logout() {
    window.localStorage.removeItem('auth-token');
    this.router.navigate(['login']);
  }

  me() {
    return this.http.get<User>('/api/me');
  }
}​
