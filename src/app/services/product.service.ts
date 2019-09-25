import { Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    // {
    //     title: `Scenery` ,
    //     imageUrl: `assets/scene.jfif` ,
    //     description: `Painting of a scenery`,
    //     price: `1500`,
    //     alter: `image of a painting`,
    //     isAvailable: false
    //   },
    //   {
    //     title: `Cake` ,
    //     imageUrl: `assets/cake.jfif` ,
    //     details: `Wedding Cake`,
    //     price: `1500`,
    //     alter: `image of cake`,
    //     isAvailable: true

    // },
    // {
    //     name: `Noodles` ,
    //     image: `assets/noodles.jpg` ,
    //     details: `Ramen Noodles`,
    //     price: `150`,
    //     alter: `image of noodles`,
    //     isAvailable: true
    //   }
  ];
  // private baseUrl = `http://localhost:3000/`;
  constructor(
    private httpClient: HttpClient
  ) { }
  getProducts() {
    // return this.httpClient.get(environment.baseUrl + 'product');
    return this.httpClient.get(`${environment.baseUrl}product`);

    // return this.products;
  }
  getProduct(productId) {
    return this.httpClient.get(environment.baseUrl + 'product/' + productId);
  }

}
