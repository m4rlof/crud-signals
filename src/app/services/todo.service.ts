import { Injectable, signal } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})


export class TodoService {
  public toDos = signal<ToDo[]>([
    {
      id: '1',
      name: 'Make a cake',
      description: 'Make a Cake for my mom.'
    },
  ]);

  public createToDo(todo: ToDo) {
    this.toDos.set([todo, ...this.toDos()]);
  }

  public editToDo(todo: ToDo, index: number) {
    return this.toDos.mutate(todos => {
      todos[index] = todo;
      return todos;
    });
  }

  public deleteTodo(index: number) {
    return this.toDos.update(todos => {
      const newTodo = todos.filter((t, i) => i !== index);
      todos = newTodo;
      return todos;
    });
  }

}
