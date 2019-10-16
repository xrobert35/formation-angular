import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '@common/services/auth.service';
import { EnsureUserAuthGuard } from './guard/auth.guard';
import { ProductsResolver } from './resolvers/product.resolver';
import { RouterModule } from '@angular/router';
import { MenuItemDirective } from './components/menu/menu.directive';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { UserStore } from './store/user.store';
import { MyHttpInterceptor } from './interceptors/http.interceptor';
import { ProductService } from './services/product.service';
import { MyImputComponent } from './components/my-input/my-input.component';

// liste des modules partages
const sharedModules = [
  BrowserModule,
  RouterModule,
  FormsModule,
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule
];

// liste des components partages
const sharedComponents = [
  MenuItemDirective, MenuComponent, MyImputComponent
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents,
  ],
  providers: [EnsureUserAuthGuard, AuthService, ProductsResolver, ProductService, UserStore,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }],
})
export class YourCommonModule { }
