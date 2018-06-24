import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private keyword:string;
  //绑定响应式
  private titleFilter:FormControl=new FormControl();

  //注入productService
  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
      value=>{this.keyword=value;
      console.log(this.keyword);}
  
    );
   }
  //product.component.html加载时就会执行下面的方法
  ngOnInit() {
    this.products=this.productService.getProducnts();
  }

}
