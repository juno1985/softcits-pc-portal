import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }
//product.component.html加载时就会执行下面的方法
  ngOnInit() {
    this.products = [
      new Product(102, "IBM电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",5),
      new Product(103, "DELL电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/68f5d46a301045c39f1db349fe3f719a.jpg",4),
      new Product(104, "HP电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",3),
      new Product(105, "MI电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",2),
      new Product(106, "HUAWEI电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",1),
      new Product(107, "IBM电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",2),
      new Product(108, "IBM电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",3),
      new Product(109, "IBM电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",4),
      new Product(110, "IBM电脑", 9999.99, "http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg",5)
    ];
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