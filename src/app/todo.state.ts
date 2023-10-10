import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';


export interface TodoItem {
  id: number;
  text: string;
}


export interface TodoStateModel {
  todos: TodoItem[];
}



export class AddTodo {
    static readonly type = '[Todo] Add Todo';
  
    constructor(public payload: TodoItem) {}
  }

@Injectable()
@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: []
  }
})

export class TodoState {

  @Selector()
  static getTodos(state: TodoStateModel): TodoItem[] {
    return state.todos;
  }

  @Action(AddTodo)
  addTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }
}


