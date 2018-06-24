import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[] = [
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

  private comments:Comment[]=[
    new Comment(1,102,"2017-02-01 22:22:22",3,"东西不错"),
    new Comment(2,102,"2017-02-01 22:22:22",1,"东西不错"),
    new Comment(3,103,"2017-02-01 22:22:22",2,"东西不错"),
    new Comment(4,104,"2017-02-01 22:22:22",4,"东西不错"),
    new Comment(5,109,"2017-02-01 22:22:22",5,"东西不错"),
    new Comment(6,109,"2017-02-01 22:22:22",3,"东西不错"),
    new Comment(7,108,"2017-02-01 22:22:22",2,"东西不错")
  ]

  constructor() { }

  //得到所有商品
  getProducnts():Product[]{
    return this.products;
  }

  //函数:返回类型
  getProduct(id:number):Product{
    return this.products.find((product:Product)=>product.id==id);
  }


  getCommentsForProductId(id:number){
    return this.comments.filter((comment:Comment)=>comment.productId==id);
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