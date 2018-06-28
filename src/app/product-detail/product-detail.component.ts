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
    //评论里默认给5颗星
    newRating:number = 5;
    //保存评价内容
    newComment:string="";
    idCommentHidden=true;
  constructor(private routInfo: ActivatedRoute,
              private productService:ProductService) {
  
   }

  ngOnInit() {
    let productId:number = this.routInfo.snapshot.params["productId"];
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getCommentsForProductId(productId);
  }

  addComment(){
    let comment=new Comment(0,this.product.id,new Date().toISOString(),this.newRating,this.newComment);
    this.comments.unshift(comment);

    this.newComment=null;
    this.newRating=5;
    this.idCommentHidden=true;
  }
}
