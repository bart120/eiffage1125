import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: ``
})
export class TodoAddComponent {

  users: Array<UserModel> = [];
  formTodo = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false),
    userId: new FormControl(1, [Validators.required])
  });

  onSubmit(): void {

  }
}
