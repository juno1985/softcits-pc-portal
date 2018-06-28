import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class ProductService {

 
  constructor(private http:Http) { }

  //得到所有商品
  getProducts():Observable<ProductPager>{
    return this.http.get("/core/computer/all").map(res=>res.json());
  }

}
export class Product{
  constructor(
    public id:number,
    public trademark:string,
    public price:number,
    public pic:string,
    public rating:number
  ){}
}

export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public rating:number,
    public content:string
  ){}
}
export class ProductPager{
  constructor(
    public pageNum:number,
    public totalRows:number,
    public data:Product[]
  ){}
}