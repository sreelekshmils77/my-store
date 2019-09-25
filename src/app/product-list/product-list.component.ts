import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  show: 'Show search term here';
  constructor(private productService: ProductService) {
    // this.products = this.productService.getProducts();

    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }
  ngOnInit() { }
  newPushMessage(message) {
    console.log(message);
    this.show = message;

  }

}
