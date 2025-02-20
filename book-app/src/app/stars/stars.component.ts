import { ListRange } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit{
  @Input()
  n: number | undefined = 1
  num: Array<number | undefined> = []; 
  
  ngOnInit(): void {
    if (this.n) {
      for (let index = 0; index < this.n; index++) {
        this.num.push(this.n)
      }
    }
  }
}
