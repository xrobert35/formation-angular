import { Component, Input, OnInit } from '@angular/core';
import { Niveau } from '@common/model/niveau.model';
import { CatalogueStore } from './catalogue.store';
import { sum } from 'lodash';

@Component({
  selector: 'app-affichage-catalogue',
  templateUrl: './affichage-catalogue.component.html',
  providers: [CatalogueStore] // une instance de catalogue store par affichageCatalogueComponent
})
export class AffichageCatalogueComponent implements OnInit {

  @Input() catalogue: Array<Niveau>;

  nbArticlesCommandes: number;

  constructor(private catalogueStore: CatalogueStore) { }

  ngOnInit() {
    this.catalogueStore.onCommandeUpdated().subscribe((commande) => {
      this.nbArticlesCommandes = sum(Object.values(commande.ligneCommande));
    });
  }
}
