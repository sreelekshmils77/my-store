import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input() product;
  // @Input(alter) ale;
  // productDetails = {
  //   name: `Scenery` ,
  //   image: `assets/scene.jfif` ,
  //   details: `Painting of a scenery`
  //   // price: `1500`
  // };
  // alter = `image of a painting`;
  constructor(private router: Router ) { }
addToCart() {
  console.log(`clicked`);
}
viewDetails(id) {
  // console.log(`details kodukku`);
  this.router.navigate(['product', id  ]);
}
  ngOnInit() {
  }

}
