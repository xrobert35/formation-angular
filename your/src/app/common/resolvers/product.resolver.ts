import { ProductService } from '@common/services/product.service';
import { Product } from '@common/model/product.model';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductsResolver implements Resolve<Array<Product>> {

  constructor(private productService: ProductService) { }

  resolve() {
    return this.productService.getProducts();
  }

}​
