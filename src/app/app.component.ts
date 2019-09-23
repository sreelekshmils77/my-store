import { Component } from '@angular/core';
import { Product } from './models/Products';
import { ProductService } from './services/product.service';
// import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  constructor() { }
  // products: Product[] = [];
  // constructor(private productService: ProductService) {
  //   // this.products = this.productService.getProducts();

  //    this.productService.getProducts().subscribe((res: Product[]) => {
  //      this.products = res;
  //    });

    // this.products.push(this.productDetails);
    // this.products.push(this.product2);
    // this.products.push({
    //   name: `Noodles` ,
    //   image: `assets/noodles.jpg` ,
    //   details: `Ramen Noodles`,
    //   price: `150`,
    //   alter: `image of noodles`,
    //   isAvailable: true
    // });
  //   console.log(this.products);
  // }
  // productDetails: Product = {
  //   name: `Scenery` ,
  //   image: `assets/scene.jfif` ,
  //   details: `Painting of a scenery`,
  //   price: `1500`,
  //   alter: `image of a painting`,
  //   isAvailable: false
  // };
  // product2: Product = {
  //   name: `Cake` ,
  //   image: `assets/cake.jfif` ,
  //   details: `Wedding Cake`,
  //   price: `1500`,
  //   alter: `image of cake`,
  //   isAvailable: true
  // };
}
