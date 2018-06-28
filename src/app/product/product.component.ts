import { Component, OnInit } from '@angular/core';
import { Product, ProductService,ProductPager } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private prodPager:ProductPager;
  private picLink="http://localhost:8882/mgt/upload/pc_pic/";
  //注入productService
  constructor(private productService:ProductService) {

   }
  //product.component.html加载时就会执行下面的方法
  ngOnInit() {
    this.productService.getProducts().subscribe(
      prodPager=>{
        this.products = prodPager.data;
        for(let index in this.products){
          this.products[index].pic = this.picLink + this.products[index].pic;
        }
      }
    );

  
  }

}

