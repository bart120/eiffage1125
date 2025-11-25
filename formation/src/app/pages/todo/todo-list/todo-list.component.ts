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
    this.todoServ.getTodosByUserId(1).subscribe(data => { this.todos = data; console.log(this.todos); });

  }

  /*async ngOnInit() {
    this.todos = await this.todoServ.getTodosByUserIdAsync(1);
  }*/

}
