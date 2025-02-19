import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListComponent } from './list/list.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, ListComponent, PaginacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
}
