import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { TodoModel } from '../../../core/models/todo.model';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit {

  todos = signal<Array<TodoModel>>([]);

  users = new Map<number, Observable<UserModel>>();

  todoServ: TodoService = inject(TodoService);

  constructor(/*private todoService: TodoService*/) {

  }

  ngOnInit(): void {
    this.todoServ.getTodosByUserId(1).subscribe(data => { this.todos.set(data); console.log(this.todos()); });

  }

  getUserById(userId: number): Observable<UserModel> {
    if (!this.users.has(userId)) {
      this.users.set(userId, this.todoServ.getUserById(userId).pipe(shareReplay(1)));
    }
    return this.users.get(userId)!;
  }

  /*async ngOnInit() {
    this.todos = await this.todoServ.getTodosByUserIdAsync(1);
  }*/

}
