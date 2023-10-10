import { Component } from '@angular/core';
import { AddTodo } from './todo.state';
import { Store } from '@ngxs/store';

import { TodoItem } from './todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string = '';

  constructor(private store: Store) {}

  get todos(): TodoItem[] {
    return this.store.selectSnapshot((state) => state.todos.todos);
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: TodoItem = {
        id: Date.now(),
        text: this.newTodo
      };
      this.store.dispatch(new AddTodo(todo));
      this.newTodo = '';
    }
  }
}
