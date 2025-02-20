import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksItemComponent } from '../books-item/books-item.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { BookData, BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-books',
  imports: [BooksItemComponent, CommonModule, MatGridListModule, MatPaginatorModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
  @Input()
  query: string = ''
  @Input()
  page: number = 0
  @Input()
  limit: number = 10
  
  @Output()
  onSendInput = new EventEmitter<Observable<BookData>>();
  
  data: Observable<BookData> | undefined;
  total: number = 0
  
  
  constructor(
    private service: BooksService
  ) {}
  
  changePage(e: PageEvent) {
    this.page = e.pageIndex
    this.limit = e.pageSize
    this.setData()
  }
  
  ngOnInit(): void {
    this.setData()
  }

  setData(): void {
    this.data = this.service.search(this.query, this.page, this.limit)
  }
}
