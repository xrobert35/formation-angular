import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@common/model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  add(product: Product) {
    return this.http.post<Product>('/api/product', product);
  }

  edit(product: Product) {
    return this.http.post<Product>(`/api/product/${product.reference}`, product);
  }

  delete(reference: string) {
    return this.http.delete(`/api/product/${reference}`);
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('/api/product/list');
  }
}
