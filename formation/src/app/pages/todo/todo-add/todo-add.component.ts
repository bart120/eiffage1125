import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { UserModel } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { TodoService } from '../../../core/services/todo.service';
import { TodoModel } from '../../../core/models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: ``
})
export class TodoAddComponent implements OnInit {
  todo = {};//update

  users: Array<UserModel> = [];
  formTodo = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl<boolean>(false),
    userId: new FormControl<number>(3, [Validators.min(1)])
  });

  constructor(private userService: UserService,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });

    //this.formTodo.patchValue(this.todo); //update
  }

  onSubmit(): void {
    if (this.formTodo.invalid) {
      this.formTodo.markAllAsTouched();
      return;
    }

    const todo: TodoModel = { id: -1, ...this.formTodo.value } as TodoModel;

    //Object.assign(this.todo, this.formTodo.value); // update

    this.todoService.addTodo(todo).subscribe(addedTodo => {
      console.log('Todo added:', addedTodo);
      //this.formTodo.reset({ completed: false, userId: this.users[0]?.id, title: '' });
      //this.router.navigate(['/todos/details', addedTodo.id]);
      this.router.navigate(['/todos']);
    });


  }
}
