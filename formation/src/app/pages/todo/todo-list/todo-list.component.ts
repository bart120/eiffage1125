import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { TodoModel } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit {

  todos: Array<TodoModel> = [];

  todoServ: TodoService = inject(TodoService);

  constructor(/*private todoService: TodoService*/) {

  }

  ngOnInit(): void {
    this.todoServ.getAllTodos().subscribe(data => this.todos = data);

  }

}
