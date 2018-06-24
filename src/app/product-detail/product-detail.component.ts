import { Product, ProductService, Comment } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Comment[];
  constructor(private routInfo: ActivatedRoute,
              private productService:ProductService) {
  
   }

  ngOnInit() {
    let productId:number = this.routInfo.snapshot.params["productId"];
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getCommentsForProductId(productId);
  }

}
