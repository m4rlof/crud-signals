import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos = this.todoService.toDos;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public addTodo() {
    const todo = {
      id: '2',
      name: 'Make Pasta',
      description: 'Make pasta for dinner.'
    }
    this.todoService.createToDo(todo);
  }

  public modifyTodo(todo: ToDo, index: number) {
    this.todoService.editToDo({ ...todo, name: 'Make Cookies' }, index)
  }

  public removeTodo(index: number) {
    this.todoService.deleteTodo(index);
  }

}
