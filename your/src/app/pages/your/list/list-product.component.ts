import { Component, OnInit } from '@angular/core';
import { Product } from '@common/model/product.model';
import { remove, isEmpty } from 'lodash';
import { ProductService } from '@common/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductComponent implements OnInit {

  products: Array<Product> = [];

  name: string;  // variable du ngModel name
  content: string; // variable du ngModel content

  productToEdit: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addProduct() {
    this.productService.add({
      name: this.name,
      content: this.content
    }).subscribe(product => {
      this.products.push(product);
      this.name = null;
      this.content = null;
    });
  }

  editProduct(product: Product) {
    this.productToEdit = product;
    this.name = product.name;
    this.content = product.content;
  }

  valideEdit() {
    this.productService.edit({
      reference: this.productToEdit.reference,
      name: this.name,
      content: this.content
    }).subscribe(() => {
      this.productToEdit.name = this.name;
      this.productToEdit.content = this.content;
      this.endEdit();
    });
  }

  endEdit() {
    this.productToEdit = null;
    this.name = null;
    this.content = null;
  }

  deleteProduct(productToDelete: Product) {
    this.productService.delete(productToDelete.reference).subscribe(() => {
      remove(this.products, (product) => product === productToDelete);
    });
  }

  isProductValide(product: Product) {
    return !isEmpty(product.name) && !isEmpty(product.content);
  }
}​
