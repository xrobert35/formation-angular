import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@common/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addAuthentication(req);
    return httpHandler.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigateByUrl('/login');
      }
      return throwError(err);
    }));
  }

  addAuthentication(req: HttpRequest<any>): HttpRequest<any> {
    const headers: any = {};
    const authToken = this.authService.getToken();
    if (authToken) {
      headers.authorization = authToken;
      req = req.clone({
        setHeaders: headers
      });
    }
    return req;
  }
}​
