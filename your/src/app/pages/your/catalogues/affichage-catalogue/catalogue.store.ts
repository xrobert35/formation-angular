import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commande } from '@common/model/commande.model';
import { Article } from '@common/model/article.model';


@Injectable()
export class CatalogueStore {

  commande: Commande;

  commandeUpdated: BehaviorSubject<Commande>;

  constructor() {
    this.commande = { ligneCommande: {} };
    this.commandeUpdated = new BehaviorSubject<Commande>(this.commande);
  }

  setCommande(commande: Commande) {
    this.commande = commande;
  }

  updateArticleQte(article: Article, qte: number) {
    this.commande.ligneCommande[article.code] = qte;
    this.commandeUpdated.next(this.commande);
  }

  onCommandeUpdated() {
    return this.commandeUpdated.asObservable();
  }
}
