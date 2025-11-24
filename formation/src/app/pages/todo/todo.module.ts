import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
