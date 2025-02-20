import { Component } from '@angular/core';
import { BooksItemComponent } from '../components/books-item/books-item.component';
import { BooksComponent } from '../components/books/books.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-page',
  imports: [BooksComponent, CommonModule],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {
  
}
