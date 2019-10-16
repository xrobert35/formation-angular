import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Niveau } from '@common/model/niveau.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {

  catalogue: Array<Niveau>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.catalogue = this.activatedRoute.snapshot.data.catalogue;
  }
}
