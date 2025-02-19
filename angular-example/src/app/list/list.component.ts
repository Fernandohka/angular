import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnChanges, OnInit{
  @Input()
  pg: number = 1

  @Input()
  size: number = 10

  items: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  crrItems: string[] = []
  maxPg: number = Math.ceil(this.items.length / this.size);

  ngOnInit(): void {
    this.maxPg = Math.ceil(this.items.length / this.size);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.setCrrItems()
  }
  
  setCrrItems(){
    let start = (this.pg - 1) * this.size;
    let end = this.pg === this.maxPg ? this.items.length : this.pg * this.size;
    this.crrItems = []
    for (let i = start; i < end; i++)
      this.crrItems.push(this.items[i])
  }
}