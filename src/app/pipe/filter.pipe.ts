import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField:string,keyword:string): any {
    //如果过滤的字段(商品名/商品描述)和关键字都没传进来
    if(!filterField || !keyword){
     //直接将list返回
     return list;
   }
 
   return list.filter(
     item=>{
       //让fieldValue等于集合内对象的filterField属性值
       let fieldValue = item[filterField];
 
       console.log("关键字: " + keyword);
       console.log("搜索字段: "+filterField);
 
 
       //判断是否包含关键字keyword
       //true 返回数据
       return fieldValue.indexOf(keyword) >=0;
     }
   );
   }
}
