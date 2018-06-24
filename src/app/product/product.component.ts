import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  //注入productService
  constructor(private productService:ProductService) { }
  //product.component.html加载时就会执行下面的方法
  ngOnInit() {
    this.products=this.productService.getProducnts();
  }

}
