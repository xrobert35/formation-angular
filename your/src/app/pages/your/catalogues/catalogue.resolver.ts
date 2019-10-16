import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Niveau } from '@common/model/niveau.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatalogueResolver implements Resolve<Array<Niveau>> {

  constructor(private http: HttpClient) { }

  resolve() {
    return this.http.get<Array<Niveau>>('/assets/catalogue.json');
  }

}​
