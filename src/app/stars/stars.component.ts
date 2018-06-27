import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  private stars: boolean[];
  @Input()
  private rating: number = 0;

  constructor() { }

  ngOnInit() {
      // this.stars = [false, true, true, true, true];
      this.stars = [];
      for(let i = 1; i <=5; i++){
        this.stars.push(i > this.rating);
  
      }
  }

  clickStar(index:number){
    //点击第一个星星时,下标是0,得到的星星个数是0+1
    this.rating=index+1;

    //重新计算总星星数
    this.ngOnInit();
  }
}
