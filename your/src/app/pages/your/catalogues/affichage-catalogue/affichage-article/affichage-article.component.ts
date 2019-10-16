import { Component, Input } from '@angular/core';
import { Article } from '@common/model/article.model';
import { CatalogueStore } from '../catalogue.store';

@Component({
  selector: 'app-affichage-article',
  templateUrl: './affichage-article.component.html',
})
export class AffichageArticleComponent {

  @Input() article: Article;

  constructor(private catalogueStore: CatalogueStore) {
  }

  onQteChange(qte: number) {
    this.catalogueStore.updateArticleQte(this.article, qte);
  }
}
