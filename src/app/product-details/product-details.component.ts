import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product[];

  constructor( private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
    const idPar = this.route.snapshot.params.id;
    this.productService.getProduct(idPar).subscribe(product => console.table(product));
    this.productService.getProduct(idPar).subscribe((productDetail: Product[]) => {
         this.product = productDetail;
    });

  }

}
