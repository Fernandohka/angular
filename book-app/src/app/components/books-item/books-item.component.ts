import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-books-item',
  imports: [MatCardModule],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent{
  @Input()
  title: string = 'Teste'
  @Input()
  author: string = 'Teste'
  @Input()
  price: number = 0
}
