import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from "../add-item/add-item.component";
import { Languages, TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [AddItemComponent, TranslatePipe ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  language: Languages = 'en'
  items: string[] = []
  
  
  
  
  ngOnInit(): void { }
  
  reciveNewItem(newItem: string) {
    this.items.push(newItem);
  }
}
