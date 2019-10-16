import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { YourComponent } from './pages/your.component';
import { EnsureUserAuthGuard } from '@common/guard/auth.guard';
import { HomeComponent } from './pages/your/home/home.component';
import { ProductsResolver } from '@common/resolvers/product.resolver';
import { ListProductComponent } from './pages/your/list/list-product.component';
import { YourCommonModule } from '@common/common.module';
import { CatalogueComponent } from './pages/your/catalogues/catalogue.component';
import { CatalogueResolver } from './pages/your/catalogues/catalogue.resolver';
import { AffichageArticleComponent } from './pages/your/catalogues/affichage-catalogue/affichage-article/affichage-article.component';
import { AffichageNiveauComponent } from './pages/your/catalogues/affichage-catalogue/affichage-niveau/affichage-niveau.component';
import { AffichageCatalogueComponent } from './pages/your/catalogues/affichage-catalogue/affichage-catalogue.component';

const homeRouter: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'your', component: YourComponent,
    canActivate: [EnsureUserAuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'catalogue', component: CatalogueComponent, resolve: { catalogue: CatalogueResolver } },
      { path: 'list', component: ListProductComponent, resolve: { products: ProductsResolver } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'your', pathMatch: 'full' },
];

@NgModule({
  declarations: [ListProductComponent,
    LoginComponent,
    HomeComponent,
    YourComponent,
    CatalogueComponent,
    AffichageArticleComponent,
    AffichageNiveauComponent,
    AffichageCatalogueComponent],
  imports: [YourCommonModule,
    RouterModule.forRoot(homeRouter, { useHash: true })],
  providers: [CatalogueResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
